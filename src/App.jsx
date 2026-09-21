import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { Fireflies, CursorTrail } from "./Magic.jsx";
import confetti from "canvas-confetti";
import { ScheduleCarousel } from "./ScheduleCarousel.jsx";

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
      transition: { type: "spring", damping: 12, stiffness: 120 },
    },
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
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
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}


const EVENT_DATE = new Date("2026-11-15T10:00:00");
const MAPS_URL = "https://maps.google.com/?cid=17933267643779665888&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYASAA&hl=en-US&source=apiv3";
const PHONE = "+91 6364469555";
const BACKGROUND_AUDIO = "/divine-song.mp3";
const FLOWER_STRING_IMAGE = "https://cdn-admin.invitationnation.in/media/hou001/assets/0a2319c0-9139-480f-8290-c67cfa0a5a7f_image.webp";
const TREE_IMAGE = "https://cdn-admin.invitationnation.in/media/hou001/assets/544cc857-ab10-4fc3-93cb-bbe75e75024b_image.webp";
const COW_IMAGE = "https://cdn-admin.invitationnation.in/media/hou001/assets/86af10c7-550e-4747-bea8-a47cf19b1cf6_image.webp";
const KALASH_IMAGE = "https://cdn-admin.invitationnation.in/media/hou001/assets/9fc6755e-f22e-454b-9a7d-44f10b764244_image.webp";
const GANESHA_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Shree_Ganesh.jpg";
const LAKSHMI_WELCOME_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Devi_Lakshmi.jpg";
const FAMILY_IMAGE = "https://cdn-admin.invitationnation.in/admin/templates/6a47a6fd99d0f228a2447ab3/39f1b4ca-2410-42d3-93a1-04c76248525f_image.jpg";

const GALLERY = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Priest_performing_Homa.jpg",
    alt: "Purohit performing homa ritual during housewarming",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Alter_Cloth_%28Toran%29%2C_Saurashtra%2C_Gujarat%2C_India%2C_20th_Century%2C_cotton%2C_metal_and_mirror_pieces._plain_weave_with_embroidery_and_mirror_work%2C_Honolulu_Academy_of_Arts.jpg",
    alt: "Traditional toran with mango leaves decorating the doorway for a housewarming",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Bright_big_flower_rangoli_kolam.jpg",
    alt: "Traditional rangoli welcoming guests into the new home",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/A_Ganesh_Puja_inside_a_home%2C_Rourkela_Eastern_India_2012.jpg",
    alt: "Indian family blessing the new home during housewarming rituals",
  },
  {
    src: "/src/assets/gallery/cow-entry.jpg",
    alt: "Cow entering the home in an auspicious housewarming ritual",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Vishnu_Puja_At_Home_-_Howrah_20170708130152.jpg",
    alt: "Family celebration at an Indian housewarming ceremony",
  },
];

const INITIAL_WISHES = [
  {
    name: "Chirag",
    message:
      "Congratulations on this wonderful milestone! May your new home be blessed with happiness, peace, prosperity, and love. Wishing your family countless beautiful moments and cherished memories together.",
  },
  {
    name: "Family & Friends",
    message:
      "Wishing you many happy memories, beautiful moments, peace, prosperity, and endless happiness in your new home.",
  },
  {
    name: "With Love",
    message:
      "May your new home always be filled with laughter, love, warmth and wonderful memories that last a lifetime.",
  },
];

const SCHEDULE = [
  { title: "Ganesha Pooja", time: "9:45 AM", icon: "kalash" },
  { title: "Havan & Aarti", time: "10:30 AM", icon: "flame" },
  { title: "Cow Welcome & Blessings", time: "11:15 AM", icon: "cow" },
  { title: "Lunch & Family Prasad", time: "12:30 PM", icon: "leaf" },
];

