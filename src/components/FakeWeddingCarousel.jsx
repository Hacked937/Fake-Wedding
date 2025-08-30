import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Local image imports
import img1 from "../assets/Photo1.png";
import img2 from "../assets/Photo2.png";
import img3 from "../assets/photo3.avif";
import img4 from "../assets/Photo4.jpg";

const images = [
  { url: img1},
  { url: img2},
  { url: img3},
  { url: img4},
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

export default function EventCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (dir) => {
    setIndex(([prev]) => [(prev + dir + images.length) % images.length, dir]);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => paginate(1), 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[400px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[index].url}
            src={images[index].url}
            alt={images[index].caption}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white text-center py-6">
        <p className="text-xl font-semibold mb-2">{images[index].caption}</p>
        <p className="text-sm opacity-90">GoCrazy Events - Your Trusted Event Partner</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl "
      >
        ‹
      </button>
      <button
        onClick={() => paginate(1)}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl "
      >
        ›
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 w-full flex justify-center gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white shadow-lg" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
