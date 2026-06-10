import { useEffect, useRef } from "react";

export default function ReviewTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  const position = useRef(0);

  // 💎 slower base motion (luxury drift)
  const speed = useRef(0.18);
  const targetSpeed = useRef(0.18);

  const items = [
    "Professional and highly responsive legal team",
    "Supportive guidance through a difficult divorce process",
    "Clear communication and strong legal strategy",
    "Efficient handling of custody and family matters",
    "Compassionate representation when it mattered most",
    "Knowledgeable attorneys with great attention to detail",
  ];

  useEffect(() => {
    let frame: number;

    const animate = () => {
      const el = containerRef.current;
      if (!el) return;

      // smooth inertia (lower = more luxury feel)
      speed.current += (targetSpeed.current - speed.current) * 0.05;

      position.current -= speed.current;

      // seamless loop
      if (Math.abs(position.current) >= el.scrollWidth / 2) {
        position.current = 0;
      }

      el.style.transform = `translateX(${position.current}px)`;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="relative w-screen overflow-hidden bg-base-100/60 backdrop-blur-md py-3 border-y border-white/10"
      onMouseEnter={() => (targetSpeed.current = 0.06)} // near pause
      onMouseLeave={() => (targetSpeed.current = 0.18)} // slow drift
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-base-100 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-base-100 to-transparent z-10" />

      {/* track */}
      <div
        ref={containerRef}
        className="flex w-max gap-10 whitespace-nowrap will-change-transform"
      >
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="text-secondary/60 animate-pulse">●</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}