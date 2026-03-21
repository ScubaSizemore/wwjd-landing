/**
 * Motion System Configuration
 * Single source of truth for all animation timing, springs, and easing curves.
 * Enforces compositor-only properties (transform + opacity) for 60fps performance.
 */

export const TIMING = {
  /** Entrance animations — max 300ms, ease-out */
  entrance: 300,
  /** Exit animations — max 200ms, ease-in */
  exit: 200,
  /** Interaction feedback — max 200ms (under 200ms cap) */
  interaction: 150,
} as const;

export const EASING = {
  /** Ease-out for entrances — fast start, gentle stop */
  easeOut: [0.22, 1, 0.36, 1] as [number, number, number, number],
  /** Ease-in for exits — gentle start, fast finish */
  easeIn: [0.4, 0, 1, 1] as [number, number, number, number],
  /** Ease-in-out for continuous motion */
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
} as const;

export const SPRINGS = {
  /** Gentle — smooth UI transitions (cards, panels) */
  gentle: { stiffness: 300, damping: 30 },
  /** Snappy — quick responsive feedback (buttons, toggles) */
  snappy: { stiffness: 400, damping: 25 },
  /** Bouncy — celebratory moments (confetti, streaks, achievements) */
  bouncy: { stiffness: 400, damping: 15 },
} as const;

/**
 * Duration in seconds for Framer Motion
 * (Framer Motion uses seconds, not milliseconds)
 */
export const DURATION = {
  entrance: TIMING.entrance / 1000,
  exit: TIMING.exit / 1000,
  interaction: TIMING.interaction / 1000,
} as const;
