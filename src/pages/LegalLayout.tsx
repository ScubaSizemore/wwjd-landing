import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { Footer } from "@/components/landing/Footer";

interface LegalLayoutProps {
  title: string;
  date: string;
  children: ReactNode;
}

const LegalLayout = ({ title, date, children }: LegalLayoutProps) => {
  useEffect(() => {
    document.title = `${title} — WWJD.com`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-dvh bg-background">
      <LandingNavBar />
      <main className="max-w-3xl mx-auto px-4 pt-24 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground mb-10">Effective Date: {date}</p>
        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-accent-primary">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
