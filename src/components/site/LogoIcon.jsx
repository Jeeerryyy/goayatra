export default function LogoIcon({ variant = "full", className = "", size }) {
  return (
    <img
      src="/images/logo.png"
      alt="Goa Yatra - TTG Travels"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
      className={`object-contain ${className || (variant === "icon" ? "h-12 md:h-16 w-auto" : "h-16 md:h-20 w-auto")}`}
      style={size ? { height: size } : undefined}
    />
  );
}


