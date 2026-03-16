# Sameed Siddiqui — Portfolio

Personal portfolio website built with **React** and **Vite** to showcase my projects, services, and development process as a MERN Stack Developer.

**Live Site:** https://samedsiddiqui.me

---

## Tech Stack

* React 18
* Vite 5
* Tailwind CSS 3
* CSS Custom Properties (light / dark theme)
* IntersectionObserver API

---

## Features

* Fully responsive (mobile-first layout)
* Light / Dark mode with `localStorage` persistence
* Scroll reveal animations
* Accessible semantic HTML structure
* Optimized production build
* Ready for Vercel deployment

---

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
```

---

## Local Development

Clone the repository and run the development server.

```
git clone https://github.com/ssiddiquiii/portfolio.git
cd portfolio
npm install
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

## Production Build

Build and preview the production version locally.

```
npm run build
npm run preview
```

Production files are generated in the `dist` folder.

---

## Deployment

This project is deployed using **Vercel**.

To deploy your own version:

1. Push the repository to GitHub
2. Import it into Vercel
3. Deploy

Vercel automatically detects the Vite configuration.

---

## Content Updates

All portfolio content (projects, services, tech stack, etc.) is managed in:

```
src/data/index.js
```

Update this file to modify site content.

---

## Author

**Sameed Siddiqui**
MERN Stack Developer — Karachi, Pakistan

GitHub: https://github.com/ssiddiquiii
Website: https://samedsiddiqui.me

---

## License

This repository contains personal portfolio source code and is not intended for reuse, redistribution, or use as a template without permission.
