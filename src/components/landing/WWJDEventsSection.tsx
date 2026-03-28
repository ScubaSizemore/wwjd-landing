import { Newspaper, Clock, BookOpen, Users, Share2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

export const WWJDEventsSection = () => {
  const features = [
    { icon: Clock, title: "Updated Daily", description: "Fresh biblical perspective on what's happening in the world right now." },
    { icon: BookOpen, title: "Scripture-Grounded", description: "Every insight is rooted in Scripture with relevant verses and context." },
    { icon: Users, title: "Tiered Responses", description: "Age-appropriate explanations for kids, teens, and adults." },
    { icon: MessageCircle, title: "Discussion Guides", description: "Family and community discussion questions for deeper exploration." }
  ];

  return (
    <section id="wwjd-events-section" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-section-prayer/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <InView
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/20 text-foreground text-sm font-medium">
                <Newspaper className="w-4 h-4" />
                <span>Dynamic Current Events</span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-tight">
                What Would Jesus Say About{" "}
                <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Today's Headlines?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Every day, we analyze current events through a biblical lens — helping you understand how Scripture applies to what's happening right now.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-card/80 border border-border">
                      <div className="w-10 h-10 rounded-xl bg-gradient-luxury flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 } },
            }}
          >
            <div className="relative">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 bg-gradient-luxury rounded-[40px] blur-2xl opacity-30" />
                <div className="relative bg-zinc-900 dark:bg-zinc-800 rounded-[40px] p-3 shadow-2xl">
                  <div className="bg-background rounded-[32px] overflow-hidden">
                    <div className="bg-gradient-luxury p-6 text-white">
                      <div className="flex items-center gap-2 text-sm opacity-80 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>Today's Event</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Economic Uncertainty & Faith</h3>
                      <p className="text-sm opacity-80">How Scripture guides us through financial anxiety</p>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-section-grow/20 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-section-grow" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Scripture</p>
                          <p className="text-xs text-muted-foreground">Matthew 6:25-34</p>
                        </div>
                      </div>
                      <div className="h-px bg-border" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "Do not worry about your life... Look at the birds of the air; they do not sow or reap..."
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-section-family/20 text-xs font-medium text-foreground">Family Guide</span>
                        <span className="px-3 py-1 rounded-full bg-section-compass/20 text-xs font-medium text-foreground">Discussion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
};
