const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Import confetti
code = code.replace('import { Fireflies, CursorTrail } from "./Magic.jsx";', 'import { Fireflies, CursorTrail } from "./Magic.jsx";\nimport confetti from "canvas-confetti";');

// In handleSubmit
const oldSubmit = `  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !wish.trim()) return;

    setWishes((previous) => [
      { name: name.trim(), message: wish.trim() },
      ...previous,
    ]);
    setCurrentWish(0);
    setSubmitted(true);
    setName("");
    setWish("");

    setTimeout(() => setSubmitted(false), 2200);
  };`;

const newSubmit = `  const handleSubmit = (event) => {
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
  };`;

code = code.replace(oldSubmit, newSubmit);

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx modified with confetti');
