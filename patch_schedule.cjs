const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Import it
code = code.replace('import confetti from "canvas-confetti";', 'import confetti from "canvas-confetti";\nimport { ScheduleCarousel } from "./ScheduleCarousel.jsx";');

// Replace the old schedule section with the new component
const oldScheduleRegex = /<section className="schedule">[\s\S]*?<div className="schedule-card">[\s\S]*?<\/div>\s*<\/section>/;

code = code.replace(oldScheduleRegex, `<section className="schedule" id="schedule">
            <ScheduleCarousel />
          </section>`);

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx updated with ScheduleCarousel');
