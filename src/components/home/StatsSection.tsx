const stats = [
  { value: "5,000+", label: "Properties Protected" },
  { value: "150K+", label: "Alerts Handled" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support Available" },
];

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base opacity-70 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
