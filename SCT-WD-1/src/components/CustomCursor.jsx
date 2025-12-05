import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] 
                 transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      <div
        className="
          w-24 h-24 rounded-full
          bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500
          blur-[50px]
          opacity-90
          shadow-[0_0_80px_20px_rgba(255,0,200,0.4)]
          animate-pulse
        "
      ></div>
    </div>
  );
}
