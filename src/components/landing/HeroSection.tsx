import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Rocket } from "lucide-react";
import wwjdLogo from "@/assets/wwjd-icon-blue.png";
import { motion, useScroll, useTransform } from "motion/react";
import { TextShimmer } from "@/components/ui/text-shimmer";

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

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
          Download the WWJD.com SuperApp — your all-in-one companion for daily Scripture, discipleship, family faith, and community. Available now on iOS.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Primary: App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <a
              href="https://apps.apple.com/us/app/wwjd-com-super-app/id6764636824"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-2xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-luxury min-w-[190px]"
            >
              <AppleLogo />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-60 uppercase tracking-wide">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.wwjd.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-2xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-luxury min-w-[190px]"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067L2.463 23.988c.32.054.646.005.94-.175l13.298-7.53-3.157-3.227z" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-60 uppercase tracking-wide">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Secondary: Web App link */}
          <button
            onClick={() => window.location.href = 'https://app.wwjd.com'}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors pt-1"
          >
            <Rocket className="w-3.5 h-3.5" />
            Or launch the web app at app.wwjd.com
          </button>
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
