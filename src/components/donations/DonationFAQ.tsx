import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, WWJD Global Outreach, Inc. is a registered 501(c)(3) non-profit organization. You will receive a tax-deductible receipt via email for every donation.",
  },
  {
    question: "Can I change or cancel my recurring donation?",
    answer:
      "Yes, anytime. Every receipt email includes a link to the Stripe customer portal where you can update your payment method, change your amount, or cancel.",
  },
  {
    question: "What's the difference between this and in-app donations?",
    answer:
      'In-app donations ($1.99\u2013$20/mo) unlock premium app features for individual users. Founding Partner gifts are larger commitments that fund the mission directly \u2014 platform development, content creation, and global outreach.',
  },
  {
    question: "Can I make a one-time gift?",
    answer:
      'Yes. Use the custom amount section above and toggle to "One-Time." Legacy-level gifts (The Twelve, The Upper Room, The Cornerstone) are also one-time commitments.',
  },
  {
    question: "How are funds used?",
    answer:
      "100% of donations fund platform development, content creation, church partnerships, and taking WWJD to families worldwide. We publish annual impact reports for all Founding Partners.",
  },
  {
    question: "I represent a church \u2014 how do we get started?",
    answer:
      "Choose a Kingdom Builder tier above, or email donate@wwjd.com for custom church partnerships. We\u2019ll walk you through onboarding, branded community spaces, and everything your congregation needs.",
  },
];

export const DonationFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="italic text-gradient-luxury pr-1 pb-1 inline-block">Questions</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Everything you need to know about giving.
          </p>
        </InView>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <InView
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35, delay: i * 0.05 },
                },
              }}
            >
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left text-foreground font-medium hover:bg-muted/30 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};
