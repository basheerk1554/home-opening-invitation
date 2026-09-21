const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const animatedTitleComponent = `
import { motion } from "framer-motion";

function AnimatedTitle({ text }) {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.4 },
    },
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: 90,
      filter: "blur(10px)",
    },
  };

  return (
    <motion.h1
      className="hero-animated-title"
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: "1000px" }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block", transformOrigin: "bottom" }}>
          {letter === " " ? "\\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
`;

// Insert the component right after imports
code = code.replace('import { ScheduleCarousel } from "./ScheduleCarousel.jsx";', 'import { ScheduleCarousel } from "./ScheduleCarousel.jsx";\n' + animatedTitleComponent);

// Replace <h1>Aaradhya Nilayam</h1> with the new AnimatedTitle
code = code.replace('<h1>Aaradhya Nilayam</h1>', '<AnimatedTitle text="Aaradhya Nilayam" />');

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx updated with AnimatedTitle');
