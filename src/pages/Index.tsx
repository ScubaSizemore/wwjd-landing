import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { SignupForm } from "@/components/landing/SignupForm";
import { VideoSection } from "@/components/landing/VideoSection";
import { FeatureRibbon } from "@/components/landing/FeatureRibbon";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { DifferentiatorsSection } from "@/components/landing/DifferentiatorsSection";
import { WWJDEventsSection } from "@/components/landing/WWJDEventsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { Footer } from "@/components/landing/Footer";
import { BackToTopButton } from "@/components/landing/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background">
      <LandingNavBar />
      <HeroSection />
      <VideoSection />
      <SignupForm variant="primary" />
      <FeatureRibbon />
      <ProblemSection />
      <DifferentiatorsSection />
      <WWJDEventsSection />
      <HowItWorksSection />
      {/* TestimonialsSection and SocialProofStrip hidden until real testimonials are available */}
      <SignupForm variant="secondary" />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
