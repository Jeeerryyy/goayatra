import { useEffect, useRef } from "react";

export default function OceanWave3DAnimation({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for wave ripples & 3D interaction
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2, force: 0 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.force = 1.0;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 3D Floating Sea Spray / Glowing Particles
    const SPRAY_COUNT = 45;
    const particles = Array.from({ length: SPRAY_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.8 + height * 0.2,
      z: Math.random() * 500 + 50,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: -Math.random() * 0.7 - 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? "255, 243, 235" : "139, 89, 123",
      pulse: Math.random() * Math.PI * 2,
    }));

    // Multi-layer 3D Waves Configuration
    const waveLayers = [
      {
        amplitude: 22,
        wavelength: 0.008,
        speed: 0.025,
        color: "rgba(139, 89, 123, 0.18)",
        yOffset: 0.55,
        foamColor: "rgba(255, 255, 255, 0.25)",
      },
      {
        amplitude: 18,
        wavelength: 0.012,
        speed: 0.035,
        color: "rgba(224, 142, 121, 0.15)",
        yOffset: 0.65,
        foamColor: "rgba(255, 243, 235, 0.3)",
      },
      {
        amplitude: 28,
        wavelength: 0.006,
        speed: 0.018,
        color: "rgba(73, 49, 41, 0.12)",
        yOffset: 0.75,
        foamColor: "rgba(255, 255, 255, 0.35)",
      },
      {
        amplitude: 15,
        wavelength: 0.015,
        speed: 0.045,
        color: "rgba(139, 89, 123, 0.22)",
        yOffset: 0.85,
        foamColor: "rgba(255, 255, 255, 0.4)",
      },
    ];

    let time = 0;

    const render = () => {
      time += 1;

      // Mouse position easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      mouse.force *= 0.96;

      ctx.clearRect(0, 0, width, height);

      // Render 3D Perspective Rolling Waves
      waveLayers.forEach((layer, index) => {
        ctx.beginPath();
        const baseLineY = height * layer.yOffset;

        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 4) {
          // Dynamic wave formula with mouse influence
          const mouseDist = Math.abs(x - mouse.x);
          const mouseWave = Math.exp(-mouseDist / 200) * Math.sin(time * 0.1) * 15 * mouse.force;

          const y1 =
            Math.sin(x * layer.wavelength + time * layer.speed) * layer.amplitude +
            Math.cos(x * layer.wavelength * 0.6 + time * layer.speed * 0.8) * (layer.amplitude * 0.5) +
            mouseWave;

          const y = baseLineY + y1;

          if (x === 0) ctx.lineTo(0, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Wave gradient fill
        const waveGrad = ctx.createLinearGradient(0, baseLineY - layer.amplitude, 0, height);
        waveGrad.addColorStop(0, layer.color);
        waveGrad.addColorStop(1, "rgba(73, 49, 41, 0.05)");

        ctx.fillStyle = waveGrad;
        ctx.fill();

        // Wave Crest Sea Foam Effect
        ctx.beginPath();
        for (let x = 0; x <= width; x += 6) {
          const mouseDist = Math.abs(x - mouse.x);
          const mouseWave = Math.exp(-mouseDist / 200) * Math.sin(time * 0.1) * 15 * mouse.force;

          const y =
            baseLineY +
            Math.sin(x * layer.wavelength + time * layer.speed) * layer.amplitude +
            Math.cos(x * layer.wavelength * 0.6 + time * layer.speed * 0.8) * (layer.amplitude * 0.5) +
            mouseWave;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = layer.foamColor;
        ctx.lineWidth = 2.5 - index * 0.4;
        ctx.stroke();
      });

      // Render 3D Floating Sea Particles & Sparkles
      particles.forEach((p) => {
        p.pulse += 0.03;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.pulse) * 0.5;

        // Reset particles that drift off top or sides
        if (p.y < height * 0.1 || p.x < 0 || p.x > width) {
          p.y = height * 0.95;
          p.x = Math.random() * width;
        }

        // 3D Perspective scale
        const fov = 350;
        const scale = fov / (fov + p.z);
        const radius = p.size * scale * (1 + Math.sin(p.pulse) * 0.3);
        const currentOpacity = p.opacity * scale * (0.6 + Math.sin(p.pulse) * 0.4);

        const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3);
        glowGrad.addColorStop(0, `rgba(${p.color}, ${currentOpacity})`);
        glowGrad.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 1.2})`;
        ctx.fill();
      });

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
      className={`pointer-events-none absolute inset-0 z-10 ${className}`}
    />
  );
}
