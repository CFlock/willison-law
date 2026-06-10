import { useEffect, useRef } from "react";

export default function ReviewTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  const position = useRef(0);

  // 💎 slower base motion (luxury drift)
  const speed = useRef(0.36);
  const targetSpeed = useRef(0.36);

  const items = [
    "Stephanie was a pleasure to work with every time I left her office I felt better she’s very professional, knowledgeable, and prompt I’d recommend her without hesitation.",
    "Stephanie Willison is the best attorney in Prescott! We had a tough hurdle to overcome in our case but that didn’t deter her.",
    "Stephanie is extremely empathetic and sympathetic to the needs of her clients and wants only the best for them.",
    "Fair, professional and effective. She helped us get half time with the child. The previous order by the same Judge was every other weekend",
    "Wonderful place. The office is warm and inviting, and Stephanie is very kind, working well with all age groups in every imaginable situation.",
    "Stephanie is fantastic, she is outright honest and truly puts full effort into the case, if I need a family law attorney again I will definitely without hesitation call her again",
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
      onMouseLeave={() => (targetSpeed.current = 0.36)} // slow drift
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-base-100 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-base-100 to-transparent z-10" />

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