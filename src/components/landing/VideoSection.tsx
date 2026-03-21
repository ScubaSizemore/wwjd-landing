import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { InView } from "@/components/ui/in-view";

const VIDEO_ID = "rLaJYErwC-E";
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-section" className="pt-2 pb-12 sm:pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            See What We're Building
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A Christ-centered platform for the whole family.
          </p>
        </div>

        <InView
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.15 } },
          }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-luxury border border-white/10">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
                title="WWJD.com Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                onClick={() => setIsPlaying(true)}
                className="group relative w-full h-full cursor-pointer bg-black"
                aria-label="Play video"
              >
                <img
                  src={THUMBNAIL_URL}
                  alt="WWJD.com video preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
                {/* Play button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-luxury transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-zinc-900 ml-1" fill="currentColor" />
                  </div>
                </motion.div>
              </button>
            )}
          </div>
        </InView>
      </div>
    </section>
  );
};
