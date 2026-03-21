import { Sparkles } from "lucide-react";
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
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm font-semibold text-luxury-gold">
                  Limited to 1,000 Founding Members
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {isPrimary
                  ? "Be Among the First 1,000"
                  : "Don't Miss Your Spot"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                {isPrimary
                  ? "Join the exclusive waitlist and be the first to experience WWJD.com when we launch Easter 2026."
                  : "Reserve your spot now and get early access to the WWJD.com SuperApp this Easter."}
              </p>

              {/* GHL Form Placeholder */}
              <div
                id={isPrimary ? "ghl-form" : "ghl-form-bottom"}
                className="min-h-[200px] flex items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] p-6"
              >
                <p className="text-sm text-muted-foreground italic">
                  GoHighLevel form will be embedded here
                </p>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
