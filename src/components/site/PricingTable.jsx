import Reveal from "./Reveal";
import { WhatsAppButton } from "./CTAButtons";

export default function PricingTable({
  name,
  tagline,
  rows,
  columns = ["Package", "Price", "Extra km", "Extra hour"],
  keys = ["pkg", "price", "extraKm", "extraHr"],
  waMessage,
  index,
  testId,
}) {
  return (
    <section
      data-testid={testId || `pricing-${name?.toLowerCase().replace(/\s+/g, "-")}`}
      className="pt-6 md:pt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8">
        <div className="md:col-span-12">
          <h3 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
            {name}
          </h3>
          {tagline && (
            <p className="mt-2 text-sm text-ink-muted max-w-lg">{tagline}</p>
          )}
        </div>
      </div>

      <Reveal className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
        <div className="rounded-3xl bg-bg-alt/70 p-6 md:p-8 border border-hairline/80 shadow-sm overflow-hidden">
          <table className="goa-table min-w-[640px]">
            <thead>
              <tr>
                {columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  {keys.map((k, j) => (
                    <td key={k} className={j === 1 ? "price" : ""}>
                      {r[k]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
