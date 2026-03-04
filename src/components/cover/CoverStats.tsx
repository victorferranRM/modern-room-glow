import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { count, ref };
}

function fmt(n: number) { return n.toLocaleString("es-ES"); }

const stats = [
  { target: 268414, suffix: "", label: "Gestiones en 2024", delay: 0 },
  { target: 97, suffix: "%", label: "CSAT", delay: 100 },
  { target: 4, suffix: " min", prefix: "<", label: "AHT", delay: 200 },
  { target: 9580, suffix: "", label: "Intervenciones Field Service", delay: 300 },
  { target: 8, suffix: "", label: "Ciudades", delay: 400 },
];

export function CoverStats() {
  const counters = stats.map(s => useCounter(s.target));

  return (
    <section className="relative bg-foreground text-background py-14 overflow-hidden">
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={counters[i].ref}
              className="animate-fade-in"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold">
                {stat.prefix || ""}{stat.target === 268414 || stat.target === 9580 ? fmt(counters[i].count) : counters[i].count}{stat.suffix}
              </div>
              <div className="text-sm text-background/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
