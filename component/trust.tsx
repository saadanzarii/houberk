import Image from "next/image";

export function TrustBadges() {
  const partners = [
    { name: "com1", logo: "/partners/com1.svg", width: 150, height: 60 },
    { name: "com2", logo: "/partners/com2.svg", width: 150, height: 50 },
    { name: "com4", logo: "/partners/com4.svg", width: 170, height: 60 },
    { name: "com6", logo: "/partners/com6.svg", width: 130, height: 55 },
    { name: "com5", logo: "/partners/com5.svg", width: 140, height: 40 },
    { name: "com3", logo: "/partners/com3.svg", width: 90, height: 40 },
  ];

  return (
    <section className="bg-background pt-8 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-sm text-black lg:text-lg">
          Trusted by industrial and engineering businesses across the UAE
        </p>

        {/* 🔁 Mobile infinite slider */}
        <div className="relative md:hidden">
          <div className="flex w-max animate-marquee gap-15">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🖥 Desktop static */}
        <div className="hidden flex-wrap items-center justify-center gap-8 md:flex lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
