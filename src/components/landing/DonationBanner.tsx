import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";

export const DonationBanner = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl border border-[#C8A961]/20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 sm:p-8 md:p-10 overflow-hidden">
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A961] to-transparent" />
            {/* Subtle glow */}
            <div className="absolute -top-20 left-10 w-40 h-40 bg-[#C8A961]/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col items-center text-center gap-5">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#C8A961]/15 flex items-center justify-center">
                <Heart className="w-7 h-7 text-[#C8A961]" />
              </div>

              {/* Label */}
              <p className="text-[#C8A961] text-xs font-bold uppercase tracking-widest">
                Support the Mission
              </p>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl">
                Help Us Reach More Families
              </h3>

              {/* Tony's copy */}
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl">
                Your support helps expand WWJD Global Outreach by making the message of Christ accessible through digital tools, global content, and community-driven discipleship. Every gift fuels the development of resources that reach individuals, families, and communities with hope, guidance, and the message of Jesus.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  asChild
                  className="px-8 py-5"
                >
                  <Link to="/donations">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="px-6 py-5 text-white/70 hover:text-white"
                >
                  <Link to="/donations">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust line */}
              <p className="text-white/30 text-xs">
                WWJD Global Outreach, Inc. is a registered 501(c)(3). All donations are tax-deductible.
              </p>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
