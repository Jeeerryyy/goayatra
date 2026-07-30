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
            <p className="overline">Why Choose Us</p>
          </div>
          <div className="md:col-span-8">
            <Reveal as="h2" className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink">
              A rental company, <em className="not-italic text-maroon italic font-normal">rewritten</em> as a family business.
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manifesto.map((m, i) => (
            <Reveal
              key={m.n}
              delay={i * 0.06}
              className="rounded-3xl bg-bg-alt/80 p-8 md:p-10 border border-hairline/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {m.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
