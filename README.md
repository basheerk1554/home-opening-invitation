# 🏡 Home Opening Ceremony Invitation

> A traditional and interactive digital invitation website created for a **Griha Pravesh / Home Opening Ceremony**, designed to share the celebration details with family and friends through an elegant web experience.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite\&logoColor=white)](https://vite.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-0055FF)](https://motion.dev/)

## 🌸 About the Project

This project is a **digital home-opening invitation website** created to provide a more engaging alternative to a traditional invitation card.

The website combines a traditional Indian ceremonial theme with modern web interactions, animations, visual effects, a countdown timer, event schedule, gallery, background music, and interactive invitation elements.

The experience is designed around the theme of **a sacred new beginning**, with visual elements such as flowers, rangoli, temple bells, Ganesha, Lakshmi, kalash, cows, and other ceremonial motifs.

---

## ✨ Features

### 🪔 Interactive Home Page

* Traditional Indian-inspired visual theme
* Hero section with ceremonial decorations
* Griha Pravesh invitation message
* Smooth section-based navigation
* Animated visual elements
* Scroll-based reveal animations

### ⏳ Event Countdown

A live countdown displays the remaining time until the celebration.

Once the countdown reaches the event time, the message changes to indicate that guests are welcome to the celebration.

### 🌺 Sacred Welcome Section

The invitation introduces the new home **Aaradhya Nilayam** with a blessing-themed welcome section inspired by Goddess Lakshmi.

### 🕉️ Ritual Journey

The website presents the ceremonial journey and highlights the significance of the rituals associated with the home-opening ceremony.

### 📅 Interactive Sacred Schedule

The event schedule is presented through an animated carousel.

Users can navigate between different ceremony activities using previous/next controls and animated transitions.

### 📍 Venue & Contact

The invitation provides:

* Venue information
* Location details
* Google Maps navigation
* Contact-host action

### 🎵 Background Music

The website includes optional background devotional music.

Visitors can toggle the music using the floating music control.

### 🎉 Celebration Effects

Interactive celebration effects are used throughout the experience, including:

* Confetti effects
* Falling/petal-style bursts
* Fireflies
* Cursor sparkle effects
* Animated decorative elements

### 💌 Wishes Section

Visitors can submit their name and a personal wish/message for the family.

Submitting a wish triggers a celebratory confetti effect.

### 🖼️ Interactive Gallery

A separate gallery view showcases moments from the making of the home.

The gallery includes:

* Masonry-style image layout
* Click-to-view images
* Lightbox image preview
* Navigation between Home and Gallery

### 📱 Floating Actions

Floating controls provide quick access to:

* Contacting the host
* Playing or muting background music

---

## 🛠️ Tech Stack

| Technology          | Purpose                                       |
| ------------------- | --------------------------------------------- |
| **React.js**        | Front-end UI development                      |
| **Vite**            | Development server and production build       |
| **JavaScript**      | Application logic and interactions            |
| **CSS3**            | Styling, layout, animations and visual design |
| **Framer Motion**   | Component and carousel animations             |
| **Canvas Confetti** | Celebration effects                           |
| **Lucide React**    | Interface icons                               |
| **HTML5 Audio**     | Background music                              |

The project uses React 19 with Vite and includes Framer Motion, Canvas Confetti and Lucide React as its main runtime dependencies.

---

## 📂 Project Structure

```text
home-opening-invitation/
│
├── public/
│   ├── divine-song.mp3
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── gallery/
│   │   │   ├── celebration.jpg
│   │   │   ├── cow-entry.jpg
│   │   │   ├── cow.jpg
│   │   │   ├── family.jpg
│   │   │   ├── havan.jpg
│   │   │   ├── puja.jpg
│   │   │   └── rangoli.jpg
│   │   │
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── Magic.jsx
│   ├── ScheduleCarousel.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Clone the Repository

```bash
git clone https://github.com/basheerk1554/home-opening-invitation.git
```

### Navigate to the Project

```bash
cd home-opening-invitation
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

### Lint

```bash
npm run lint
```

Runs Oxlint against the project.

---

## 🎨 Design & Interaction

The design combines **traditional Indian ceremonial aesthetics** with modern web technologies.

Key visual concepts include:

* 🌸 Floral decorations
* 🪔 Temple-inspired elements
* 🕉️ Ganesha and Lakshmi imagery
* 🪷 Rangoli-inspired patterns
* 🐄 Sacred cow illustrations
* ✨ Sparkle and firefly effects
* 🌺 Petal animations
* 🎉 Celebration effects
* 🎵 Devotional background music

The application also uses animated reveals and transitions to make the invitation feel more like an interactive experience rather than a static webpage.

---

## 🧩 Main Components

### `App.jsx`

The main application component manages:

* Home and Gallery navigation
* Countdown timer
* Music state
* Wishes
* Gallery/lightbox state
* Interactive effects
* Invitation sections
* Floating controls

The application switches between the Home and Gallery experiences using the URL hash.

### `ScheduleCarousel.jsx`

Responsible for the interactive **Sacred Schedule** section.

It uses Framer Motion to animate the transition between ceremony activities.

### `Magic.jsx`

Contains visual effects such as:

* Fireflies
* Cursor sparkle trail
* Decorative interactive effects

The cursor effect dynamically creates and removes sparkle particles as the pointer moves.

---

## 🌐 Live Demo

**Coming soon**

The project will be deployed using a free hosting platform for evaluation.

---

## 💼 Internship Assignment

This project was developed as part of the **Front-End Web Development Intern assignment for Code Nimbus Solutions**.

The assignment required recreating the provided website using **React.js**, with emphasis on:

* Visual accuracy
* Overall theme
* Element placement
* Design
* Animations
* Desktop-oriented presentation

---

## 👨‍💻 Developer

**Basheer K**

GitHub:
https://github.com/basheerk1554

---

## 📄 License

This project was created for educational and internship-assignment purposes.
