import { Sparkles, Shield, Home, Baby, BookOpen, Crown, Users, Vote, Calendar, Bell, MessageSquare, Heart, TrendingUp, ShieldCheck } from "lucide-react";
import { InView } from "@/components/ui/in-view";

const tiers = [
  { icon: Baby, name: "Kids", subtitle: "Under 8", color: "bg-blue-500/20 text-blue-400" },
  { icon: BookOpen, name: "Beginner", subtitle: "Growing in Faith", color: "bg-green-500/20 text-green-400" },
  { icon: Crown, name: "Advanced", subtitle: "Seasoned Believers", color: "bg-amber-500/20 text-amber-400" },
];

const communityFeatures = [
  { icon: Shield, text: "Full moderation control" },
  { icon: Vote, text: "Polls & group decisions" },
  { icon: Calendar, text: "Events & RSVPs" },
  { icon: Bell, text: "Bulletins & announcements" },
  { icon: MessageSquare, text: "Threaded discussions" },
];

const familyFeatures = [
  { icon: Users, text: "Up to 5 family profiles" },
  { icon: ShieldCheck, text: "Child-safe PIN mode" },
  { icon: Heart, text: "Shared prayer board" },
  { icon: TrendingUp, text: "Track growth together" },
  { icon: MessageSquare, text: "Daily family questions" },
];

export const DifferentiatorsSection = () => {
  return (
    <section id="features-section" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground tracking-tight mb-4">
            What Makes Us{" "}
            <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Different</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Three things you won't find anywhere else — built for real spiritual growth.
          </p>
        </InView>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Personalized Content */}
          <InView variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
            <div className="group h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-accent-primary/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-luxury flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Personalized by Age & Faith Level</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every devotional, prayer, and growth track adapts to where you are in your journey.
              </p>
              <div className="flex flex-wrap gap-2">
                {tiers.map((tier, i) => {
                  const Icon = tier.icon;
                  return (
                    <span key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${tier.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {tier.name}
                      <span className="opacity-70">· {tier.subtitle}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </InView>

          {/* Card 2: Self-Admin Communities */}
          <InView variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } } }}>
            <div className="group h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-accent-primary/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-luxury flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Your Community, Your Rules</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Create private, invite-only groups with full moderation. No central authority.
              </p>
              <ul className="space-y-2.5">
                {communityFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Icon className="w-4 h-4 text-accent-primary shrink-0" />
                      {f.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </InView>

          {/* Card 3: Family Hub */}
          <InView variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } } }}>
            <div className="group h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-accent-primary/30 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-luxury flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Family Discipleship Hub</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Grow together as a family — each member at their own level, in one place.
              </p>
              <ul className="space-y-2.5">
                {familyFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <Icon className="w-4 h-4 text-section-family shrink-0" />
                      {f.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
};
