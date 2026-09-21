const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Import
code = code.replace('import "./App.css";', 'import "./App.css";\nimport { Fireflies, CursorTrail } from "./Magic.jsx";');

// Inject into App component
const appStart = 'function App() {';
const appReturn = 'return (\n    <div className="site">';

code = code.replace(appReturn, `return (
    <div className="site">
      <Fireflies count={60} />
      <CursorTrail />`);

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx modified with magic components');
