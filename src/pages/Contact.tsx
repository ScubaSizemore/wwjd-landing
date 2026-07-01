import { useState, useEffect } from "react";
import { Mail, Building2, Mic, Handshake } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { Footer } from "@/components/landing/Footer";
import { InView } from "@/components/ui/in-view";

const contactTypes = [
  { icon: Handshake, label: "Partnership Opportunity" },
  { icon: Mic, label: "Media & Publicity" },
  { icon: Building2, label: "Church / Organization" },
  { icon: Mail, label: "General Inquiry" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    type: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Partners & Publicity — WWJD.com";
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${form.type || "Inquiry"} — ${form.name}${form.organization ? ` (${form.organization})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.organization}\nRole: ${form.role}\nType: ${form.type}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@wwjd.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-dvh bg-background">
      <LandingNavBar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Partners &amp; Publicity
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Let&rsquo;s Build{" "}
            <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">
              Together
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Whether you&rsquo;re a ministry partner, media contact, church leader, or organization looking to bring WWJD to your community — we&rsquo;d love to connect.
          </motion.p>
        </div>
      </section>

      {/* Contact Type Cards */}
      <section className="px-4 pb-8">
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
          {contactTypes.map((ct, i) => {
            const Icon = ct.icon;
            const isSelected = form.type === ct.label;
            return (
              <InView
                key={ct.label}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.07 } },
                }}
              >
                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, type: ct.label }))}
                  className={`w-full flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-200 text-center ${
                    isSelected
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-card hover:border-accent/40 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium leading-tight">{ct.label}</span>
                </button>
              </InView>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
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

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="organization">
                    Organization / Church
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Organization name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground" htmlFor="role">
                    Your Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="e.g. Pastor, Director, Journalist"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground" htmlFor="message">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how you'd like to connect or collaborate..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground/60">
                  Your message will be sent to{" "}
                  <span className="text-muted-foreground">info@wwjd.com</span>. Our team will follow up personally.
                </p>
                <Button type="submit" variant="primary" className="px-8 py-3 w-full sm:w-auto shrink-0">
                  Send Message
                </Button>
              </div>
            </form>
          </InView>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
