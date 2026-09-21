const fs = require('fs');

const css = `
/* --- Schedule Carousel --- */
.schedule-carousel-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  text-align: center;
  position: relative;
}

.schedule-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.schedule-nav-header h2 {
  font-family: "Marck Script", cursive;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: var(--gold);
  margin: 0;
}

.nav-arrow {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: var(--gold);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(211, 167, 77, 0.3);
}

.carousel-viewport {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
}

.slide-icon-ring {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(211,167,77,0.2), rgba(211,167,77,0.05));
  border: 1px solid rgba(211,167,77,0.4);
  display: grid;
  place-items: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.slide-icon {
  color: var(--gold);
}

.carousel-slide h3 {
  font-family: "Marcellus", serif;
  font-size: 1.8rem;
  color: var(--cream);
  margin-bottom: 0.5rem;
}

.slide-time {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: rgba(211, 167, 77, 0.15);
  color: var(--lime);
  border-radius: 99px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.slide-desc {
  font-size: 1.15rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-width: 80%;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 2rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
}

.dot.active {
  background: var(--gold);
  width: 24px;
  border-radius: 4px;
}
`;

fs.appendFileSync('src/App.css', css);
console.log('App.css updated with ScheduleCarousel styles');
