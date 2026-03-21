import { Home, Users, ShieldCheck, MessageCircle, Calendar, Heart, TrendingUp, Baby, BookOpen, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

export const FamilyHubSection = () => {
  const features = [
    { icon: Users, title: "Family Profiles", description: "Up to 5 family members with individual profiles, avatars, and progress tracking." },
    { icon: ShieldCheck, title: "Child-Safe Mode", description: "Parent PIN protection ensures kids see only age-appropriate content." },
    { icon: MessageCircle, title: "Daily Family Questions", description: "Conversation starters for the dinner table that spark meaningful discussions." },
    { icon: Calendar, title: "Family Events", description: "Schedule family devotions, church activities, and spiritual milestones together." },
    { icon: Heart, title: "Shared Prayer Board", description: "Pray for each other with a family prayer board and celebrate answered prayers." },
    { icon: TrendingUp, title: "Growth Together", description: "Track family progress on discipleship tracks and celebrate milestones as a unit." }
  ];

  const contentTiers = [
    { icon: Baby, name: "Kids", age: "Under 8", color: "from-blue-400 to-sky-500" },
    { icon: BookOpen, name: "Beginner", age: "Growing in Faith", color: "from-green-400 to-emerald-500" },
    { icon: Crown, name: "Advanced", age: "Seasoned Believers", color: "from-amber-400 to-yellow-500" },
  ];

  return (
    <section id="family-section" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-section-family/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-section-grow/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-section-family/20 text-foreground text-sm font-medium mb-4">
              <Home className="w-4 h-4" />
              <span>Family Discipleship Hub</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Grow Your Family's{" "}
              <span className="italic text-gradient-luxury">Faith Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Everything your family needs to build spiritual habits, have meaningful conversations, and grow closer to God — and each other.
            </p>
          </div>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
        >
          <div className="mb-16">
            <p className="text-center text-muted-foreground mb-6 text-sm font-medium uppercase tracking-wide">
              Content tailored for every age & stage
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {contentTiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <div key={index} className={cn("flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r text-white text-sm font-medium shadow-md", tier.color)}>
                    <Icon className="w-4 h-4" />
                    <span>{tier.name}</span>
                    <span className="text-white/70 text-xs">({tier.age})</span>
                  </div>
                );
              })}
            </div>
          </div>
        </InView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <InView
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.08 } },
                }}
              >
                <div className="group p-8 rounded-3xl bg-card border-2 border-border hover:border-section-family/30 hover:shadow-luxury transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-section-family/20 group-hover:bg-section-family flex items-center justify-center mb-6 transition-all">
                    <Icon className="w-7 h-7 text-foreground group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </InView>
            );
          })}
        </div>
      </div>
    </section>
  );
};
