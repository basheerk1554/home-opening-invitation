const fs = require('fs');
let code = fs.readFileSync('src/App.css', 'utf8');

const oldHeroH1Regex = /\.hero h1 {[\s\S]*?}/;

const newHeroH1 = `.hero h1 {
  font-size: clamp(4.8rem, 11vw, 10rem);
  line-height: 1;
  margin: 0.5rem 0;
  background: linear-gradient(135deg, #fffaf0 0%, #f9e5a8 25%, #d99d32 50%, #fff6d9 75%, #ebd171 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 25px rgba(255, 219, 118, 0.9), 0 0 45px rgba(255, 196, 62, 0.8), 0 15px 35px rgba(59, 35, 8, 0.4);
  animation: heroGlowMagnify 3.5s ease-in-out infinite alternate;
  will-change: transform, filter;
}

@keyframes heroGlowMagnify {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(255,215,0,0.4));
  }
  100% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 25px rgba(255,215,0,0.8));
  }
}`;

code = code.replace(oldHeroH1Regex, newHeroH1);

fs.writeFileSync('src/App.css', code);
console.log('App.css modified to magnify Aaradhya Nilayam');
