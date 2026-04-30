import Image from "next/image";
import Reveal from "./Reveal";

export default function Location() {
  const address = "Dermatix Clinic, 110 Ansley Grove Rd #10, Woodbridge, ON L4L 3R1";
  const mapsQuery = encodeURIComponent(address);
  const embed = `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`;

  return (
    <section id="location" className="relative py-28 lg:py-40 bg-bone overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-12 gap-8 lg:gap-16">
        {/* Left — copy + details */}
        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-ink/50 mb-3">§ 06 — Visit</p>
            <h2 className="display text-[10vw] lg:text-[6rem] leading-[0.95] tracking-tightest">
              Woodbridge.
              <br />
              <span className="display-italic text-stone">By appointment.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 text-[15px] leading-relaxed text-ink/75 max-w-md">
              The studio sits just off Highway 7, ten minutes from Vaughan Mills. Valet on
              Thursdays &amp; Saturdays. Green-room refreshments, quiet rooms, and
              discreet side entrance for every visit.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 text-[13px]">
              <div>
                <dt className="eyebrow text-ink/50 mb-2">Address</dt>
                <dd className="leading-relaxed">
                  110 Ansley Grove Rd #10
                  <br />
                  Woodbridge, ON L4L 3R1
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/50 mb-2">Hours</dt>
                <dd className="leading-relaxed">
                  Mon – Fri · 9a – 6p
                  <br />
                  Sat · 9a – 4p
                  <br />
                  Sun · closed
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/50 mb-2">Telephone</dt>
                <dd>
                  <a href="tel:19056058444" className="editorial-link">1·905·605·8444</a>
                </dd>
                <dd className="mt-2 text-ink/50 text-[12px]">Fax · 1·905·605·2520</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink/50 mb-2">Email</dt>
                <dd>
                  <a
                    href="mailto:clinic@dermatixclinic.com"
                    className="editorial-link"
                  >
                    clinic@dermatixclinic.com
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 flex items-center gap-5">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-bone pl-6 pr-5 py-3.5 text-[12px] tracking-wider2 uppercase hover:bg-moss transition-colors"
              >
                Book a consult
                <span className="arrow-slide">→</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="editorial-link text-[13px] text-ink/75"
              >
                Open in Maps
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — map + photo */}
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-ink/10">
              <iframe
                title="Dermatix Clinic map"
                src={embed}
                loading="lazy"
                className="absolute inset-0 w-full h-full grayscale contrast-110"
                style={{ filter: "grayscale(1) contrast(1.05) sepia(0.2)" }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-ink/10" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between eyebrow text-ink/60 bg-bone/80 backdrop-blur px-3 py-2">
                <span>Dermatix · Woodbridge studio</span>
                <span>43°46&apos;N · 79°36&apos;W</span>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              "/images/shutterstock_1991798186.jpg",
              "/images/shutterstock_2440430297.jpg",
              "/images/shutterstock_1160002396.jpg",
            ].map((src, i) => (
              <Reveal key={src} delay={i * 90}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 33vw, 230px"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
