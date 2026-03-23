import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";

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

const statConfigs = [
  { target: 500000, prefix: "+", suffix: "", fmtNum: true, delay: 0 },
  { target: 1500000, prefix: "+", suffix: "", suffixSmall: "min", fmtNum: true, delay: 100 },
  { target: 4, prefix: "<", suffix: "", suffixSmall: "min", fmtNum: false, delay: 200 },
  { target: 50000, prefix: "+", suffix: "", fmtNum: true, delay: 300 },
  { target: 8, prefix: "", suffix: "", suffixSmall: "ciudades", fmtNum: false, delay: 400 },
];

export function CoverStats() {
  const { tObject } = useTranslation();
  const labels = tObject<{ label: string }[]>('cover.stats');
  const counters = statConfigs.map(s => useCounter(s.target));

  return (
    <section className="relative bg-foreground text-background py-14 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }} />
      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop: 5 columns with vertical dividers */}
        <div className="hidden md:flex items-center justify-center divide-x divide-background/20">
          {statConfigs.map((stat, i) => (
            <div
              key={i}
              ref={counters[i].ref}
              className="flex-1 text-center px-4 animate-fade-in"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold">
                {stat.prefix}
                {stat.fmtNum ? fmt(counters[i].count) : counters[i].count}
                {stat.suffixSmall && (
                  <span className="text-lg lg:text-xl font-semibold ml-1 opacity-70">{stat.suffixSmall}</span>
                )}
              </div>
              <div className="text-xs lg:text-sm text-background/60 mt-1 leading-tight">{labels?.[i]?.label}</div>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid + centered 5th */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-6 text-center">
            {statConfigs.slice(0, 4).map((stat, i) => (
              <div
                key={i}
                ref={counters[i].ref}
                className="animate-fade-in"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className="text-2xl sm:text-3xl font-bold">
                  {stat.prefix}
                  {stat.fmtNum ? fmt(counters[i].count) : counters[i].count}
                  {stat.suffixSmall && (
                    <span className="text-sm sm:text-base font-semibold ml-1 opacity-70">{stat.suffixSmall}</span>
                  )}
                </div>
                <div className="text-[10px] sm:text-xs text-background/60 mt-1 leading-tight">{labels?.[i]?.label}</div>
              </div>
            ))}
          </div>
          <div
            ref={counters[4].ref}
            className="text-center mt-6 animate-fade-in"
            style={{ animationDelay: `${statConfigs[4].delay}ms` }}
          >
            <div className="text-2xl sm:text-3xl font-bold">
              {statConfigs[4].prefix}
              {statConfigs[4].fmtNum ? fmt(counters[4].count) : counters[4].count}
              {statConfigs[4].suffixSmall && (
                <span className="text-sm sm:text-base font-semibold ml-1 opacity-70">{statConfigs[4].suffixSmall}</span>
              )}
            </div>
            <div className="text-[10px] sm:text-xs text-background/60 mt-1 leading-tight">{labels?.[4]?.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
