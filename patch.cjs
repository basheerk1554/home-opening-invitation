const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

const revealComponent = `
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
      className={\`reveal-wrapper \${className} \${isVisible ? 'is-visible' : ''}\`}
      style={{ transitionDelay: \`\${delay}ms\` }}
    >
      {children}
    </div>
  );
}

function App() {`;

code = code.replace('function App() {', revealComponent);
code = code.replace(/const \[scrollProgress, setScrollProgress\] = useState\(0\);\n/, '');

const scrollEffect = /\s*useEffect\(\(\) => {\s*const updateScrollProgress = \(\) => {[\s\S]*?window\.removeEventListener\("scroll", updateScrollProgress\);\s*}, \[\]\);\n/;
code = code.replace(scrollEffect, '');

const oldLakshmi = /\s*<div\s*className="lakshmi-welcome"[\s\S]*?Welcome home with Lakshmi’s blessings<\/p>\s*<\/div>/;
code = code.replace(oldLakshmi, '');

const newWelcomeSection = `          </section>

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

          <section className="countdown" id="countdown">`;

code = code.replace(`          </section>

          <section className="countdown" id="countdown">`, newWelcomeSection);

const sections = ['countdown', 'invite', 'ritual-journey', 'family', 'venue', 'schedule'];
sections.forEach(sec => {
  const regex = new RegExp(`(<section className="${sec}"[^>]*>[\\s\\S]*?<\\/section>)`);
  code = code.replace(regex, '<Reveal>\n            $1\n          </Reveal>');
});

code = code.replace(/(<section className="wishes" id="gallery-wishes">[\s\S]*?<\/section>)/, '<Reveal>\n            $1\n          </Reveal>');

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx modified');
