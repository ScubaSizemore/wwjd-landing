import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandText } from '@/components/layout/BrandText';
import { cn } from '@/lib/utils';

const APP_STORE_URL = 'https://apps.apple.com/us/app/wwjd-com-super-app/id6764636824';
const WEB_APP_URL = 'https://app.wwjd.com';

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
    <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067L2.463 23.988c.32.054.646.005.94-.175l13.298-7.53-3.157-3.227z" />
  </svg>
);

interface NavItem {
  label: string;
  sectionId?: string;
  href?: string;
}

const navItems: NavItem[] = [
  { label: 'Features', sectionId: 'features-section' },
  { label: 'How It Works', sectionId: 'how-it-works-section' },
  { label: 'Donate', href: '/donations' },
  { label: 'Contact', href: '/contact' },
];

export const LandingNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsAppDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: NavItem) => {
    if (item.href) {
      navigate(item.href);
    } else if (item.sectionId) {
      scrollToSection(item.sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <BrandText />

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className={cn(
                  "text-sm text-muted-foreground hover:text-primary transition-colors relative group",
                  item.href && location.pathname === item.href && "text-primary"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Get the App dropdown */}
          <div className="hidden md:flex items-center" ref={dropdownRef}>
            <div className="relative">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsAppDropdownOpen(!isAppDropdownOpen)}
                className="flex items-center gap-1.5"
              >
                Get the App
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isAppDropdownOpen && "rotate-180")} />
              </Button>

              {isAppDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 rounded-xl bg-card border border-border shadow-luxury overflow-hidden py-1">
                  {/* iOS App Store */}
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsAppDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors"
                  >
                    <AppleLogo />
                    <div className="text-left">
                      <div className="text-sm font-semibold text-foreground">iOS App Store</div>
                      <div className="text-xs text-muted-foreground">Download now</div>
                    </div>
                  </a>

                  {/* Google Play */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.wwjd.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsAppDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors"
                  >
                    <GooglePlayLogo />
                    <div className="text-left">
                      <div className="text-sm font-semibold text-foreground">Google Play</div>
                      <div className="text-xs text-muted-foreground">Download now</div>
                    </div>
                  </a>

                  <div className="border-t border-border/50 my-1" />

                  {/* Web App */}
                  <a
                    href={WEB_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsAppDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors"
                  >
                    <Globe className="w-4 h-4 shrink-0 text-muted-foreground" />
                    <div className="text-left">
                      <div className="text-sm font-medium text-muted-foreground">Use in Browser</div>
                      <div className="text-xs text-muted-foreground/60">app.wwjd.com</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item)}
                  className="py-2 px-4 text-left text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2 px-4 space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1 pb-1">Get the App</p>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 bg-foreground text-background px-4 py-3 rounded-xl w-full"
                >
                  <AppleLogo />
                  <span className="text-sm font-semibold">Download on the App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.wwjd.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 bg-muted/20 text-foreground px-4 py-3 rounded-xl w-full border border-border/30"
                >
                  <GooglePlayLogo />
                  <span className="text-sm font-semibold">Download on Google Play</span>
                </a>
                <button
                  onClick={() => { window.open(WEB_APP_URL, '_blank', 'noopener,noreferrer'); setIsMobileMenuOpen(false); }}
                  className="flex items-center gap-3 text-muted-foreground/70 px-4 py-2 text-sm w-full"
                >
                  <Globe className="w-4 h-4" />
                  Use in Browser (app.wwjd.com)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
