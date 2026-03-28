import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/ui/in-view";

export const BookBanner = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <div className="relative rounded-2xl sm:rounded-3xl border border-[#C8A961]/20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 sm:p-8 md:p-10 overflow-hidden">
            {/* Gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A961] to-transparent" />
            {/* Subtle glow */}
            <div className="absolute -top-20 right-10 w-40 h-40 bg-[#C8A961]/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* Book Cover Thumbnail */}
              <Link to="/book" className="shrink-0">
                <img
                  src="/book-cover.png"
                  alt="In His Steps — WWJD Movement Edition"
                  className="w-28 sm:w-32 md:w-36 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition-transform"
                />
              </Link>

              {/* Text + CTAs */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[#C8A961] text-xs font-bold uppercase tracking-widest mb-2">
                  Free Download
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                  Get the Book That Started WWJD
                </h3>
                <p className="text-white/60 text-sm sm:text-base mb-5 max-w-lg">
                  <em>In His Steps</em> — republished with modern commentary for every chapter. 115,000 words. 31 chapters. Yours free.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="sm"
                    asChild
                    className="px-6 py-5"
                  >
                    <a href="/In-His-Steps.epub" download>
                      <Download className="w-4 h-4 mr-2" />
                      Download EPUB
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="px-6 py-5 text-white/70 hover:text-white"
                  >
                    <Link to="/book">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};
