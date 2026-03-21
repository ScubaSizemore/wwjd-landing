import { User, Home, Users, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";

export const HowItWorksSection = () => {
  const steps = [
    { icon: User, number: "1", title: "Create Your Profile", description: "Tell us your age and where you are in your faith journey for personalized content" },
    { icon: Home, number: "2", title: "Invite Your Family", description: "Add kids, spouse, and set up child-safe mode with individual profiles for everyone" },
    { icon: Users, number: "3", title: "Join or Create Community", description: "Connect with your church, start a small group, or create an accountability circle" },
    { icon: Sparkles, number: "4", title: "Grow Together Daily", description: "Get content, discussions, and guidance tailored to each person's needs" }
  ];

  const scrollToSignup = () => {
    document.getElementById("signup-section")?.scrollIntoView({ behavior: "smooth" });
  };

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
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Ready to Begin?</h3>
            <p className="text-muted-foreground mb-6">
              Join the founding 1,000 members and be the first to experience WWJD.com this Easter.
            </p>
            <Button
              variant="primary"
              className="bg-gradient-to-r from-accent to-primary text-white"
              onClick={scrollToSignup}
            >
              Join the Waitlist
            </Button>
          </div>
        </InView>
      </div>
    </section>
  );
};
