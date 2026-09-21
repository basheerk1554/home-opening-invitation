const fs = require('fs');
let code = fs.readFileSync('src/App.css', 'utf8');

const newCss = `
/* --- Reveal Animations --- */
.reveal-wrapper {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1s ease-out, transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.reveal-wrapper.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* --- Welcome Blessing Section --- */
.welcome-blessing {
  padding: 8rem 6vw;
  background: linear-gradient(180deg, var(--ivory) 0%, #fefcf5 100%);
  color: var(--leaf-deep);
  position: relative;
  overflow: hidden;
}

.welcome-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.lakshmi-frame.large {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 50px rgba(32, 22, 5, 0.18);
  border: 1px solid rgba(211, 167, 77, 0.4);
}

.lakshmi-frame.large::after {
  content: "";
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 0 12px rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  pointer-events: none;
}

.lakshmi-frame.large img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
}

.lakshmi-frame.large:hover img {
  transform: scale(1.05);
}

.welcome-text .kicker {
  display: block;
  font-family: "Marcellus", serif;
  color: var(--bronze);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.welcome-text h2 {
  font-family: "Marck Script", cursive;
  font-size: clamp(3rem, 5vw, 4.5rem);
  color: var(--leaf);
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.welcome-text p {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #3b4231;
}

@media (max-width: 768px) {
  .welcome-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
`;

fs.appendFileSync('src/App.css', newCss);
console.log('App.css appended');
