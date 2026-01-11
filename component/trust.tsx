import Image from "next/image";

export function TrustBadges() {
  const partners = [
    { name: "com1", logo: "/partners/com1.svg" },
    { name: "com2", logo: "/partners/com2.svg" },
    { name: "com3", logo: "/partners/com3.svg" },
    { name: "com4", logo: "/partners/com4.svg" },
    { name: "com5", logo: "/partners/com5.svg" },
    { name: "com6", logo: "/partners/com6.svg" },
  ];

  return (
    <section className=" bg-background py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-sm text-black">
          Trusted by industrial and engineering businesses across the UAE
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
