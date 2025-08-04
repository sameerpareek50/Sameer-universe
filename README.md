# Interactive 3D Universe Portfolio

This project is an interactive 3D portfolio that visualizes a resume or CV as a solar system, with planets representing different categories (Education, Experience, Projects, etc.) and sub-planets (moons) for detailed items. It is built as a single-page application using modern web technologies.

---

## Features

- **3D Solar System Visualization:** Each planet represents a section of the portfolio (Education, Experience, Projects, etc.).
- **Sub-Planets (Moons):** Clickable planets can reveal their own orbiting sub-planets for detailed breakdowns (e.g., individual projects or experiences).
- **Sidebar Information:** Clicking a planet or sub-planet opens a sidebar with detailed information.
- **Responsive & Animated:** Smooth camera transitions, animated orbits, and interactive highlights.
- **Modular & Data-Driven:** All content is managed via a single data object, making it easy to update or extend.
- **Scroll-Activated Universe:** The 3D universe appears only when the user scrolls to the relevant section.

---

## Technologies Used

- **Three.js:** For 3D rendering and animation.
- **Tailwind CSS:** For rapid, utility-first styling.
- **GSAP (GreenSock Animation Platform):** For smooth camera and UI animations.
- **Vanilla JavaScript:** For application logic and state management.

---

## File Structure

```
.
├── index.html         # Main HTML structure and script includes
├── style.css          # Custom CSS styles (in addition to Tailwind)
├── script.js          # Three.js scene setup, planet creation, animation, interaction, and data
├── assets/            # Images (e.g., sun texture, logos)
└── README.md
```

---

## How It Works

- The main solar system is rendered using Three.js, with each planet's appearance and orbit defined in a data object.
- Planets with sub-planets (e.g., Projects, Experience, Certificates, Education) open a new "mini solar system" when clicked, displaying their moons.
- Clicking any celestial body opens a sidebar with detailed information.
- The 3D universe only appears when the user scrolls to the relevant section and hides when scrolled away.

---

## Customization

### Adding a New Planet

1. **Edit `universeData` in `script.js`:**  
   Add a new object to the `planets` array with a `name` and `content` (or `moons` for sub-planets).

2. **Edit `planetInfo` in `script.js`:**  
   Add a corresponding entry for color, size, and orbit radius.  
   Ensure the order matches the `planets` array.

### Adding a Sub-Planet (Moon)

- Add an object to the `moons` array of the relevant planet in `universeData` in `script.js`.

---

## Credits

- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)

