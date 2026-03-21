/**
 * Reusable Framer Motion Variants
 * All animations use compositor-only properties (transform + opacity).
 */
import type { Variants } from 'motion/react';
import { DURATION, EASING, SPRINGS } from './motion';

/** Page route transitions — fade + subtle y-slide */
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.entrance, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: DURATION.exit, ease: EASING.easeIn },
  },
};

/** Card entrance — fade + y-slide from below */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.entrance, ease: EASING.easeOut },
  },
};

/** Scroll-triggered reveal — fade + larger y-slide */
export const scrollRevealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.entrance, ease: EASING.easeOut },
  },
};

/** Stagger container — parent for staggered children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/** Scale-in — for modals, dialogs, popovers */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { ...SPRINGS.snappy },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: DURATION.exit, ease: EASING.easeIn },
  },
};

/** Slide from right — for drawers, sidebars */
export const slideFromRight: Variants = {
  initial: { opacity: 0, x: '100%' },
  animate: {
    opacity: 1,
    x: 0,
    transition: { ...SPRINGS.gentle },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: DURATION.exit, ease: EASING.easeIn },
  },
};

/** Slide from left — for reverse navigation */
export const slideFromLeft: Variants = {
  initial: { opacity: 0, x: '-100%' },
  animate: {
    opacity: 1,
    x: 0,
    transition: { ...SPRINGS.gentle },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: { duration: DURATION.exit, ease: EASING.easeIn },
  },
};
