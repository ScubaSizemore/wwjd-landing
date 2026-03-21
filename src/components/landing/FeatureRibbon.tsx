import { 
  BookOpen, Heart, Compass, TrendingUp, Users, Home, 
  MessageSquare, Baby, Sparkles, Moon, Newspaper 
} from "lucide-react";

const features = [
  { icon: Heart, label: "Prayer" },
  { icon: BookOpen, label: "Daily Devotional" },
  { icon: BookOpen, label: "Bible" },
  { icon: Newspaper, label: "WWJD Events" },
  { icon: MessageSquare, label: "Journal" },
  { icon: Compass, label: "Heart Compass" },
  { icon: TrendingUp, label: "Grow Tracks" },
  { icon: Moon, label: "Bedtime Prayer" },
  { icon: Baby, label: "Kids Stories" },
  { icon: Users, label: "Community" },
  { icon: Home, label: "Family Hub" },
  { icon: Sparkles, label: "AI Companion" },
];

const FeaturePill = ({ icon: Icon, label }: { icon: typeof Heart; label: string }) => (
  <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-muted border border-border whitespace-nowrap select-none">
    <Icon className="w-4 h-4 text-accent-primary shrink-0" />
    <span className="text-sm font-medium text-foreground">{label}</span>
  </div>
);

export const FeatureRibbon = () => {
  return (
    <section className="py-8 overflow-hidden relative">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
        {/* Duplicate for seamless loop */}
        {[...features, ...features].map((f, i) => (
          <FeaturePill key={i} icon={f.icon} label={f.label} />
        ))}
      </div>
    </section>
  );
};
