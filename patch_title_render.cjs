const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const oldChild = `  const child = {
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
  };`;

const newChild = `  const child = {
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
  };`;

code = code.replace(oldChild, newChild);
fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx fixed rendering artifacts');
