import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CarouselImage = {
  src: string;
  alt: string;
};

interface ServiceCarouselProps {
  images: CarouselImage[];
  ariaLabel?: string;
  className?: string;
}

export const ServiceCarousel = ({
  images,
  ariaLabel = "Galería de proyectos",
  className,
}: ServiceCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches);
    };

    handleMotionChange(mediaQuery);

    const listener = (event: MediaQueryListEvent) => handleMotionChange(event);

    if ("addEventListener" in mediaQuery) {
      mediaQuery.addEventListener("change", listener);
    } else {
      mediaQuery.addListener(listener);
    }

    return () => {
      if ("removeEventListener" in mediaQuery) {
        mediaQuery.removeEventListener("change", listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, []);

  useEffect(() => {
    if (!images.length) {
      setCurrent(0);
      return;
    }

    setCurrent((prev) => {
      if (prev >= images.length) {
        return images.length - 1;
      }
      return prev;
    });
  }, [images]);

  const goTo = (index: number) => {
    if (!images.length) return;
    const total = images.length;
    const normalized = ((index % total) + total) % total;
    setCurrent(normalized);
  };

  const handleNext = () => goTo(current + 1);
  const handlePrevious = () => goTo(current - 1);

  return (
    <section
      className={cn(
        "py-12 sm:py-16 px-4 sm:px-6 bg-slate-900/5",
        className,
      )}
      aria-label={ariaLabel}
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
        >
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
            <ul
              ref={trackRef}
              className="m-0 flex list-none p-0"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: prefersReducedMotion ? "none" : "transform 320ms ease",
                willChange: prefersReducedMotion ? undefined : "transform",
              }}
            >
              {images.map((image, index) => (
                <li key={image.src} className="min-w-full">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                    aria-label={`Avanzar a la siguiente imagen: ${image.alt}`}
                    tabIndex={index === current ? 0 : -1}
                  >
                    <div
                      className="w-full overflow-hidden rounded-3xl"
                      aria-hidden={index !== current}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] md:aspect-[16/9] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.01]"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="pointer-events-auto absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/70 text-white transition-all duration-200 hover:bg-slate-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Imagen anterior"
                >
                  <span aria-hidden="true" className="text-2xl leading-none">
                    ‹
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="pointer-events-auto absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/70 text-white transition-all duration-200 hover:bg-slate-900 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Imagen siguiente"
                >
                  <span aria-hidden="true" className="text-2xl leading-none">
                    ›
                  </span>
                </button>
              </>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={cn(
                  "h-3 w-3 rounded-full transition-all duration-200",
                  index === current
                    ? "bg-primary shadow-sm"
                    : "bg-slate-300/70 hover:bg-slate-400"
                )}
                aria-label={`Ir a la imagen ${index + 1} de ${images.length}`}
                aria-current={index === current ? "true" : undefined}
              />
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {`Mostrando imagen ${current + 1} de ${images.length}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
