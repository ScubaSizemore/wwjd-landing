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
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <span className="text-xl font-bold text-white">W</span>
              </div>
              <span className="text-xl font-bold text-foreground">WWJD.com</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              WWJD Global Outreach, Inc.
            </p>
            <p className="text-sm text-muted-foreground">
              A Registered 501(c)(3) Non-Profit Organization
            </p>
            <p className="text-sm text-muted-foreground italic mt-1">
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
