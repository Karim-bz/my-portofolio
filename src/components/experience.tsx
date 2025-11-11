"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ExperienceCard } from "./ui/experience-card";
import { motion } from "framer-motion";

type Card = {
  period: string;
  title: string;
  role: string;
  description: string;
};

export const Experience = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards: Card[] = useMemo(
    () => [
      {
        period: "02/2025 – Present",
        title: "Creative DMS.",
        role: "Software Engineer | Front-End Developer | React native Developer",
        description:
          "Creating efficient, high-performing mobile apps using React Native. Focused on code quality, performance, and delivering smooth, consistent experiences across platforms.",
      },
      {
        period: "04/2024 – 12/2024",
        title: "Netcapital B.V.",
        role: "Software Engineer",
        description:
          "Collaborated with a development team to build and enhance a custom CMS. Contributed to both frontend and backend features, improving usability and overall system performance.",
      },
      {
        period: "10/2023 – 01/2025",
        title: "SYNC.",
        role: "Software Engineer",
        description:
          "Built and maintained full-stack web and mobile applications using technologies such as Flutter, React, Node.js, and Javascript. Implemented RESTful APIs, optimized performance, and ensured cross-platform consistency and scalability.",
      },
    ],
    []
  );

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);

    const io = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;

        entries.forEach((entry) => {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        });

        if (best!.target) {
          const idx = Number((best!.target as HTMLElement).dataset.index);
          if (idx !== activeIndex) {
            setActiveIndex(idx);
          }
        }
      },
      { root, threshold: thresholds }
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [activeIndex]);

  return (
    <div className="flex flex-col min-h-screen w-full items-stretch justify-center gap-2 md:gap-10 xl:gap-20 font-primary [@media(max-width:400px)]:portrait:pl-10 [@media(max-width:400px)]:portrait:pr-5">
      <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-header text-center">
        Experience
      </div>
      <div
        className="flex w-full items-start justify-center gap-5 xl:gap-15 landscape:flex-row portrait:flex-col"
        id="experience"
      >
        <div
          className={`
        flex flex-col w-full
        [@media(min-width:400px)]:portrait:pl-10
        pr-2
      `}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              data-card
              data-index={i}
              id={`experience-card-${i}`}
              onClick={() => setActiveIndex(i)}
              className={`
            flex
            transition-opacity duration-300
            will-change-[opacity,transform]
            ${
              i === 0
                ? "pt-[0vh]"
                : i === cards.length - 1
                ? "pb-[1.5vh]"
                : "py-5 lg:py-8 xl:py-10"
            }
            items-center w-full
          `}
            >
              <ExperienceCard
                period={c.period}
                title={c.title}
                role={c.role}
                description={c.description}
                isActive={activeIndex === i}
                className={
                  i === 0 ? "pt-5" : i === cards.length - 1 ? "pb-5" : ""
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
