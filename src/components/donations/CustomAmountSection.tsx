import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { createLandingDonation } from "@/lib/donations";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

const QUICK_AMOUNTS = [250, 500, 1_000, 5_000, 10_000, 25_000];

export const CustomAmountSection = () => {
  const [frequency, setFrequency] = useState<"monthly" | "one_time">("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customValue, setCustomValue] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const effectiveAmount = selectedAmount ?? (customValue ? Number(customValue) : 0);
  const minAmount = frequency === "monthly" ? 50 : 500;
  const isValid = effectiveAmount >= minAmount && email.includes("@") && email.includes(".");

  const handleQuickSelect = (amt: number) => {
    setSelectedAmount(amt);
    setCustomValue("");
  };

  const handleCustomChange = (val: string) => {
    const cleaned = val.replace(/[^0-9]/g, "");
    setCustomValue(cleaned);
    setSelectedAmount(null);
  };

  const handleDonate = async () => {
    if (!isValid) return;
    setLoading(true);
    const result = await createLandingDonation({
      email,
      amount: effectiveAmount * 100, // convert to cents
      frequency,
      tierName: `Custom ${frequency === "monthly" ? "Monthly" : "One-Time"} Gift`,
    });

    if ("url" in result) {
      window.location.href = result.url;
    } else {
      toast.error(result.error || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section id="custom-amount-section" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground tracking-tight mb-4">
            Give a Custom{" "}
            <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Amount</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Every gift fuels the mission. Choose an amount that moves your heart.
          </p>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
          }}
        >
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-card border border-border space-y-8">
            {/* Frequency Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex rounded-full bg-muted p-1">
                <button
                  onClick={() => setFrequency("monthly")}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    frequency === "monthly"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setFrequency("one_time")}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    frequency === "one_time"
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  One-Time
                </button>
              </div>
            </div>

            {/* Quick Select Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleQuickSelect(amt)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200",
                    selectedAmount === amt
                      ? "bg-luxury-gold/15 border-luxury-gold/40 text-luxury-gold"
                      : "bg-card border-border text-muted-foreground hover:border-luxury-gold/30 hover:text-foreground"
                  )}
                >
                  ${amt.toLocaleString()}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="relative max-w-xs mx-auto">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                $
              </span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Other amount"
                value={customValue}
                onChange={(e) => handleCustomChange(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-xl bg-background border border-border text-foreground text-center text-lg font-medium placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all"
              />
            </div>

            {/* Email */}
            <div className="max-w-sm mx-auto">
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-center placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all"
              />
              <p className="text-xs text-muted-foreground text-center mt-2">
                Required for your tax-deductible receipt
              </p>
            </div>

            {/* Min amount hint */}
            {effectiveAmount > 0 && effectiveAmount < minAmount && (
              <p className="text-xs text-center text-warning">
                Minimum {frequency === "monthly" ? "$50/mo" : "$500 one-time"}
              </p>
            )}

            {/* Donate Button */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                disabled={!isValid || loading}
                onClick={handleDonate}
                className="px-10 py-6 text-lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Creating checkout...
                  </>
                ) : (
                  `Donate ${effectiveAmount ? "$" + effectiveAmount.toLocaleString() : ""}${frequency === "monthly" ? "/mo" : ""}`
                )}
              </Button>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
