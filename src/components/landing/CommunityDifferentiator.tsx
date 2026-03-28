import { Shield, Users, MessageSquare, Settings, Vote, Calendar, Bell, Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

export const CommunityDifferentiator = () => {
  const features = [
    { icon: Users, title: "Create Private Communities", description: "Start invite-only groups for your church, small group, Bible study, or accountability partners." },
    { icon: Shield, title: "Self-Moderation Tools", description: "Review join requests, manage reported content, and approve posts before they go live." },
    { icon: MessageSquare, title: "Rich Discussions", description: "Threaded conversations, reactions, and mentions keep your community engaged." },
    { icon: Vote, title: "Polls & Decisions", description: "Gather community input with anonymous or public polls and voting." },
    { icon: Calendar, title: "Events & RSVPs", description: "Schedule gatherings, track attendance, and send reminders to members." },
    { icon: Bell, title: "Bulletins & Announcements", description: "Pin important messages and keep everyone informed with community bulletins." }
  ];

  return (
    <section id="community-section" className="py-24 px-4 bg-card text-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              <span>Self-Administered Communities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Your Community.{" "}
              <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Your Rules.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Create private, invite-only communities with full moderation control. No central authority — just you and your people growing together.
            </p>
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
                <div className="group p-8 rounded-3xl bg-muted/50 border border-border hover:border-accent-primary/30 hover:bg-muted transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-luxury flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </InView>
            );
          })}
        </div>

        <InView
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
          }}
        >
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted border border-border">
              <Flag className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                Content moderation, join approvals, and member management — all in your hands
              </span>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
