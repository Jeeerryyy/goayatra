import Reveal from "./Reveal";
import { manifesto } from "@/data/pricing";

export default function ManifestoChapters() {
  return (
    <section
      data-testid="manifesto"
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="overline text-[#8B597B]">Why Choose Us</p>
          </div>
          <div className="md:col-span-8">
            <Reveal as="h2" className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#493129]">
              A rental company, <em className="not-italic text-[#8B597B] font-medium">built with trust &amp; local warmth</em>.
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manifesto.map((m, i) => (
            <Reveal
              key={m.n}
              delay={i * 0.06}
              className="rounded-3xl bg-[#FFF3EB] p-8 md:p-10 border border-[#F0DED2] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-2xl md:text-3xl text-[#493129] font-bold">
                  {m.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#6D4F47]">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
