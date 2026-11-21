"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps, ElementType } from "react";

type AnimatedSectionProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  whileHover?: { y?: number; scale?: number };
} & Omit<ComponentProps<T>, "as" | "children" | "className">;

export default function AnimatedSection<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  whileHover,
  ...props
}: AnimatedSectionProps<T>) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion.create(as ?? "div");

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : whileHover}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}
