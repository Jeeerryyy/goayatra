import { useEffect, useRef } from "react";

export default function ThreeDBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for 3D parallax & tilt
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Create 3D Nodes / Particles
    const PARTICLE_COUNT = 60;
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 1.5,
      z: Math.random() * 800 + 100, // 3D depth z-axis
      baseZ: Math.random() * 800 + 100,
      radius: Math.random() * 3 + 1.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.8,
      color: Math.random() > 0.4 ? "rgba(139, 89, 123, " : "rgba(224, 142, 121, ",
      pulse: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Normalized mouse offset (-1 to 1)
      const mouseNormX = (mouse.x - width / 2) / (width / 2);
      const mouseNormY = (mouse.y - height / 2) / (height / 2);

      ctx.clearRect(0, 0, width, height);

      // Render 3D Perspective Wave Grid Matrix
      ctx.save();
      ctx.translate(width / 2, height / 2);

      const fov = 400; // Field of view depth scale
      const rotY = mouseNormX * 0.25; // 3D rotation Y angle
      const rotX = -mouseNormY * 0.25; // 3D rotation X angle

      // Floating 3D Geometric Nodes & Connecting Lines
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.pulse += 0.02;

        // Move particles
        p.x += p.vx;
        p.y += p.vy;
        p.z += Math.sin(p.pulse) * 0.5 + p.vz;

        // Wrap boundaries in 3D box
        if (p.x < -width) p.x = width;
        if (p.x > width) p.x = -width;
        if (p.y < -height) p.y = height;
        if (p.y > height) p.y = -height;
        if (p.z < 50) p.z = 900;
        if (p.z > 900) p.z = 50;

        // Apply 3D Rotation based on mouse
        // Y-axis rotation
        let x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY);
        let z1 = p.z * Math.cos(rotY) + p.x * Math.sin(rotY);

        // X-axis rotation
        let y1 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = z1 * Math.cos(rotX) + p.y * Math.sin(rotX);

        // 3D Perspective Projection
        const scale = fov / (fov + z2);
        const px = x1 * scale;
        const py = y1 * scale;
        const alpha = Math.max(0.1, Math.min(0.7, (1 - z2 / 1000) * (scale * 0.8)));

        projected.push({ px, py, scale, alpha, color: p.color, radius: p.radius * scale });

        // Draw particle sphere with 3D gradient glow
        const rad = p.radius * scale * (1 + Math.sin(p.pulse) * 0.2);
        if (rad > 0 && z2 > -fov) {
          const grad = ctx.createRadialGradient(px, py, 0, px, py, rad * 3);
          grad.addColorStop(0, `${p.color}${alpha})`);
          grad.addColorStop(1, `${p.color}0)`);

          ctx.beginPath();
          ctx.arc(px, py, rad * 3, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.5, rad), 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${alpha * 1.3})`;
          ctx.fill();
        }
      }

      // Draw 3D Proximity Constellation Lines between close nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * Math.min(p1.alpha, p2.alpha) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(139, 89, 123, ${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw Interactive 3D Flow Ribbon Curve
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      const ribbonPoints = 12;
      for (let k = 0; k <= ribbonPoints; k++) {
        const percent = k / ribbonPoints;
        const rx = (percent - 0.5) * width * 1.2;
        const ry = Math.sin(time + percent * Math.PI * 2 + mouseNormX) * 45 + Math.cos(percent * 4) * 20;
        const rz = 250 + Math.sin(percent * Math.PI) * 150;

        const scale = fov / (fov + rz);
        const px = rx * scale;
        const py = ry * scale;

        if (k === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = `rgba(139, 89, 123, ${0.15 + Math.abs(mouseNormY) * 0.1})`;
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 opacity-80 ${className}`}
    />
  );
}
