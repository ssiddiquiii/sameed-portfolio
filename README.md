# Sameed Siddiqui — Portfolio

<div align="center">

![Status](https://img.shields.io/badge/Status-Live-34D399?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-60A5FA?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-F59E0B?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3-60A5FA?style=for-the-badge&logo=tailwindcss)

**MERN Stack Developer · Karachi, Pakistan**

[🌐 Live Site](https://samedsiddiqui.me) · [🐙 GitHub](https://github.com/ssiddiquiii) · [📧 Contact](mailto:sameed@samedsiddiqui.me)

</div>

---

## About

Personal portfolio website showcasing my services, projects, and engineering process as a MERN Stack Developer. Built with a focus on clean architecture, full responsiveness, and production-grade code quality.

---

## Tech Stack

| Tool                      | Version | Purpose                          |
|---------------------------|---------|----------------------------------|
| React                     | 18      | UI component library             |
| Vite                      | 5       | Build tool & dev server          |
| Tailwind CSS              | 3       | Utility-first styling            |
| CSS Custom Properties     | —       | Light / dark theme tokens        |
| IntersectionObserver API  | —       | Scroll-triggered animations      |

---

## Features

- ⚡ **Blazing fast** — Vite build, zero unnecessary dependencies
- 🌙 **Light / Dark mode** — toggled from navbar, persisted in `localStorage`
- 📱 **Fully responsive** — mobile first, fluid `clamp()` sizing from 320px to 4K
- 🎞 **Scroll animations** — reveal on enter via IntersectionObserver
- 🍱 **Bento grid** services layout
- ♿ **Accessible** — semantic HTML, keyboard navigation, ARIA labels
- 🚀 **Vercel-ready** — `vercel.json` SPA routing included out of the box

---

## Project Structure

```
portfolio/
├── public/                     # Static assets (favicon, OG image)
├── src/
│   ├── components/             # One component file per section
│   │   ├── Navbar.jsx          # Sticky nav + animated hamburger menu
│   │   ├── Hero.jsx            # Landing section with animated orbs
│   │   ├── About.jsx           # Bio card + info rows
│   │   ├── Stack.jsx           # Tech pills + skill progress bars
│   │   ├── Services.jsx        # Bento grid service cards
│   │   ├── Projects.jsx        # Project cards with GitHub/live links
│   │   ├── Process.jsx         # Engineering process timeline
│   │   ├── Contact.jsx         # Contact form + contact info
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── ScrollTop.jsx       # Scroll to top floating button
│   ├── context/
│   │   └── ThemeContext.jsx    # Light/dark mode state + localStorage
│   ├── hooks/
│   │   └── useScrollReveal.js  # IntersectionObserver scroll animations
│   ├── data/
│   │   └── index.js            # All static content lives here
│   ├── App.jsx                 # Root layout, wires all sections
│   ├── main.jsx                # React entry point
│   └── index.css               # Design tokens + all global styles
├── index.html                  # Vite HTML shell + Google Fonts
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                 # SPA routing fix for Vercel
├── .gitignore
└── package.json
```

---

## Local Development

```bash
# 1. Clone the repository
git clone https://github.com/ssiddiquiii/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## Production Build

```bash
# Build for production
npm run build

# Preview production build locally before deploying
npm run preview
```

Output is generated in the `/dist` folder — ready for deployment.

---

## Deploying to Vercel

This project is deployed on [Vercel](https://vercel.com) with automatic CI/CD on every push.

**First-time setup:**

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the `portfolio` repository
4. Vercel auto-detects Vite — no manual config needed
5. Click **Deploy** ✓

**Every future update:**

```bash
git add .
git commit -m "feat: your change here"
git push
# Vercel auto-redeploys on every push to main ✓
```

---

## Updating Content

All site content — projects, tech stack, services, contact info — is centralised in one file:

```
src/data/index.js
```

Edit that file and changes propagate to every component automatically. No need to touch individual component files for content updates.

---

## Contact

**Sameed Siddiqui**

| | |
|---|---|
| 🌐 Website | [samedsiddiqui.me](https://samedsiddiqui.me) |
| 🐙 GitHub | [github.com/ssiddiquiii](https://github.com/ssiddiquiii) |
| 📧 Email | [sameed@samedsiddiqui.me](mailto:sameed@samedsiddiqui.me) |
| 📍 Location | Karachi, Pakistan |

---

## License

© 2025 Sameed Siddiqui. All rights reserved.

This repository contains personal portfolio source code and is **not open for reuse, redistribution, or use as a template** without explicit written permission from the author.
