import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Sparkles,
  Heart,
  BookOpen,
  Shield,
  Church,
  Sunrise,
  Flame,
  Users,
  Code,
  Globe,
  ArrowDown,
  Loader2,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { Footer } from "@/components/landing/Footer";
import { InView } from "@/components/ui/in-view";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { DonationTierCard } from "@/components/donations/DonationTierCard";
import { CustomAmountSection } from "@/components/donations/CustomAmountSection";
import { DonationFAQ } from "@/components/donations/DonationFAQ";
import { createLandingDonation } from "@/lib/donations";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Tier data                                                          */
/* ------------------------------------------------------------------ */

const shepherdsTiers = [
  {
    name: "Barnabas Partner",
    amount: 100000,
    amountLabel: "$1,000",
    scripture: "He was a good man, full of the Holy Spirit and faith.",
    scriptureRef: "Acts 4:36",
    description:
      "The 'Son of Encouragement' \u2014 your gift strengthens the WWJD mission and equips families with daily discipleship tools.",
    icon: Heart,
    spotsTotal: 100,
    spotsClaimed: 4,
  },
  {
    name: "Timothy Partner",
    amount: 250000,
    amountLabel: "$2,500",
    scripture: "The things you have heard me say... entrust to reliable people.",
    scriptureRef: "2 Timothy 2:2",
    description:
      "Invest in the next generation. Your partnership directly funds new content, courses, and community features.",
    icon: BookOpen,
    spotsTotal: 50,
    spotsClaimed: 2,
  },
  {
    name: "Shepherd\u2019s Mantle",
    amount: 500000,
    amountLabel: "$5,000",
    scripture: "Be shepherds of God\u2019s flock that is under your care.",
    scriptureRef: "1 Peter 5:2\u20134",
    description:
      "A shepherd-level commitment. You shape the tools your congregation will use and get a direct line to our team.",
    icon: Shield,
    spotsTotal: 25,
    spotsClaimed: 1,
  },
];

const kingdomTiers = [
  {
    name: "Cornerstone Church",
    amount: 1000000,
    amountLabel: "$10,000",
    scripture: "Built on the foundation of the apostles and prophets.",
    scriptureRef: "Ephesians 2:20",
    description:
      "Your church becomes a foundational partner. Branded community space, priority content requests, and featured on wwjd.com.",
    icon: Church,
    spotsTotal: 30,
    spotsClaimed: 2,
  },
  {
    name: "City on a Hill",
    amount: 2500000,
    amountLabel: "$25,000",
    scripture: "A town built on a hill cannot be hidden.",
    scriptureRef: "Matthew 5:14",
    description:
      "Your organization\u2019s impact cannot be hidden. Full church onboarding, quarterly impact reports, and logo displayed in-app.",
    icon: Sunrise,
    spotsTotal: 15,
    spotsClaimed: 1,
    featured: true,
  },
  {
    name: "Upper Room",
    amount: 5000000,
    amountLabel: "$50,000",
    scripture: "They all joined together constantly in prayer.",
    scriptureRef: "Acts 1:13\u201314",
    description:
      "Where the movement began. Your church becomes a WWJD launch site with custom deployment and dedicated support.",
    icon: Flame,
    spotsTotal: 5,
    spotsClaimed: 0,
  },
];

