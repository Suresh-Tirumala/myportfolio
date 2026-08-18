"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface StackItem {
  num: string;
  title: string;
  lede: string;
  body: string;
  image?: string;
}

const CARD_TONES = [
  "bg-ink-2 border-ice-500/20",
  "bg-ink-1 border-ice-400/20",
  "bg-ink-3 border-ice-300/20",
  "bg-ink-2 border-ice-600/20",
  "bg-ink-1 border-ice-500/20",
];

const PEEK = 42;
const SCALE_STEP = 0.045;

function stackPose(index: number) {
  return {
    y: index * PEEK,
    scale: 1 - index * SCALE_STEP,
  };
}

export default function StackCards({
  items,
  heading,
}: {
  items: StackItem[];
  heading?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const deck = deckRef.current;
    const headingEl = headingRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!container || !deck || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const deckH = deck.offsetHeight;
      const headingH = headingEl ? headingEl.offsetHeight : 0;
      const available = window.innerHeight - headingH;
      const centerY = (available - deckH) / 2;

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: cards.length - i,
          y: centerY + i * PEEK,
          scale: stackPose(i).scale * 0.9,
          rotate: 0,
          transformOrigin: "50% 0%",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${cards.length * window.innerHeight}`,
          pin: deck,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          { ...stackPose(i), ease: "power3.out", duration: 1.35 },
          i * 0.06
        );
      });

      tl.to({}, { duration: 0.35 });

      const flyAt = tl.duration();
      const flying = cards.slice(0, -1);

      flying.forEach((card, i) => {
        const time = flyAt + i;
        const behind = cards.slice(i + 1);

        tl.to(
          card,
          {
            y: () => -window.innerHeight * 1.15,
            rotate: -25,
            scale: 0.94,
            ease: "none",
            duration: 1,
          },
          time
        );

        tl.to(
          behind,
          {
            y: (index: number) => stackPose(index).y,
            scale: (index: number) => stackPose(index).scale,
            ease: "none",
            duration: 1,
          },
          time
        );
      });

      tl.to({}, { duration: 0.4 });
    }, container);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative">
      {heading && (
        <div ref={headingRef} className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
          {heading}
        </div>
      )}
      <div
        ref={deckRef}
        className="relative w-full"
        style={{ height: "min(62vh, 540px)" }}
      >
        {items.map((item, i) => (
          <div
            key={item.num}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`absolute inset-0 grid grid-cols-[1.15fr_0.85fr] gap-[clamp(1rem,3vw,2.5rem)] p-[clamp(1.25rem,3vw,2.25rem)] rounded-sm border ${CARD_TONES[i % CARD_TONES.length]}`}
            style={{
              willChange: "transform",
              transformOrigin: "50% 0%",
            }}
          >
            <div className="flex flex-col min-w-0">
              <div className="flex justify-between items-start gap-4 mb-2.5">
                <h3 className="font-[family-name:var(--font-editorial)] text-[clamp(2rem,4.5vw,3.4rem)] leading-none tracking-[-0.02em] text-ice-50">
                  {item.title}
                </h3>
                <span className="font-[family-name:var(--font-editorial)] text-[clamp(1.5rem,3vw,2.25rem)] opacity-35 leading-none shrink-0 text-ice-300">
                  {item.num}
                </span>
              </div>
              <p className="text-[clamp(0.85rem,1.4vw,1rem)] leading-[1.45] max-w-[28ch] opacity-75 mb-auto text-ice-200">
                {item.lede}
              </p>
              <p className="text-[clamp(0.8rem,1.2vw,0.92rem)] leading-[1.55] max-w-[36ch] opacity-85 mt-6 mb-5 text-ice-300">
                {item.body}
              </p>
            </div>
            <div className="relative min-h-0 flex justify-end items-stretch">
              <div className="w-[min(100%,300px)] h-full overflow-hidden rounded-sm shadow-[0_10px_28px_rgba(0,0,0,0.14)]">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-2"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
