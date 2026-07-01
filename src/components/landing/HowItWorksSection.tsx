import { User, Home, Users, Sparkles } from "lucide-react";
import { InView } from "@/components/ui/in-view";

const APPLE_APP_STORE_URL = "https://apps.apple.com/us/app/wwjd-com-super-app/id6764636824";

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

export const HowItWorksSection = () => {
  const steps = [
    { icon: User, number: "1", title: "Create Your Profile", description: "Tell us your age and where you are in your faith journey for personalized content" },
    { icon: Home, number: "2", title: "Invite Your Family", description: "Add kids, spouse, and set up child-safe mode with individual profiles for everyone" },
    { icon: Users, number: "3", title: "Join or Create Community", description: "Connect with your church, start a small group, or create an accountability circle" },
    { icon: Sparkles, number: "4", title: "Grow Together Daily", description: "Get content, discussions, and guidance tailored to each person's needs" }
  ];

  return (
    <section id="how-it-works-section" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">How It Works</h2>
            <p className="text-xl text-muted-foreground">You're just 4 steps away.</p>
          </div>
        </InView>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <InView
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.12 } },
                }}
              >
                <div className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent to-primary/30" />
                  )}
                  <div className="relative z-10">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl">
                      <Icon className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                    </div>
                    <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-bold mb-4">
                      Step {step.number}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </InView>
            );
          })}
        </div>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
        >
          <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">Ready to Begin?</h3>
            <p className="text-muted-foreground mb-6">
              Download the WWJD.com SuperApp and start your faith journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={APPLE_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-foreground text-background px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-float"
              >
                <AppleLogo />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-60">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>
              <div className="flex items-center justify-center gap-2.5 bg-muted/30 text-muted-foreground/50 px-6 py-3 rounded-xl border border-border/30 cursor-default">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067L2.463 23.988c.32.054.646.005.94-.175l13.298-7.53-3.157-3.227z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-60">Coming Soon</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
