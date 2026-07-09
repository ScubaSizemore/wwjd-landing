import { useState, useEffect } from "react";
import { useCanonical } from "@/lib/useCanonical";
import {
  Sparkles,
  Shield,
  Users,
  Church,
  Code,
  Globe,
  Heart,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { Footer } from "@/components/landing/Footer";
import { InView } from "@/components/ui/in-view";

const impactCards = [
  {
    icon: Users,
    amount: "$1,000",
    impact: "Equips 10 families with daily discipleship tools",
  },
  {
    icon: Church,
    amount: "$10,000",
    impact: "Launches WWJD in a new church community",
  },
  {
    icon: Code,
    amount: "$50,000",
    impact: "Funds a full year of platform development",
  },
  {
    icon: Globe,
    amount: "$200,000",
    impact: "Takes WWJD global — translation, outreach, 100,000+ users",
  },
];

const Donations = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useCanonical("/donations");
  useEffect(() => {
    document.title = "Support Us — WWJD.com";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Giving Inquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@wwjd.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-dvh bg-background">
      <LandingNavBar />

      {/* ============================================================ */}
      {/* SECTION 1: Hero                                               */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="text-sm font-semibold text-luxury-gold">
                501(c)(3) Tax-Deductible
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Be Part of What God Is Doing Through
            <br />
            <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">
              WWJD Global Outreach
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Your support helps expand WWJD Global Outreach by making the message of Christ accessible
            through digital tools, global content, and community-driven discipleship. Every gift fuels
            the development of resources that reach individuals, families, and communities with hope,
            guidance, and the message of Jesus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              <Heart className="w-4 h-4" />
              Get in touch to give
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: Scripture Banner                                    */}
      {/* ============================================================ */}
      <section className="px-4 py-16 bg-background">
        <InView
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="max-w-4xl mx-auto rounded-2xl bg-card/80 border border-border border-l-4 border-l-luxury-gold p-8 sm:p-12">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted-foreground font-medium tracking-wide">
              &mdash; 2 Corinthians 9:7
            </p>
          </div>
        </InView>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Where Your Gift Goes                               */}
      {/* ============================================================ */}
      <section className="py-20 px-4 bg-card/30 border-y border-border/50">
        <div className="max-w-5xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground tracking-tight mb-4">
              Where Your Gift{" "}
              <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Goes</span>
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-14 max-w-xl mx-auto">
              Every dollar builds something that lasts.
            </p>
          </InView>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <InView
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: i * 0.08 },
                    },
                  }}
                >
                  <div className="group h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-accent-primary/30 transition-all duration-300 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-luxury flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-luxury-gold mb-2">{card.amount}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.impact}</p>
                  </div>
                </InView>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Lead Gen Form                                      */}
      {/* ============================================================ */}
      <section id="contact-form" className="py-24 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                The question costs nothing.
                <br />
                <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">
                  The movement needs you.
                </span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto">
                Interested in giving? Fill out your details below and our team will follow up personally.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-3xl p-8 sm:p-10 space-y-6 shadow-luxury"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="name">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="email">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="phone">
                  Phone Number <span className="text-muted-foreground/60 text-xs font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="message">
                  Message / Interest <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your giving interest or any questions you have..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground/60">
                  Our team will follow up personally at{" "}
                  <span className="text-muted-foreground">info@wwjd.com</span>.
                </p>
                <Button type="submit" variant="primary" className="px-8 py-3 w-full sm:w-auto shrink-0">
                  Get in Touch
                </Button>
              </div>
            </form>
          </InView>

          {/* Trust badges */}
          <InView
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-luxury-gold" />
                501(c)(3) Non-Profit
              </span>
              <span className="hidden sm:inline text-border">&middot;</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-luxury-gold" />
                EIN: 41-5015996
              </span>
              <span className="hidden sm:inline text-border">&middot;</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-luxury-gold" />
                Tax-Deductible Gifts
              </span>
            </div>
          </InView>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donations;
