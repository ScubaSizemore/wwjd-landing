import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const EASTER_2026 = new Date("2026-04-05T05:00:00Z");

function calculateTimeLeft() {
  const diff = EASTER_2026.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-luxury flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tabular-nums"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
        <CountdownBlock value={timeLeft.days} label="Days" />
        <span className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground mt-[-1.25rem] sm:mt-[-1.5rem]">:</span>
        <CountdownBlock value={timeLeft.hours} label="Hours" />
        <span className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground mt-[-1.25rem] sm:mt-[-1.5rem]">:</span>
        <CountdownBlock value={timeLeft.minutes} label="Min" />
        <span className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground mt-[-1.25rem] sm:mt-[-1.5rem]">:</span>
        <CountdownBlock value={timeLeft.seconds} label="Sec" />
      </div>
      <p className="text-sm text-muted-foreground">
        Launching <span className="text-luxury-gold font-semibold">Easter 2026</span>
      </p>
    </div>
  );
};
