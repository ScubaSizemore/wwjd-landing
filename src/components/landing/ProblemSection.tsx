import { useState, useEffect } from "react";
import { Smartphone, Users, TrendingDown, Clock, MessageCircle, Calendar } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

export const ProblemSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const problems = [
    { icon: Users, title: "Mid-Week Disconnect", description: "Churches lack tools for members to stay connected between Sundays. Community fades by Wednesday." },
    { icon: Clock, title: "Overwhelmed Parents", description: "Parents want to disciple their kids but need age-appropriate content and daily structure." },
    { icon: MessageCircle, title: "One-Size-Fits-All", description: "Kids, beginners, and advanced believers all get the same generic content." },
    { icon: Calendar, title: "No Safe Spaces", description: "Small groups need private, self-moderated spaces outside of church apps and social media." },
    { icon: Smartphone, title: "Missing Biblical Lens", description: "Current events lack daily biblical perspective to help believers navigate today's world." },
    { icon: TrendingDown, title: "Scattered Tools", description: "Prayer apps, devotionals, Bible study, and community tools are all in different places." }
  ];

  return (
    <section id="problem-section" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div className="text-center mb-20 space-y-6">
            <div className="w-16 h-1 bg-accent-primary mx-auto mb-8" />
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              The Problem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Modern life creates unprecedented barriers to authentic spiritual growth.
            </p>
          </div>
        </InView>

        <div className="relative px-4 md:px-16">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <CarouselItem key={index} className="pl-6 basis-[85%] md:basis-1/2 lg:basis-1/3">
                    <div className="group p-6 sm:p-10 rounded-2xl sm:rounded-[32px] bg-card border-2 border-border hover:border-accent-primary/20 transition-all hover:shadow-luxury h-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-luxury opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-16 h-16 rounded-2xl bg-muted group-hover:bg-gradient-luxury flex items-center justify-center mb-8 transition-all">
                        <Icon className="w-8 h-8 text-foreground group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{problem.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base">{problem.description}</p>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 border-2" />
            <CarouselNext className="hidden md:flex -right-6 border-2" />
          </Carousel>

          <div className="flex justify-center gap-3 mt-10">
            {problems.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-3 rounded-full transition-all duration-300 min-w-[44px] sm:min-w-0",
                  current === i ? "bg-accent-primary w-10 sm:w-8" : "bg-muted-foreground/30 w-3 sm:w-2 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>

        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
          }}
        >
          <div className="text-center mt-20 max-w-3xl mx-auto">
            <p className="text-2xl italic text-muted-foreground leading-relaxed">
              But there's hope. A better way to grow. Together.
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
};
