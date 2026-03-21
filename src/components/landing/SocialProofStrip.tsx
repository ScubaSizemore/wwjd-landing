import { Star } from "lucide-react";

const testimonials = [
  { quote: "This app changed my family's prayer life completely.", name: "Sarah M." },
  { quote: "Finally an app where I can lead my own small group.", name: "Pastor David" },
  { quote: "My kids actually look forward to devotional time now.", name: "Maria L." },
  { quote: "The age-specific content is a game changer for our church.", name: "James R." },
];

export const SocialProofStrip = () => {
  return (
    <section className="py-16 px-4 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
          ))}
        </div>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          <div className="flex gap-8 animate-marquee-slow hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0 max-w-xs text-center px-4">
                <p className="text-foreground font-medium italic mb-2">"{t.quote}"</p>
                <p className="text-sm text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
