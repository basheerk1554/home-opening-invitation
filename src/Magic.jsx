import { useEffect, useState, useRef } from "react";

// --- Magical Fireflies Background ---
export function Fireflies({ count = 40 }) {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setFireflies(generated);
  }, [count]);

  return (
    <div className="fireflies-container" aria-hidden="true">
      {fireflies.map((ff) => (
        <div
          key={ff.id}
          className="firefly"
          style={{
            left: `${ff.left}%`,
            top: `${ff.top}%`,
            width: `${ff.size}px`,
            height: `${ff.size}px`,
            animationDuration: `${ff.duration}s`,
            animationDelay: `${ff.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// --- Magical Cursor Trail ---
export function CursorTrail() {
  const [particles, setParticles] = useState([]);
  const particleId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create a new sparkle on mouse move occasionally
      if (Math.random() > 0.4) return;
      
      const newParticle = {
        id: particleId.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 5,
        color: Math.random() > 0.5 ? "#f0c94d" : "#fff7db"
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove after animation finishes
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="cursor-trail-container" aria-hidden="true">
      {particles.map((p) => (
        <svg
          key={p.id}
          className="cursor-sparkle"
          viewBox="0 0 120 40"
          style={{
            left: p.x - p.size / 2,
            top: p.y - p.size / 2,
            width: p.size * 2,
            height: p.size * 2,
          }}
        >
          <polygon
            points="60,0 70,40 120,60 70,80 60,120 50,80 0,60 50,40"
            fill={p.color}
            opacity="0.8"
          />
        </svg>
      ))}
    </div>
  );
}
