import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

export const TestimonialsSection = () => {
  const testimonials = [
    { quote: "The self-moderation tools are incredible. I can manage join requests, review flagged content, and keep our small group private and safe — all without any tech expertise.", author: "Pastor James Wilson", role: "Small Group Ministry Director", gradient: "from-section-compass to-section-compass/80" },
    { quote: "My 7-year-old and 15-year-old both use WWJD, and they each get content at their level. The daily family question has become our dinner table tradition.", author: "Jennifer Thompson", role: "Homeschool Mom of 4", gradient: "from-section-family to-section-family/80" },
    { quote: "The WWJD current events feature helps me process the news through a biblical lens. I finally have something meaningful to discuss with my teens about what's happening.", author: "Michael Chen", role: "Father & Deacon", gradient: "from-section-prayer to-section-prayer/80" },
    { quote: "I went from 'seeker' to 'new believer' and the content grew with me. No other app understands that faith is a journey with different needs at each stage.", author: "Amanda Foster", role: "New Believer (6 months)", gradient: "from-section-grow to-section-grow/80" }
  ];

  return (
    <section id="testimonials-section" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Trusted by{" "}
              <span className="italic text-gradient-luxury">Faith Communities</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-light">
              See what leaders and families are saying
            </p>
          </div>
        </InView>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <InView
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 } },
              }}
            >
              <div className="p-10 rounded-[32px] bg-card hover:bg-card/80 border-2 border-border hover:border-accent-primary/20 transition-all hover:shadow-luxury group h-full">
                <div className={cn(
                  "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                  testimonial.gradient
                )}>
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <p className="text-xl text-foreground mb-8 leading-relaxed font-light">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={cn("w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-sm font-bold", testimonial.gradient)}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};
