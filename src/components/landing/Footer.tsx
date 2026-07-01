import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-foreground">WWJD Global Outreach, Inc.</span>
            <p className="text-muted-foreground text-xs mt-1">
              A Registered 501(c)(3) Non-Profit Organization
            </p>
            <p className="text-muted-foreground text-sm mt-2 italic">
              "Ask the Question, Live the Answer"™
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/privacy"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/eula"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              EULA
            </Link>
            <Link
              to="/donations"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Support Us
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WWJD Global Outreach, Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for the Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
};
