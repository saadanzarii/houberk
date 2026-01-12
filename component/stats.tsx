export function StatsSection() {
  const stats = [
    { value: "500", suffix: "+", label: "Projects Delivered" },
    { value: "95", suffix: "%", label: "On-Time Project Delivery" },
    { value: "10", suffix: "+", label: "Years of Industry Experience" },
  ];

  return (
    <section className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl  text-black md:text-6xl">
                  {stat.value}
                </span>
                <span className="text-center text-4xl font-bold  text-[#3EB6CC] md:text-4xl lg:text-5xl">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
