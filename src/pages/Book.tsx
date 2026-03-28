import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, MessageSquare, Headphones, Users, Sparkles, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { Footer } from "@/components/landing/Footer";
import { InView } from "@/components/ui/in-view";
import { motion } from "motion/react";

const features = [
  {
    icon: BookOpen,
    title: "31 Chapters with Modern Commentary",
    description:
      "Each chapter of the original 1896 novel paired with a fresh commentary connecting Sheldon's world to yours.",
  },
  {
    icon: MessageSquare,
    title: "AI Reading Companion",
    description:
      "Ask questions about each chapter and get thoughtful, biblically grounded answers in real time.",
  },
  {
    icon: Sparkles,
    title: "Daily WWJD Scenarios & Action Steps",
    description:
      "Face a modern ethical scenario each day and choose a concrete action to walk in His steps.",
  },
  {
    icon: Headphones,
    title: "Audio Narration",
    description:
      "Listen to every chapter read aloud — perfect for commutes, workouts, or winding down.",
  },
  {
    icon: Users,
    title: "Community Discussion",
    description:
      "Join other readers on the same journey. Share reflections, encourage one another, grow together.",
  },
];

const Book = () => {
  useEffect(() => {
    document.title = "In His Steps — WWJD.com";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-dvh bg-background">
      <LandingNavBar />

      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-mesh">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Book Cover */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <img
                  src="/og-image.jpg"
                  alt="In His Steps: What Would Jesus Do? — WWJD Movement Edition"
                  className="w-72 md:w-80 lg:w-96 rounded-2xl shadow-luxury border border-white/10"
                />
                {/* Glow behind book */}
                <div className="absolute -inset-8 -z-10 bg-accent-primary/15 rounded-full blur-3xl" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="text-center md:text-left space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm font-semibold text-luxury-gold">
                  Free on the WWJD App
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                In His Steps:
                <br />
                <span className="italic text-gradient-luxury">
                  What Would Jesus Do?
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                WWJD Movement Edition — The 31-Day Challenge
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  asChild
                  className="px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg"
                >
                  <a href="https://app.wwjd.com" target="_blank" rel="noopener noreferrer">
                    Start the Challenge — Free
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground tracking-tight mb-4">
              The Book That Started{" "}
              <span className="italic text-gradient-luxury">WWJD</span>
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Republished for 2026 — with everything you need to live it out.
            </p>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
          >
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-16">
              <p>
                In 1896, Congregational minister Charles Sheldon read a story to his
                Sunday evening congregation — one chapter each week — about a pastor
                who challenges his church to ask a single question before every
                decision: <em>"What would Jesus do?"</em> That story became{" "}
                <strong className="text-foreground">In His Steps</strong>, one of the
                bestselling novels in history with over 50 million copies sold, and the
                origin of the WWJD movement that swept the world.
              </p>
              <p>
                Now, for the first time, the complete novel is available as a free,
                guided 31-day challenge on the WWJD app. Each day you read one chapter
                of Sheldon's original text, paired with a modern commentary that
                connects the dilemmas of 1896 Raymond to the choices you face today.
                Then you encounter a real-world WWJD scenario and take a concrete
                action step — turning the question into a daily practice.
              </p>
              <p>
                Whether you grew up with a WWJD bracelet on your wrist or you're
                discovering the question for the first time, the 31-Day Challenge is
                designed to move "What Would Jesus Do?" from slogan to lifestyle.
              </p>
            </div>
          </InView>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <InView
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: index * 0.08 },
                    },
                  }}
                >
                  <div className="group h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-accent-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-luxury flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </InView>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-12 shadow-luxury overflow-hidden text-center">
              {/* Glow effects */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-section-compass/10 rounded-full blur-3xl" />

              <div className="relative space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Start Walking in His Steps
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                  Open the WWJD app and begin the free 31-Day "In His Steps"
                  Challenge today.
                </p>
                <p className="text-sm text-muted-foreground">
                  Works on any device — iOS &amp; Android apps coming soon.
                </p>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    asChild
                    className="px-10 py-7 text-lg"
                  >
                    <a href="https://app.wwjd.com" target="_blank" rel="noopener noreferrer">
                      Open WWJD App
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* Back to Home */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Book;