const pillarTiers = [
  {
    name: "The Twelve",
    amount: 10000000,
    amountLabel: "$100,000",
    scripture: "He appointed twelve that they might be with him.",
    scriptureRef: "Mark 3:14",
    tagline: "12 spots, like the 12 apostles.",
    spotsTotal: 12,
    spotsClaimed: 0,
    benefits: [
      "Permanent name on the Founders Wall",
      "Annual dinner with founding team",
      "Quarterly strategy briefings",
      "Priority feature requests",
      "Personalized annual impact report",
    ],
    hasStripeCheckout: true,
  },
  {
    name: "The Upper Room",
    amount: 25000000,
    amountLabel: "$250,000",
    scripture: "They were all together in one place.",
    scriptureRef: "Acts 1:14",
    tagline: "Only 3 will ever hold this title.",
    spotsTotal: 3,
    spotsClaimed: 0,
    benefits: [
      "Everything in The Twelve",
      "Name a major app feature",
      "Seat on Advisory Council",
      "Private Upper Room group",
      "Custom WWJD deployment",
      "Lifetime recognition across all platforms",
    ],
    hasStripeCheckout: false,
  },
  {
    name: "The Cornerstone",
    amount: 50000000,
    amountLabel: "$500,000",
    scripture: "The stone the builders rejected has become the cornerstone.",
    scriptureRef: "Psalm 118:22",
    tagline: "1 of 1. There is only one Cornerstone.",
    spotsTotal: 1,
    spotsClaimed: 0,
    benefits: [
      "Everything above",
      "Founding Cornerstone title",
      "Co-branding in-app",
      "Monthly CEO call",
      "First right on naming opportunities",
      "Full network deployment",
      "Permanent recognition everywhere",
    ],
    hasStripeCheckout: false,
    isCornerstone: true,
  },
];

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
    impact: "Takes WWJD global \u2014 translation, outreach, 100,000+ users",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Donations = () => {
  const [searchParams] = useSearchParams();
  const [pillarLoading, setPillarLoading] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Donate \u2014 WWJD.com";
    window.scrollTo(0, 0);
  }, []);

  // Success / cancel toasts
  useEffect(() => {
    const status = searchParams.get("status");
    if (status === "success") {
      toast.success(
        "Thank you for your generous gift! A tax-deductible receipt has been sent to your email."
      );
    } else if (status === "canceled") {
      toast("Your donation was not completed. You can try again anytime.");
    }
  }, [searchParams]);

  const scrollToTiers = () => {
    document.getElementById("shepherds-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTierSelect = (tierName: string, amount: number, frequency: "monthly" | "one_time") => {
    const email = prompt("Enter your email for the tax-deductible receipt:");
    if (!email) return;
    createLandingDonation({ email, amount, frequency, tierName }).then((res) => {
      if ("url" in res) {
        window.location.href = res.url;
      } else {
        toast.error(res.error || "Something went wrong.");
      }
    });
  };

  const handlePillarCheckout = async (tier: (typeof pillarTiers)[0]) => {
    const email = prompt("Enter your email for the tax-deductible receipt:");
    if (!email) return;
    setPillarLoading(tier.name);
    const res = await createLandingDonation({
      email,
      amount: tier.amount,
      frequency: "one_time",
      tierName: tier.name,
    });
    if ("url" in res) {
      window.location.href = res.url;
    } else {
      toast.error(res.error || "Something went wrong.");
      setPillarLoading(null);
    }
  };

  return (
    <div className="min-h-dvh bg-background">
      <LandingNavBar />

      {/* ============================================================ */}
      {/* SECTION 1: Hero                                               */}
      {/* ============================================================ */}
      <section className="relative min-h-dvh flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Gold pill */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/20">
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span className="text-sm font-semibold text-luxury-gold">
                501(c)(3) Tax-Deductible &middot; Founding Partner Opportunity
              </span>
            </div>
          </motion.div>

          {/* H1 */}
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

          {/* Sub */}
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

          {/* Progress bar */}
          <motion.div
            className="max-w-md mx-auto space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="h-2.5 rounded-full bg-border overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-luxury-gold to-luxury-copper"
                initial={{ width: 0 }}
                animate={{ width: "10%" }}
                transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-luxury-gold">10 of 100</span> Founding Partner
              spots claimed
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToTiers}
              className="px-10 py-7 text-lg"
            >
              Claim Your Spot
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
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
          <div className="max-w-4xl mx-auto rounded-2xl bg-card/80 border border-border p-8 sm:p-12 border-l-4 border-l-luxury-gold">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
              &ldquo;Whoever sows generously will also reap generously.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted-foreground font-medium tracking-wide">
              &mdash; 2 Corinthians 9:6
            </p>
          </div>
        </InView>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: Shepherds' Circle                                  */}
      {/* ============================================================ */}
      <section id="shepherds-section" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground tracking-tight mb-4">
              Shepherds&rsquo;{" "}
              <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Circle</span>
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
              For pastors and ministry leaders who shepherd the flock
            </p>
          </InView>

          <div className="grid md:grid-cols-3 gap-6">
            {shepherdsTiers.map((tier, i) => (
              <InView
                key={tier.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: i * 0.08 },
                  },
                }}
              >
                <DonationTierCard
                  {...tier}
                  ctaLabel="Become a Partner"
                  onSelect={() => handleTierSelect(tier.name, tier.amount, "one_time")}
                />
              </InView>
            ))}
          </div>

          <InView
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
            }}
          >
            <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
              Every Shepherds&rsquo; Circle partner is listed as a Founding Shepherd in the WWJD app.
            </p>
          </InView>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: Kingdom Builders                                   */}
      {/* ============================================================ */}
      <section className="py-20 px-4 bg-background border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground tracking-tight mb-4">
              Kingdom{" "}
              <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Builders</span>
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
              For churches and organizations building something that lasts
            </p>
          </InView>

          <div className="grid md:grid-cols-3 gap-6">
            {kingdomTiers.map((tier, i) => (
              <InView
                key={tier.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: i * 0.08 },
                  },
                }}
              >
                <DonationTierCard
                  {...tier}
                  ctaLabel={tier.featured ? "Partner Now" : "Become a Partner"}
                  onSelect={() => handleTierSelect(tier.name, tier.amount, "one_time")}
                />
              </InView>
            ))}
          </div>

          <InView
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
            }}
          >
            <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
              Your church could be one of the first 30 congregations to bring WWJD to their community.
            </p>
          </InView>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5: Pillars of the Movement                            */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 px-4 bg-luxury-gold/5">
        <div className="max-w-4xl mx-auto">
          <InView
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground tracking-tight mb-4">
              Pillars of the{" "}
              <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Movement</span>
            </h2>
            <p className="text-center text-muted-foreground text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
              Legacy founders who lay the foundation
            </p>
            <p className="text-center text-sm text-muted-foreground/70 mb-16 max-w-xl mx-auto italic">
              Some are called to give generously. A few are called to lay the foundation.
            </p>
          </InView>

          <div className="space-y-8">
            {pillarTiers.map((tier, i) => {
              const isCornerstone = tier.isCornerstone;
              const spotsRemaining = tier.spotsTotal - tier.spotsClaimed;
              const claimedPercent = Math.round(
                (tier.spotsClaimed / tier.spotsTotal) * 100
              );

              return (
                <InView
                  key={tier.name}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: i * 0.15 },
                    },
                  }}
                >
                  <div
                    className={cn(
                      "relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 bg-card border transition-all duration-500",
                      isCornerstone
                        ? "border-luxury-gold/50 shadow-[0_0_60px_-10px_hsl(45_92%_62%/0.2)]"
                        : "border-border hover:border-luxury-gold/30"
                    )}
                  >
                    {/* Cornerstone shimmer */}
                    {isCornerstone && (
                      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent animate-shimmer" />
                      </div>
                    )}

                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      {/* Left column */}
                      <div className="flex-1 space-y-4">
                        {/* Scarcity */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20">
                          {spotsRemaining} of {tier.spotsTotal} remaining
                        </span>

                        {/* Name */}
                        {isCornerstone ? (
                          <TextShimmer
                            as="h3"
                            className="text-2xl sm:text-3xl font-bold"
                            duration={3}
                          >
                            {tier.name}
                          </TextShimmer>
                        ) : (
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {tier.name}
                          </h3>
                        )}

                        {/* Tagline */}
                        <p className="text-muted-foreground text-lg font-medium">
                          {tier.tagline}
                        </p>

                        {/* Amount */}
                        <p
                          className={cn(
                            "text-3xl sm:text-4xl font-bold",
                            isCornerstone ? "text-luxury-gold" : "text-foreground"
                          )}
                        >
                          {tier.amountLabel}
                          <span className="text-base font-normal text-muted-foreground ml-2">
                            one-time
                          </span>
                        </p>

                        {/* Scripture */}
                        <p className="text-sm text-muted-foreground italic font-serif">
                          &ldquo;{tier.scripture}&rdquo; &mdash;{" "}
                          <span className="not-italic text-xs">{tier.scriptureRef}</span>
                        </p>

                        {/* Progress bar */}
                        <div className="max-w-xs">
                          <div className="h-1.5 rounded-full bg-border overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-luxury-gold to-luxury-copper transition-all duration-700"
                              style={{ width: `${claimedPercent}%` }}
                            />
                          </div>
                          <p className="text-xs text-muted-foreground mt-1.5">
                            {tier.spotsClaimed} partner{tier.spotsClaimed !== 1 ? "s" : ""} joined
                          </p>
                        </div>
                      </div>

                      {/* Right column: benefits */}
                      <div className="lg:w-80 space-y-5">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          What you receive
                        </p>
                        <ul className="space-y-2.5">
                          {tier.benefits.map((b, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <Check className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 pt-2">
                          {tier.hasStripeCheckout && (
                            <Button
                              variant="primary"
                              className="w-full bg-gradient-to-r from-luxury-gold to-luxury-copper text-black hover:opacity-90 border-0"
                              disabled={pillarLoading === tier.name}
                              onClick={() => handlePillarCheckout(tier)}
                            >
                              {pillarLoading === tier.name ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Creating checkout...
                                </>
                              ) : (
                                "Give Now"
                              )}
                            </Button>
                          )}
                          <Button variant="outline" className="w-full" asChild>
                            <a
                              href={`mailto:donate@wwjd.com?subject=Founding Partner Inquiry - ${encodeURIComponent(tier.name)}`}
                            >
                              Apply to Partner
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </InView>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: Custom Amount                                      */}
      {/* ============================================================ */}
      <CustomAmountSection />

      {/* ============================================================ */}
      {/* SECTION 7: Where Your Gift Goes                               */}
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
      {/* SECTION 8: FAQ                                                */}
      {/* ============================================================ */}
      <DonationFAQ />

      {/* ============================================================ */}
      {/* SECTION 9: Final CTA                                          */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 px-4 bg-background">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <InView
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              The question costs nothing.
              <br />
              <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">
                The movement needs you.
              </span>
            </h2>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Will you be one of the founding partners?
            </p>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToTiers}
                className="px-10 py-7 text-lg"
              >
                Claim Your Spot
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-7 text-lg" asChild>
                <a href="mailto:donate@wwjd.com">Contact Us</a>
              </Button>
            </div>
          </InView>

          {/* Trust badges */}
          <InView
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
            }}
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-luxury-gold" />
                501(c)(3) Non-Profit
              </span>
              <span className="hidden sm:inline text-border">&middot;</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-luxury-gold" />
                Secure Stripe Payments
              </span>
              <span className="hidden sm:inline text-border">&middot;</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-luxury-gold" />
                Cancel Anytime
              </span>
            </div>
          </InView>

          <InView
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
            }}
          >
            <p className="text-xs text-muted-foreground/60 pt-4">
              Founding Partner enrollment closes April 5, 2026
            </p>
          </InView>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donations;
