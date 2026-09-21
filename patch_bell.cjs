const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const templeBellComponent = `
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

function App() {`;

code = code.replace('function App() {', templeBellComponent);

const oldGarlands = `<div className="garlands" aria-hidden="true">
              <div className="garland-col">
                <FlowerString />
                <FlowerString />
                <FlowerString />
              </div>
              <div className="garland-col">
                <FlowerString />
                <FlowerString />
                <FlowerString />
              </div>
            </div>`;

const newGarlands = `<div className="garlands" aria-hidden="true">
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
            </div>`;

code = code.replace(oldGarlands, newGarlands);

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx updated with TempleBell');
