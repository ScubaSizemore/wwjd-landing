import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DonationTierCardProps {
  name: string;
  amount: number;
  amountLabel: string;
  scripture: string;
  scriptureRef: string;
  description: string;
  icon: LucideIcon;
  ctaLabel: string;
  spotsTotal: number;
  spotsClaimed: number;
  featured?: boolean;
  onSelect: () => void;
}

export const DonationTierCard = ({
  name,
  amountLabel,
  scripture,
  scriptureRef,
  description,
  icon: Icon,
  ctaLabel,
  spotsTotal,
  spotsClaimed,
  featured = false,
  onSelect,
}: DonationTierCardProps) => {
  const spotsRemaining = spotsTotal - spotsClaimed;
  const claimedPercent = Math.round((spotsClaimed / spotsTotal) * 100);

  return (
    <div
      className={cn(
        "group relative h-full flex flex-col p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border transition-all duration-300",
        featured
          ? "border-luxury-gold/40 shadow-[0_0_30px_-5px_hsl(45_92%_62%/0.15)]"
          : "border-border hover:border-accent-primary/30"
      )}
    >
      {/* Shimmer overlay for featured */}
      {featured && (
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent animate-shimmer" />
        </div>
      )}

      {/* Scarcity Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20">
          {spotsRemaining} of {spotsTotal} remaining
        </span>
      </div>

      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
          featured ? "bg-gradient-to-br from-luxury-gold to-luxury-copper" : "bg-gradient-luxury"
        )}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Name + Amount */}
      <h3
        className={cn(
          "text-xl font-bold mb-1",
          featured ? "text-luxury-gold" : "text-foreground"
        )}
      >
        {name}
      </h3>
      <p className="text-2xl font-bold text-foreground mb-2">{amountLabel}</p>

      {/* Scripture */}
      <p className="text-sm text-muted-foreground italic font-serif mb-4">
        "{scripture}" — <span className="not-italic text-xs">{scriptureRef}</span>
      </p>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* Progress bar */}
      <div className="mb-5">
        <div className="h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-700",
              featured
                ? "bg-gradient-to-r from-luxury-gold to-luxury-copper"
                : "bg-gradient-luxury"
            )}
            style={{ width: `${claimedPercent}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">
          {spotsClaimed} partners joined
        </p>
      </div>

      {/* CTA */}
      <Button
        variant={featured ? "primary" : "outline"}
        className={cn(
          "w-full",
          featured && "bg-gradient-to-r from-luxury-gold to-luxury-copper text-black hover:opacity-90 border-0"
        )}
        onClick={onSelect}
      >
        {ctaLabel}
      </Button>
    </div>
  );
};
