const fs = require('fs');

const magicCss = `
/* --- Magical Fireflies --- */
.fireflies-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
}

.firefly {
  position: absolute;
  background: radial-gradient(circle, #ffeaa7 0%, rgba(255, 234, 167, 0.4) 40%, transparent 80%);
  border-radius: 50%;
  filter: drop-shadow(0 0 8px #ffdf00);
  opacity: 0;
  animation: float-firefly infinite ease-in-out alternate;
}

@keyframes float-firefly {
  0% {
    transform: translate(0, 0) scale(0.8);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  50% {
    transform: translate(40px, -60px) scale(1.2);
    opacity: 1;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    transform: translate(-30px, -100px) scale(0.9);
    opacity: 0;
  }
}

/* --- Magical Cursor Trail --- */
.cursor-trail-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
}

.cursor-sparkle {
  position: absolute;
  pointer-events: none;
  animation: sparkle-fade 0.8s forwards ease-out;
  filter: drop-shadow(0 0 6px rgba(255,215,0,0.8));
}

@keyframes sparkle-fade {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.5) rotate(90deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(0) rotate(180deg);
    opacity: 0;
  }
}
`;

fs.appendFileSync('src/App.css', magicCss);
console.log('App.css appended with magic');
