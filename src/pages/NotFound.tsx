import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LandingNavBar } from "@/components/landing/LandingNavBar";
import { Footer } from "@/components/landing/Footer";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found — WWJD.com";
    // Tell Google not to index 404 pages
    let meta = document.querySelector<HTMLMetaElement>("meta[name='robots']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex, nofollow";
    return () => {
      if (meta) meta.content = "index, follow";
    };
  }, []);

  return (
    <div className="min-h-dvh bg-background flex flex-col">
      <LandingNavBar />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <p className="text-7xl font-bold text-muted-foreground/20">404</p>
          <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
          <p className="text-muted-foreground">
            This page doesn&rsquo;t exist or has moved. Head back to the homepage.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Back to WWJD.com
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
