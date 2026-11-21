"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";

export default function ScrollMotion() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 origin-left bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-300"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
