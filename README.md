# 🌟 Shahriar Ahmed Riaz — Official Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify)](https://www.netlify.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern, high-performance, and visually captivating frontend developer portfolio built with **Next.js (App Router, Pure JSX)**, **Tailwind CSS v4**, **Font Awesome**, **AOS**, and **React-Toastify**. Designed to be 100% responsive, accessible, and ready for deployment on Netlify.

---

## 🔗 Live Deployments & Key Links

- **🌐 Live Portfolio:** [shahriarahmedriaz.netlify.app](https://shahriarahmedriaz.netlify.app/)
- **🐙 GitHub Repository:** [github.com/ahmed-shahriar04/portfolio_v2](https://github.com/ahmed-shahriar04/portfolio_v2)
- **📄 Official Resume (Google Drive):** [View Resume PDF](https://drive.google.com/file/d/1JJNdmLNrsG5FBCwKZz33C0BSi0lOK3CP/view?usp=sharing)
- **💼 LinkedIn Profile:** [linkedin.com/in/shahriarahmedriaz](https://www.linkedin.com/in/shahriarahmedriaz/)

---

## 🎯 Task Requirements Checklist (12/12 Completed)

| # | Requirement | Implementation Details | Status |
|---|---|---|:---:|
| 1 | **Responsive Navigation Bar** | Fixed glassmorphism navbar with smooth scroll anchors, active section indicator, theme toggle, and mobile drawer. | ✅ Completed |
| 2 | **Designation & Professional Photo** | Frontend Web Developer designation with typing animation, official professional portrait with 3D gradient glowing orbits. | ✅ Completed |
| 3 | **Resume Download / View Button** | One-click button in Hero, Navbar, and Contact opening an embedded interactive Google Drive PDF viewer and direct download. | ✅ Completed |
| 4 | **Verified Social Links** | High-contrast icon buttons linking to GitHub and LinkedIn profiles with modern hover effects. | ✅ Completed |
| 5 | **About Me & Origin Story** | Journey from Class 8 web curiosity to 3rd-year CS at UIU, what I love building, work philosophy, and personal hobbies. | ✅ Completed |
| 6 | **Skills & Proficiencies** | Categorized technical capabilities (Frontend, Core CS, Tools) in graphical cards with gradient progress meters and certifications. | ✅ Completed |
| 7 | **Educational Qualifications** | Detailed United International University (UIU) B.Sc in CSE milestone with core coursework, timelines, and credentials. | ✅ Completed |
| 8 | **Experience & Practice** | Professional project engineering track, algorithmic problem-solving practice, and open-source contributions. | ✅ Completed |
| 9 | **Featured Projects (At Least 3)** | Card showcase featuring **FitLog**, **FIFA World Cup 2026**, and **Chakri Lagbe** with "View More / Details" modals and case studies. | ✅ Completed |
| 10 | **Contact Information** | Direct email, professional LinkedIn connect card, Dhaka location, and validated interactive contact form with Toastify. | ✅ Completed |
| 11 | **Elegant Footer** | High-contrast footer with brand identity, academic affiliation at UIU, quick navigation, and smooth scroll-to-top button. | ✅ Completed |
| 12 | **Responsive & Dual Theme UI** | 100% pixel-perfect responsiveness across mobile, tablet, and desktop viewports with seamless Dark & Light theme modes. | ✅ Completed |

---

## 🚀 Featured Projects Showcase

### 1. 🏋️‍♂️ [FitLog – Workout & Routine Tracker](https://fitlog-library.netlify.app/)
- **Tech Stack:** React.js, Tailwind CSS, JavaScript (ES6+), Netlify
- **GitHub Client:** [ahmed-shahriar04/b14-a06](https://github.com/ahmed-shahriar04/b14-a06)
- **Key Features:** Interactive fitness tracking web application designed to help users log workouts, discover exercises, and maintain health routines with persistent state management.

### 2. ⚽ [FIFA World Cup 2026 – Event Landing Page](https://ahmed-shahriar04.github.io/fifa2026-landing_page/)
- **Tech Stack:** HTML5, CSS3, JavaScript (ES6+), GitHub Pages
- **GitHub Client:** [ahmed-shahriar04/fifa2026-landing_page](https://github.com/ahmed-shahriar04/fifa2026-landing_page)
- **Key Features:** High-energy tournament showcase featuring synchronized live countdown clock to kickoff, match schedule previews, and fluid animations.

### 3. 💼 [Chakri Lagbe – Career & Job Portal](https://ahmed-shahriar04.github.io/chakri_lagbe-landing-page/)
- **Tech Stack:** HTML5, CSS3, JavaScript (ES6+), Responsive UI, GitHub Pages
- **GitHub Client:** [ahmed-shahriar04/chakri_lagbe-landing-page](https://github.com/ahmed-shahriar04/chakri_lagbe-landing-page)
- **Key Features:** Streamlined recruitment portal frontend with dynamic job category exploration, featured hiring company spotlight, and responsive job cards.

---

## 🛠️ Technology Stack

- **Core Framework:** Next.js 16.4.3 (App Router, JavaScript/JSX)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, PostCSS, Glassmorphism
- **Iconography:** Font Awesome 6.5.1 CDN & React Icons
- **Typography:** Outfit (Headings), Plus Jakarta Sans (Body), Fira Code (Monospace)
- **Animations:** AOS (Animate On Scroll), GSAP, CSS Keyframe Orbits
- **Notifications:** React-Toastify
- **Celebration Effects:** Canvas-Confetti
- **Deployment Target:** Netlify (`output: 'export'`, `trailingSlash: true`)

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js (v18.18.0 or higher recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/ahmed-shahriar04/portfolio_v2.git
cd portfolio_v2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production (Static HTML export for Netlify)
```bash
npm run build
```
The production-ready static export will be generated in the `out/` directory.

---

## 🌐 Netlify Deployment Configuration

The repository includes a pre-configured `netlify.toml` file:

```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

To deploy:
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Select the `main` branch.
3. Build command: `npm run build`
4. Publish directory: `out`
5. Click **Deploy Site**!

---

## 👨‍💻 Author

**Shahriar Ahmed Riaz**  
- **Role:** Frontend Web Developer
- **University:** United International University (UIU), Dhaka, Bangladesh
- **Degree:** B.Sc in Computer Science & Engineering (3rd Year)
- **GitHub:** [@ahmed-shahriar04](https://github.com/ahmed-shahriar04)
- **LinkedIn:** [shahriarahmedriaz](https://www.linkedin.com/in/shahriarahmedriaz/)
- **Email:** [shahriarahmedriaz04@gmail.com](mailto:shahriarahmedriaz04@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
