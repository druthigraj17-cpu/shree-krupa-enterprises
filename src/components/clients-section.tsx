import { ScrollReveal } from "@/components/scroll-reveal";

const clients = [
  { name: "Client 1", src: "/images/client-01.webp" },
  { name: "Client 2", src: "/images/client-02.webp" },
  { name: "Client 3", src: "/images/client-03.webp" },
  { name: "Client 4", src: "/images/client-04.webp" },
  { name: "Client 5", src: "/images/client-05.webp" },
  { name: "Client 6", src: "/images/client-06.webp" },
  { name: "Client 7", src: "/images/client-07.webp" },
  { name: "Client 8", src: "/images/client-08.webp" },
  { name: "Client 9", src: "/images/client-09.webp" },
  { name: "Client 10", src: "/images/client-10.webp" },
  { name: "Client 11", src: "/images/client-11.webp" },
];

const row1 = [...clients, ...clients, ...clients];
const row2 = [...clients.slice(5), ...clients, ...clients.slice(0, 5), ...clients];

export function ClientsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-[#D71D24] uppercase tracking-wider">
              Our Clients
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Trusted By Industry Leaders
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-r from-red-50 to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-l from-red-50 to-transparent" />
        <div className="flex w-fit animate-[marquee_30s_linear_infinite]">
          {row1.map((client, i) => (
            <div
              key={`r1-${i}`}
              className="mx-3 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-xl border border-red-100 bg-white/80"
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-[45px] w-[45px] object-contain opacity-80 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative">
        <div className="absolute left-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-r from-orange-50 to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 sm:w-32 bg-gradient-to-l from-orange-50 to-transparent" />
        <div className="flex w-fit animate-[marquee-reverse_30s_linear_infinite]">
          {row2.map((client, i) => (
            <div
              key={`r2-${i}`}
              className="mx-3 flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-xl border border-orange-100 bg-white/80"
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-[45px] w-[45px] object-contain opacity-80 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
