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
        <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-bg-alt shadow-sm transition-all duration-300 group-hover:shadow-md">
          <img
            src={vehicle.images.hero}
            alt={vehicle.name}
            className="absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:brightness-95"
            loading="lazy"
          />
        </div>

        {/* Meta */}
        <div className="pt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-maroon transition-colors">
              {vehicle.name}
            </h3>
            <p className="mt-1 text-sm text-ink-muted max-w-xs">
              {vehicle.tagline}
            </p>
          </div>
          <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-maroon/5 text-maroon transition-all duration-300 group-hover:bg-maroon group-hover:text-white">
            <ArrowUpRight
              size={18}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
