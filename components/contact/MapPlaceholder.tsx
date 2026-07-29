import { MapPin } from "lucide-react";

export function MapPlaceholder() {
  return (
    <section aria-label="Roastery location map" className="bg-parchment pb-24 md:pb-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16">
        <div
          role="img"
          aria-label="Map showing Noir & Bean Roastery at 2847 SE Division Street, Portland, Oregon"
          className="relative w-full overflow-hidden rounded-md border border-linen bg-espresso"
          style={{ aspectRatio: "16 / 7" }}
        >
          {/* Faux street-grid backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #C9A96E 1px, transparent 1px), linear-gradient(to bottom, #C9A96E 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          {/* A couple of "avenue" lines for texture */}
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute left-0 right-0 top-[42%] h-[2px] bg-gold/15" />
            <div className="absolute top-0 bottom-0 left-[38%] w-[2px] bg-gold/15" />
          </div>

          {/* Center pin + label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold shadow-lg">
              <MapPin size={22} strokeWidth={2} className="text-noir" />
            </div>
            <p className="font-display font-light text-cream text-xl">
              Noir &amp; Bean Roastery
            </p>
            <p className="font-sans text-xs text-cream/50">
              2847 SE Division Street, Portland, OR 97202
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2847+SE+Division+Street+Portland+OR+97202"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 font-sans text-[10px] uppercase tracking-widest text-gold underline-offset-4 hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
