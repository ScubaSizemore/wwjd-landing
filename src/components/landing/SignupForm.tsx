import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";

interface SignupFormProps {
  variant?: "primary" | "secondary";
}

export const SignupForm = ({ variant = "primary" }: SignupFormProps) => {
  const isPrimary = variant === "primary";

  return (
    <section
      id={isPrimary ? "signup-section" : "signup-section-bottom"}
      className="py-16 sm:py-20 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 shadow-luxury overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-section-compass/10 rounded-full blur-3xl" />

            <div className="relative space-y-6 text-center">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {isPrimary
                  ? "The App Is Live"
                  : "Start Growing Today"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                WWJD.com is live. Tap below to create your free account and start your faith journey today.
              </p>

              {/* Launch CTA */}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = 'https://app.wwjd.com'}
                  className="px-12 py-7 text-lg"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
