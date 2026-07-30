import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

/**
 * Editorial vehicle thumbnail card used in fleet grids.
 */
export default function VehicleCard({ vehicle, index = 0, testId }) {
  return (
    <Reveal delay={index * 0.04}>
      <Link
        to={`/vehicle/${vehicle.slug}`}
        data-testid={testId || `vehicle-card-${vehicle.slug}`}
        className="group block relative"
      >
        {/* Image */}
        <div className="relative aspect-[5/4] overflow-hidden bg-bg-alt">
          <img
            src={vehicle.images.hero}
            alt={vehicle.name}
            className="absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-95"
            loading="lazy"
          />
          <span className="pointer-events-none absolute inset-2 border border-bg/70" />
          <span className="pointer-events-none absolute inset-6 border-t border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Meta */}
        <div className="pt-5 flex items-start justify-between gap-4 border-t border-hairline mt-4">
          <div>
            <p className="overline pt-4">{vehicle.category}</p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink leading-tight">
              {vehicle.name}
            </h3>
            <p className="mt-2 text-sm text-ink-muted max-w-xs">
              {vehicle.tagline}
            </p>
          </div>
          <ArrowUpRight
            size={18}
            strokeWidth={1.6}
            className="mt-6 shrink-0 text-maroon transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </Link>
    </Reveal>
  );
}
