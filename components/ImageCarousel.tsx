"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export interface CarouselCard {
  title: string;
  caption: string;
  /* Tailwind bg-* class for the placeholder (e.g. "bg-card-background") */
  fallbackClass: string;
  imageUrl?: string;
}

interface ImageCarouselProps {
  cards: CarouselCard[];
  /**
   * When true the carousel advances automatically every `intervalMs` ms
   * Defaults to false (manual navigation only)
   */
  autoPlay?: boolean;
  /** Interval in ms between automatic slides. Only used when autoPlay is true */
  intervalMs?: number;
  /**
   * Number of cards visible at once in the track.
   * Defaults to 1.
   */
  visibleCount?: number;
}

/**
 * Motion variants for the carousel.
 * Defined as functions of the `custom` prop (direction) to ensure that exiting
 * cards use the current direction, preventing them from sliding out the wrong way
 * if direction changes mid-transition.
 *
 * Asymmetrical transition:
 * - Entering cards sweep in quickly and cover full distance
 * - Exiting cards fade and barely move (30% distance), creating a layered effect
 */
const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9,
    zIndex: 1,
  }) as const,
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Smooth, Apple-like ease-out
    } as const,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-30%" : "30%",
    opacity: 0,
    scale: 0.95,
    zIndex: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }) as const,
};

export default function ImageCarousel({
  cards,
  autoPlay = false,
  intervalMs = 4000,
  visibleCount = 1,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // +1 = moving right (next), -1 = moving left (prev)
  const [direction, setDirection] = useState<1 | -1>(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrentIndex((index + cards.length) % cards.length);
    },
    [cards.length]
  );

  const prev = useCallback(() => {
    goTo(currentIndex - 1, -1);
  }, [currentIndex, goTo]);

  const next = useCallback(() => {
    goTo(currentIndex + 1, 1);
  }, [currentIndex, goTo]);

  /* Auto-play */

  const startAutoPlay = useCallback(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, intervalMs);
  }, [autoPlay, cards.length, intervalMs]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const setCardSource = useCallback((card: CarouselCard, source: string) => {
    card.imageUrl = source;
  }, []);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay, stopAutoPlay]);

  if (cards.length === 0) return null;

  // Build the window of visible cards, wrapping around the end of the array.
  const visibleCards = Array.from({ length: visibleCount }, (_, offset) =>
    cards[(currentIndex + offset) % cards.length]
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Card track */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "14rem" }}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* Animated window - slides as a single unit */}
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex gap-2 w-full h-full absolute inset-0"
          >
            {visibleCards.map((card, offset) => (
              <div
                key={offset}
                className={`relative flex flex-col justify-end flex-1 rounded-xl border border-card-border overflow-hidden ${card.fallbackClass}`}
              >
                {/* Background image layer */}
                {/* Next.js has an Image component which is faster than img, but it is very annoying about requiring a url for src=*/}
                {card.imageUrl && (
                  <Image
                    src={card.imageUrl} // load bearing GPK logo
                    alt={card.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                {/* Text overlay */}
                <div
                  className="relative z-10 px-4 py-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,0,24,0.90) 60%, transparent)",
                  }}
                >
                  <p className="text-sm font-semibold text-text-primary leading-snug">
                    {card.title}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">{card.caption}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation bar: left arrow, dot indicators, right arrow */}
      <div className="flex items-center gap-3">
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous card"
          className="flex items-center justify-center w-8 h-8 rounded-full
                     bg-card-background border border-card-border
                     text-accent-light hover:bg-accent hover:text-page-background
                     transition-all duration-200 active:scale-90 cursor-pointer"
        >
          <ChevronLeft />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2" role="tablist" aria-label="Carousel navigation">
          {cards.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to card ${i + 1}`}
              onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
              className={[
                "rounded-full transition-all duration-300 cursor-pointer",
                i === currentIndex
                  ? "w-5 h-2 bg-accent-light"
                  : "w-2 h-2 bg-card-border hover:bg-accent",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next card"
          className="flex items-center justify-center w-8 h-8 rounded-full
                     bg-card-background border border-card-border
                     text-accent-light hover:bg-accent hover:text-page-background
                     transition-all duration-200 active:scale-90 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

/** Icon helpers (inline SVG, no icon-lib dependency) */

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" // essentially says: 'this is an svg, it should behave like one'
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
