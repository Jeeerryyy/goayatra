import Reveal from "./Reveal";
import { manifesto } from "@/data/pricing";

export default function ManifestoChapters() {
  return (
    <section
      data-testid="manifesto"
      className="border-t border-hairline py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="overline">Manifesto · Four chapters</p>
          </div>
          <div className="md:col-span-8">
            <Reveal as="h2" className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink">
              A rental company, <em className="not-italic text-maroon italic font-normal">rewritten</em> as a family business.
            </Reveal>
          </div>
        </div>

        <div className="divide-y divide-hairline border-t border-hairline">
          {manifesto.map((m, i) => (
            <Reveal
              key={m.n}
              delay={i * 0.06}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14"
            >
              <div className="md:col-span-2">
                <span className="chapter-num">{m.n}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl text-ink">
                  {m.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-lg leading-relaxed text-ink">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
