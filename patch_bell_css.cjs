const fs = require('fs');

const css = `
/* --- Temple Bells --- */
.temple-bell-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform-origin: top center;
  cursor: pointer;
  z-index: 10;
  margin-top: -15px; /* overlap slightly with the flower string */
}

.temple-bell-wrapper:hover {
  animation: bell-swing 1.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}

@keyframes bell-swing {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(25deg); }
  40% { transform: rotate(-20deg); }
  60% { transform: rotate(10deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

.bell-rope {
  width: 4px;
  height: 25px;
  background: linear-gradient(to right, #8b6508, #f2c95d, #8b6508);
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.temple-bell {
  width: 70px;
  height: 84px;
  filter: drop-shadow(0 12px 18px rgba(30, 46, 17, 0.5));
}
`;

fs.appendFileSync('src/App.css', css);
console.log('App.css updated with TempleBell styles');
