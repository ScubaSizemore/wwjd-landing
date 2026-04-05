import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Rocket } from "lucide-react";
import wwjdLogo from "@/assets/wwjd-icon-blue.png";
import { motion, useScroll, useTransform } from "motion/react";
import { TextShimmer } from "@/components/ui/text-shimmer";

const VIDEO_ID = "iJkWqpEkXqQ";
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const scrollToSignup = () => {
    document.getElementById("signup-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative min-h-dvh flex items-center justify-center px-4 pt-20 pb-12 overflow-hidden"
    >
      {/* Parallax Mesh Gradient Background */}
      <motion.div className="absolute inset-0 -z-10 bg-mesh" style={{ scale: bgScale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={wwjdLogo}
            alt="WWJD - What Would Jesus Do"
            className="w-24 h-24 md:w-28 md:h-28 rounded-3xl shadow-luxury animate-float"
          />
        </motion.div>

        {/* Video Embed */}
        <motion.div
          className="max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-luxury border border-white/10">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${VIDEO_ID}`}
                title="WWJD.com Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                onClick={() => setIsPlaying(true)}
                className="group relative w-full h-full cursor-pointer bg-black"
                aria-label="Play video"
              >
                <img
                  src={THUMBNAIL_URL}
                  alt="WWJD.com video preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-luxury transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-zinc-900 ml-1" fill="currentColor" />
                  </div>
                </div>
              </button>
            )}
          </div>
        </motion.div>

        {/* Launch tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <TextShimmer className="text-lg md:text-xl font-medium tracking-wide uppercase" duration={3}>
            We Are Live
          </TextShimmer>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Ask the Question.
          <br />
          <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">
            Live the Answer.
          </span>
          <sup className="text-base sm:text-lg md:text-2xl font-normal text-muted-foreground align-super ml-1">™</sup>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light px-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          WWJD.com is a new Christ-centered platform designed to help you grow daily through biblical guidance, discipleship tools, and faith-building content for the whole family.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.location.href = 'https://app.wwjd.com'}
            className="w-full sm:w-auto px-10 sm:px-12 py-7 sm:py-8 text-lg sm:text-xl"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Launch the App
          </Button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="pt-8 flex items-center justify-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gradient-luxury border-3 border-background shadow-float"
              />
            ))}
          </div>
          <span className="font-medium">Join thousands growing in faith</span>
        </motion.div>
      </div>
    </section>
  );
};
