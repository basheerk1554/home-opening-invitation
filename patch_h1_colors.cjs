const fs = require('fs');
let code = fs.readFileSync('src/App.css', 'utf8');

const oldHeroH1Regex = /\.hero h1 {[\s\S]*?@keyframes heroGlowMagnify {[\s\S]*?}/;

const newHeroH1 = `.hero h1 {
  font-size: clamp(4.8rem, 11vw, 10rem);
  line-height: 1;
  margin: 0.5rem 0;
  
  background: linear-gradient(
    to right, 
    #fffaf0, #f2c95d, #d99d32, #ff7e5f, #ffb88c, #d99d32, #f2c95d, #fffaf0
  );
  background-size: 300% 100%;
  
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  text-shadow: 0 0 35px rgba(255, 219, 118, 0.5);
  
  animation: heroGlowMagnify 4s ease-in-out infinite alternate, colorShift 8s linear infinite;
  will-change: transform, background-position;
}

@keyframes colorShift {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

@keyframes heroGlowMagnify {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(255,215,0,0.3));
  }
  100% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 25px rgba(255,100,50,0.6));
  }
}`;

code = code.replace(oldHeroH1Regex, newHeroH1);
fs.writeFileSync('src/App.css', code);
console.log('App.css updated with shifting colors');
