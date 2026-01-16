"use client";
import { useEffect, useState, useRef } from "react";

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}</span>;
}

export function StatsSection() {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 95, suffix: "%", label: "On-Time Project Delivery" },
    { value: 10, suffix: "+", label: "Years of Industry Experience" },
  ];

  return (
    <section className="border-t border-border bg-background py-16 mx-2 md:mx-6 lg:mx-12  ">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-5xl text-black md:text-6xl">
                  <CountUp end={stat.value} />
                </span>
                <span className="text-4xl font-bold text-[#3EB6CC] md:text-4xl lg:text-5xl">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
