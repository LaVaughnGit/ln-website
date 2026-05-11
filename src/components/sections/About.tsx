"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const photos = [
  "/images/army1.jpg",
  "/images/army2.jpg",
  "/images/skydiving1.jpg",
  "/images/snowboarding1.jpg",
  "/images/scubadiving1.jpg",
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-muted-foreground text-lg leading-relaxed flex-1"
          >
            <p>
              I&apos;m a <b>software engineer</b>, and <b>visionary leader</b> with <b>6 years</b> of military experience who is
              passionate about building projects from scratch and scaling each one significantly.
            </p>
            <p>
              When I&apos;m not coding, you can find me mastering the different elements of the world from <b>skydiving</b>,
              to <b>snowboarding</b> and <b>scubadiving</b>. I also spend my free time engineering gamecube controllers and
              creating LoFi-style music.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full md:w-[480px] h-64 md:h-80 rounded-xl overflow-hidden shrink-0 shadow-lg"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={photos[current]}
                  alt={`Army photo ${current + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
