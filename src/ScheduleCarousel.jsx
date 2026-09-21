import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame, Leaf, Home, Sparkles } from "lucide-react";

const SCHEDULE = [
  { title: "Ganesha Pooja", time: "9:45 AM", icon: Sparkles, desc: "Invoking Lord Ganesha for auspicious beginnings and removal of all obstacles." },
  { title: "Havan & Aarti", time: "10:30 AM", icon: Flame, desc: "Sacred fire ritual to purify the space and invite positive, divine energy." },
  { title: "Cow Welcome & Blessings", time: "11:15 AM", icon: Home, desc: "Traditional welcoming of the cow (Gau Mata) to bring prosperity and abundance." },
  { title: "Lunch & Family Prasad", time: "12:30 PM", icon: Leaf, desc: "Join us for a grand traditional feast and receive the divine blessings." },
];

export function ScheduleCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev === SCHEDULE.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? SCHEDULE.length - 1 : prev - 1));
  };

  const active = SCHEDULE[index];
  const Icon = active.icon;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <div className="schedule-carousel-container">
      <div className="schedule-nav-header">
        <button onClick={prev} className="nav-arrow" aria-label="Previous">
          <ChevronLeft size={32} />
        </button>
        <h2>Sacred Schedule</h2>
        <button onClick={next} className="nav-arrow" aria-label="Next">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="carousel-viewport">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="carousel-slide"
          >
            <div className="slide-icon-ring">
              <Icon size={48} className="slide-icon" strokeWidth={1.5} />
            </div>
            <h3>{active.title}</h3>
            <span className="slide-time">{active.time}</span>
            <p className="slide-desc">{active.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="carousel-dots">
        {SCHEDULE.map((_, i) => (
          <div key={i} className={`dot ${i === index ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}
