import { Fragment } from "react";

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-background/40 py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((g) => (
          <Fragment key={g}>
            {items.map((item, i) => (
              <span key={`${g}-${i}`} className="mx-8 inline-flex items-center gap-8 font-display text-4xl font-medium tracking-tight md:text-6xl">
                {item}
                <span className="text-primary">✦</span>
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}