const RITUAL_NOTES = [
  {
    title: "Ganesh Pooja",
    text: "We begin by welcoming Ganesha into the home and seeking wisdom, peace, and auspicious beginnings for every room and every memory to come.",
  },
  {
    title: "Havan & Aarti",
    text: "The sacred fire is lit with prayers for purity, prosperity, and a home filled with warmth, gratitude, and positive energy.",
  },
  {
    title: "Cow Welcome",
    text: "With devotion and tradition, the cow is welcomed as a symbol of abundance, protection, and the blessings of the earth.",
  },
  {
    title: "Family Blessings",
    text: "With the blessings of elders and the love of our family, we invite all to share in this beginning and bless our new chapter together.",
  },
];

function pad(value) {
  return String(value).padStart(2, "0");
}

function useCountdown(targetDate) {
  const compute = () => {
    const difference = targetDate.getTime() - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      done: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(compute);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(compute()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function FlowerString() {
  return <img className="flower-string" src={FLOWER_STRING_IMAGE} alt="" aria-hidden="true" />;
}

function Tree({ className }) {
  return <img className={className} src={TREE_IMAGE} alt="" aria-hidden="true" />;
}

function Cow({ className }) {
  return <img className={className} src={COW_IMAGE} alt="" aria-hidden="true" />;
}

function Kalash() {
  return <img className="kalash" src={KALASH_IMAGE} alt="" aria-hidden="true" />;
}

function Rangoli({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="88" fill="none" stroke="#c9a227" strokeWidth="3" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="#85b52b" strokeWidth="2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="100"
          cy="42"
          rx="12"
          ry="22"
          fill="#e25d2a"
          opacity="0.85"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="18" fill="#f0c94d" />
    </svg>
  );
}

function Ganesha() {
  return <img className="ganesha" src={GANESHA_IMAGE} alt="Lord Ganesha" />;
}

function Sparkles() {
  return (
    <svg className="sparkles" viewBox="0 0 120 40" aria-hidden="true">
      {[8, 32, 56, 80, 104].map((x, i) => (
        <polygon
          key={x}
          points={`${x},4 ${x + 3},16 ${x},20 ${x - 3},16`}
          fill={i % 2 ? "#f0c94d" : "#fff7db"}
          opacity="0.9"
        />
      ))}
    </svg>
  );
}


function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-wrapper ${className} ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


function TempleBell() {
  return (
    <div className="temple-bell-wrapper">
      <div className="bell-rope"></div>
      <svg className="temple-bell" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30 70 C 30 10, 70 10, 70 70 L 90 100 L 10 100 Z" fill="url(#goldGrad)" />
        <path d="M 10 100 C 10 115, 90 115, 90 100 Z" fill="#b8860b" />
        <circle cx="50" cy="110" r="10" fill="#8b6508" />
        <path d="M 40 10 Q 50 -10 60 10" fill="none" stroke="#b8860b" strokeWidth="8" />
        <path d="M 15 80 L 85 80" stroke="#8b6508" strokeWidth="2" opacity="0.5" />
        <path d="M 20 90 L 80 90" stroke="#8b6508" strokeWidth="2" opacity="0.5" />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d99d32" />
            <stop offset="30%" stopColor="#fff9e5" />
            <stop offset="70%" stopColor="#f2c95d" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function App() {
  const timeLeft = useCountdown(EVENT_DATE);
  const [page, setPage] = useState(() =>
    window.location.hash === "#gallery" ? "gallery" : "home"
  );
  const [showIntro, setShowIntro] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const [currentWish, setCurrentWish] = useState(0);
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scheduleIndex, setScheduleIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [petalBursts, setPetalBursts] = useState([]);
    const audioRef = useRef(null);

  const eventParts = useMemo(() => {
    const day = EVENT_DATE.getDate();
    const month = EVENT_DATE.toLocaleString("en-US", { month: "long" });
    const year = EVENT_DATE.getFullYear();
    return { day, month, year };
  }, []);

  useEffect(() => {
    const onHash = () => {
      setPage(window.location.hash === "#gallery" ? "gallery" : "home");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2800);
    return () => clearTimeout(timer);
  }, []);
  // Initialize audio element (DOM) with source, looping, and volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = BACKGROUND_AUDIO;
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
  }, []);

  // Play/pause based on musicOn state
  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [musicOn]);

  const triggerPetalBurst = (x, y) => {
    const burst = Array.from({ length: 16 }, (_, index) => ({
      id: `${Date.now()}-${Math.random()}-${index}`,
      x,
      y,
      dx: (Math.random() - 0.5) * 160,
      dy: 20 + Math.random() * 140,
      rotate: Math.random() * 360,
      scale: 0.65 + Math.random() * 0.9,
      duration: 0.8 + Math.random() * 0.6,
      color:
        index % 3 === 0
          ? "linear-gradient(135deg, #ffd7d7 0%, #ffc1d8 30%, #f8ab89 100%)"
          : index % 2 === 0
            ? "linear-gradient(135deg, #ffe3a1 0%, #f2c66d 50%, #e9a64e 100%)"
            : "linear-gradient(135deg, #fcd3ee 0%, #ffb2d7 35%, #d687d9 100%)",
    }));

    setPetalBursts((previous) => [...previous, ...burst]);

    burst.forEach((petal) => {
      window.setTimeout(() => {
        setPetalBursts((previous) => previous.filter((item) => item.id !== petal.id));
      }, 1000);
    });
  };

  const goTo = (nextPage) => {
    setPage(nextPage);
    window.location.hash = nextPage === "gallery" ? "gallery" : "home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !wish.trim()) return;

    // Magical confetti blast!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f0c94d', '#e25d2a', '#85b52b']
    });

    setWishes((previous) => [
      { name: name.trim(), message: wish.trim() },
      ...previous,
    ]);
    setCurrentWish(0);
    setSubmitted(true);
    setName("");
    setWish("");

    setTimeout(() => setSubmitted(false), 2200);
  };

  const handleAiWish = () => {
    const samples = [
      "May your new home be filled with endless laughter, warm mornings, and the blessing of generations of love.",
      "Wishing you a life that glows with peace, prosperity, and beautiful memories in every corner of Aaradhya Nilayam.",
      "May the doors of your home always welcome joy, gratitude, and togetherness for every celebration yet to come.",
    ];

    const nextMessage = samples[Math.floor(Math.random() * samples.length)];
    setWish(nextMessage);
  };

  const activeWish = wishes[currentWish];
  const activeEvent = SCHEDULE[scheduleIndex];

  return (
    <div className="site">
      <Fireflies count={60} />
      <CursorTrail />
      <div className="petal-layer" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, index) => (
          <span
            key={index}
            className="petal"
            onMouseEnter={(event) => triggerPetalBurst(event.clientX, event.clientY)}
            onClick={(event) => triggerPetalBurst(event.clientX, event.clientY)}
            style={{
              left: `${(index * 13) % 100}%`,
              animationDelay: `${(index % 7) * 0.9}s`,
              animationDuration: `${7 + (index % 6)}s`,
              opacity: 0.4 + (index % 5) * 0.12,
            }}
          />
        ))}
        {petalBursts.map((petal) => (
          <span
            key={petal.id}
            className="petal-burst"
            style={{
              left: `${petal.x}px`,
              top: `${petal.y}px`,
              transform: `translate(0, 0) rotate(0deg) scale(${petal.scale})`,
              background: petal.color,
              animationDuration: `${petal.duration}s`,
              "--dx": `${petal.dx}px`,
              "--dy": `${petal.dy}px`,
              "--rot": `${petal.rotate}deg`,
            }}
          />
        ))}
      </div>
      <audio ref={audioRef} preload="auto" />
      {showIntro && (
        <div className="intro">
          <Rangoli className="intro-rangoli" />
          <Ganesha />
          <p>Shubh Griha Pravesh</p>
        </div>
      )}

      <header className="navbar">
        <button
          className={page === "home" ? "nav-link is-active" : "nav-link"}
          onClick={() => goTo("home")}
        >
          Home
        </button>
        <button
          className={page === "gallery" ? "nav-link is-active" : "nav-link"}
          onClick={() => goTo("gallery")}
        >
          Gallery
        </button>
      </header>

      {page === "home" ? (
        <main>
          <section className="hero" id="home">
            <div className="garlands" aria-hidden="true">
              <div className="garland-col">
                <FlowerString />
                <TempleBell />
              </div>
              <div className="garland-col center">
                <FlowerString />
                <FlowerString />
              </div>
              <div className="garland-col">
                <FlowerString />
                <TempleBell />
              </div>
            </div>

            <div className="hero-copy">
              <span className="eyebrow-pill">Aashirwad for a new beginning</span>
              <p className="eyebrow">with heartfelt blessings as we welcome home</p>
              <AnimatedTitle text="Aaradhya Nilayam" />
              <p className="event-date">
                <span>{eventParts.day}</span>
                <span>|</span>
                <span>{eventParts.month}</span>
                <span>|</span>
                <span>{eventParts.year}</span>
              </p>
              <div className="hero-actions">
                <a className="btn solid" href={MAPS_URL} target="_blank" rel="noreferrer">
                  Open in Maps
                </a>
                <a className="btn secondary" href="#countdown">
                  View Rituals
                </a>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <Tree className="tree tree-back tree-left tree-banana tree-banana-left" />
              <Tree className="tree tree-back tree-right tree-banana tree-banana-right" />
              <Tree className="tree tree-back tree-left" />
              <Tree className="tree tree-back tree-right" />
              <Cow className="cow cow-left" />
              <Cow className="cow cow-right" />
              <Tree className="tree tree-front tree-left" />
              <Tree className="tree tree-front tree-right" />
              <div className="kalash-wrap">
                <Kalash />
              </div>
            </div>
            <a className="scroll-hint" href="#countdown" aria-label="Scroll down">
              ⌄
            </a>
          </section>

          <section className="welcome-blessing" id="welcome">
            <Reveal>
              <div className="welcome-content">
                <div className="lakshmi-frame large">
                  <img src={LAKSHMI_WELCOME_IMAGE} alt="Lakshmi welcoming guests" />
                </div>
                <div className="welcome-text">
                  <span className="kicker">A Sacred Welcome</span>
                  <h2>Grace & Blessings</h2>
                  <p>
                    As we step into our new home, Aaradhya Nilayam, we invoke the divine presence of Goddess Lakshmi to fill these walls with peace, prosperity, and endless joy.
                  </p>
                </div>
              </div>
            </Reveal>
          </section>

          <Reveal>
            <section className="countdown" id="countdown">
            <h2>
              {timeLeft.done ? "Welcome to our home" : "Celebration starts in"}
            </h2>
            <div className="timer">
              {[
                ["Days", timeLeft.days],
                ["Hrs", timeLeft.hours],
                ["Mins", timeLeft.minutes],
                ["Secs", timeLeft.seconds],
              ].map(([label, value], index) => (
                <div className="time-unit" key={label}>
                  {index > 0 && <span className="divider" />}
                  <div>
                    <strong>{pad(value)}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          </Reveal>

          <Reveal>
            <section className="invite">
            <Rangoli className="invite-rangoli" />
            <div className="invite-card">
              <Ganesha />
              <blockquote>
                “With the grace of Ganesha, the blessings of elders, and the sacred warmth of the havan, we invite you to celebrate our Griha Pravesh and bless our new home.”
              </blockquote>
            </div>
          </section>
          </Reveal>

          <Reveal>
            <section className="ritual-journey">
            <div className="ritual-header">
              <p className="kicker">A sacred beginning</p>
              <h2>Every ritual, every blessing, every welcome</h2>
            </div>
            <div className="ritual-grid">
              {RITUAL_NOTES.map((item) => (
                <article className="ritual-card" key={item.title}>
                  <div className="ritual-mark">✦</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
          </Reveal>

          <Reveal>
            <section className="family">
            <div className="family-copy">
              <p className="kicker">Our family</p>
              <h2>With love and gratitude</h2>
              <p>
                We are a warm Indian family, rooted in tradition and guided by devotion. This new home is more than a place to live—it is a place where love, laughter, prayers, and generations of memories will take root. We invite your blessings, your presence, and your joy as we begin this sacred chapter together.
              </p>
            </div>
            <figure className="family-photo">
              <img src={FAMILY_IMAGE} alt="Indian family blessing a new home" />
            </figure>
          </section>
          </Reveal>

          <Reveal>
            <section className="venue">
            <div className="venue-ornament">
              <Sparkles />
              <div className="pin">📍</div>
              <Sparkles />
            </div>
            <p className="address">
              24, Temple Road, 4th Block, Jayanagar,
              <br />
              Bengaluru, Karnataka 560011
            </p>
            <p className="auspicious-note">Please join us for Ganesh puja, havan, aarti, and the auspicious cow welcome.</p>
            <div className="venue-actions">
              <a className="btn cream" href={MAPS_URL} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
              <a className="btn ghost" href={`tel:${PHONE.replace(/\s/g, "")}`}>
                Contact Host
              </a>
            </div>
          </section>
          </Reveal>

          <Reveal>
            <section className="schedule" id="schedule">
            <ScheduleCarousel />
          </section>
          </Reveal>

          <Reveal>
            <section className="wishes" id="gallery-wishes">
            <h2>Heartfelt wishes from family and friends</h2>
            <div className="wishes-grid">
              <article className="wish-card">
                <h3>{activeWish.name}</h3>
                <p>{activeWish.message}</p>
                <Rangoli className="wish-rangoli top" />
                <Rangoli className="wish-rangoli bottom" />
                <div className="slider">
                  <button
                    className="circle-btn"
                    onClick={() =>
                      setCurrentWish((i) => (i === 0 ? wishes.length - 1 : i - 1))
                    }
                    aria-label="Previous wish"
                  >
                    ←
                  </button>
                  <span>
                    {currentWish + 1} of {wishes.length}
                  </span>
                  <button
                    className="circle-btn"
                    onClick={() =>
                      setCurrentWish((i) => (i === wishes.length - 1 ? 0 : i + 1))
                    }
                    aria-label="Next wish"
                  >
                    →
                  </button>
                </div>
              </article>

              <form className="wish-form" onSubmit={handleSubmit}>
                <h3>Send your wishes</h3>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <textarea
                  placeholder="Your Wishes"
                  value={wish}
                  onChange={(event) => setWish(event.target.value)}
                />
                <button type="button" className="ai-btn" onClick={handleAiWish}>
                  Generate AI wishes
                </button>
                <button type="submit" className="submit-btn">
                  {submitted ? "Sent with love" : "Submit"}
                </button>
              </form>
            </div>
          </section>
          </Reveal>
        </main>
      ) : (
        <main className="gallery-page">
          <h1>Gallery</h1>
          <p>Moments from the making of our home.</p>
          <div className="masonry">
            {GALLERY.map((item, index) => (
              <button
                key={item.src}
                className="masonry-item"
                onClick={() => setLightbox(index)}
              >
                <img src={item.src} alt={item.alt} />
              </button>
            ))}
          </div>
        </main>
      )}

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={GALLERY[lightbox].src} alt={GALLERY[lightbox].alt} />
        </div>
      )}

      <div className="floaters">
        <a className="floater" href={`tel:${PHONE.replace(/\s/g, "")}`} aria-label="Call host">
          ☎
        </a>
        <button
          className={musicOn ? "floater is-on" : "floater"}
          onClick={() => setMusicOn((value) => !value)}
          aria-label={musicOn ? "Mute music" : "Play music"}
        >
          {musicOn ? "♪" : "♫"}
        </button>
      </div>

      <footer className="footer">
        <div className="footer-brand">
          <p>Housewarming Invitation website by</p>
          <strong>Invitation Nation</strong>
        </div>
        <span>Crafted with care for your forever.</span>
      </footer>
    </div>
  );
}

export default App;
