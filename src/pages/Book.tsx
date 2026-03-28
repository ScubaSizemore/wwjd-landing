import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, MessageSquare, Headphones, Users, Sparkles, ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { Footer } from "@/components/landing/Footer";
import { InView } from "@/components/ui/in-view";
import { motion } from "motion/react";

const challengeFeatures = [
  {
    icon: BookOpen,
    title: "31 Chapters with Modern Commentary",
    description:
      "Each chapter paired with Isaacson-depth, Hemingway-lean commentary connecting 1896 to your life today.",
  },
  {
    icon: MessageSquare,
    title: "AI Reading Companion",
    description:
      'Ask questions about each chapter and get biblically grounded answers drawn from the actual text.',
  },
  {
    icon: Sparkles,
    title: "Daily WWJD Scenarios",
    description:
      "Face a modern ethical dilemma each day — drawn from the chapter's theme — and take a concrete action step.",
  },
  {
    icon: Headphones,
    title: "Audio Narration",
    description:
      "Listen to every chapter read aloud. Perfect for commutes, workouts, or winding down.",
  },
  {
    icon: Users,
    title: "Community Discussion",
    description:
      "31 discussion threads — one per chapter. Share reflections, encourage others, grow together.",
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

      {/* ── Hero Section ────────────────────────────────────────── */}
      <section className="relative min-h-[90dvh] flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
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
                  src="/book-cover.png"
                  alt="In His Steps: What Would Jesus Do? — WWJD Movement Edition"
                  className="w-72 md:w-80 lg:w-96 rounded-2xl shadow-luxury border border-white/10"
                />
                <div className="absolute -inset-8 -z-10 bg-accent-primary/15 rounded-full blur-3xl" />
              </div>
            </motion.div>

            {/* Text + CTAs */}
            <motion.div
              className="text-center md:text-left space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm font-semibold text-luxury-gold">
                  Free Download
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.15] tracking-tight">
                In His Steps:
                <br />
                <span className="italic text-gradient-luxury">
                  What Would Jesus Do?{" "}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                WWJD Movement Edition — The book that started it all, republished for 2026 with modern commentary.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  asChild
                  className="px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg"
                >
                  <a href="/In-His-Steps.epub" download>
                    <Download className="w-5 h-5 mr-2" />
                    Download Free EPUB
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  disabled
                  className="px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg opacity-70 cursor-not-allowed"
                >
                  31-Day Challenge — Coming Easter 2026
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Works with Apple Books, Kindle, and any EPUB reader. 115,000 words. 31 chapters. Free.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About the Book ──────────────────────────────────────── */}
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
              <span className="italic text-gradient-luxury">WWJD </span>
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              130 years old. 50 million copies. One question that changed everything.
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
                In 1896, minister Charles Sheldon read a story to his Kansas
                congregation — one chapter each week — about a pastor
                who challenges his church to ask one question before every
                decision: <em>"What would Jesus do?"</em> That story became{" "}
                <strong className="text-foreground">In His Steps</strong>, one of the
                bestselling novels in history, and the origin of the WWJD movement.
              </p>
              <p>
                This <strong className="text-foreground">WWJD Movement Edition</strong> brings
                the complete original text to a new generation. Every chapter includes a modern
                commentary that connects 1896 to your life today — written with the biographical
                depth of Walter Isaacson and the economy of Ernest Hemingway. Plus a foreword
                announcing the relaunch of the WWJD movement, a historical introduction, 93
                discussion questions, and a call to action.
              </p>
              <p>
                The book is free. The question is yours.
              </p>
            </div>
          </InView>

          {/* Download CTA */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            <div className="text-center mb-20">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="px-10 py-7 text-lg"
              >
                <a href="/In-His-Steps.epub" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download the EPUB — Free
                </a>
              </Button>
            </div>
          </InView>
        </div>
      </section>

      {/* ── 31-Day Challenge Teaser ──────────────────────────────── */}
      <section className="py-20 px-4 bg-card/30 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 mb-6">
                <Sparkles className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm font-semibold text-luxury-gold">
                  In the WWJD App
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Take the 31-Day{" "}
                <span className="italic text-gradient-luxury">Challenge</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Read the book in the app and unlock daily WWJD scenarios, an AI reading companion,
                audio narration, and community discussion. One chapter. One question. One action. Every day.
              </p>
            </div>
          </InView>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {challengeFeatures.map((feature, index) => {
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

          {/* Challenge CTA */}
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              disabled
              className="px-10 py-7 text-lg opacity-70 cursor-not-allowed"
            >
              31-Day Challenge — Coming Easter 2026
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              The challenge launches Easter Sunday. Download the book now and get ready.
            </p>
          </div>
        </div>
      </section>

      {/* ── Back to Home ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-12">
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
