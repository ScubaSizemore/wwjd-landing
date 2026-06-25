import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandText } from '@/components/layout/BrandText';
import { cn } from '@/lib/utils';

const APP_STORE_URL = 'https://apps.apple.com/us/app/wwjd-com-super-app/id6764636824';

interface NavItem {
  label: string;
  sectionId?: string;
  href?: string;
}

const navItems: NavItem[] = [
  { label: 'Features', sectionId: 'features-section' },
  { label: 'How It Works', sectionId: 'how-it-works-section' },
  { label: 'The Book', href: '/book' },
  { label: 'Donate', href: '/donations' },
];

export const LandingNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
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

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer')}
            >
              <Download className="w-4 h-4 mr-1.5" />
              Download Now
            </Button>
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
              <div className="pt-2 px-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer')}
                >
                  <Download className="w-4 h-4 mr-1.5" />
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
