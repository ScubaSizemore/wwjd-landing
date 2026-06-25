import { motion } from "motion/react";

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067L2.463 23.988c.32.054.646.005.94-.175l13.298-7.53-3.157-3.227z" />
  </svg>
);

export const AppStoreSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 md:p-12 text-center shadow-luxury"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now Available
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            The WWJD.com Super App
            <br />
            <span className="text-gradient-luxury italic">is on the App Store</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Download the app and carry your faith with you everywhere — devotionals, Bible reading, community, and more, right in your pocket.
          </motion.p>

          {/* Store Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {/* Apple App Store */}
            <a
              href="https://apps.apple.com/us/app/wwjd-com-super-app/id6764636824"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-2xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-float min-w-[200px]"
            >
              <AppleLogo />
              <div className="text-left">
                <div className="text-xs opacity-60 leading-none mb-0.5">Download on the</div>
                <div className="text-base font-bold leading-tight">App Store</div>
              </div>
            </a>

            {/* Google Play — Coming Soon */}
            <div className="relative group flex items-center gap-3 bg-muted/40 text-muted-foreground px-7 py-4 rounded-2xl min-w-[200px] cursor-default border border-border/40">
              <GooglePlayLogo />
              <div className="text-left">
                <div className="text-xs opacity-60 leading-none mb-0.5">Coming Soon to</div>
                <div className="text-base font-bold leading-tight">Google Play</div>
              </div>
              <span className="absolute -top-2.5 -right-2.5 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">
                Soon
              </span>
            </div>
          </motion.div>

          {/* Sub-note */}
          <motion.p
            className="mt-8 text-xs text-muted-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Also available on the web at{" "}
            <a
              href="https://app.wwjd.com"
              className="underline underline-offset-2 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              app.wwjd.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
