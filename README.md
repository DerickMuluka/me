# Derick Muluka — Terminal Portfolio

A developer-focused portfolio with a terminal aesthetic. Pure HTML, CSS, and JavaScript — no build step, deploys to Vercel instantly.

**Live:** [derickmuluka.vercel.app](https://derickmuluka.vercel.app)

---

## Features

- Self-typing name animation on page load
- Terminal-inspired UI across all sections
- Command tooltips on navigation links
- Live status bar with clock
- Glassmorphism cards with soft accents
- Animated skill bars and counters
- Project filtering by category
- Print-ready CV page — download as PDF via browser
- Fully responsive across mobile, tablet, and desktop
- Readable project detail pages (light background, dark text)
- No build step, no dependencies to install

---

## Project Structure

```
derick-muluka-portfolio/
├── index.html
├── projects.html
├── cv.html
├── project-details/
│   ├── edusphere.html
│   ├── virtual-classroom.html
│   ├── sonicwave.html
│   ├── voting-system.html
│   ├── house-rental.html
│   ├── network-design.html
│   ├── asset-management.html
│   ├── library-management.html
│   └── membership-management.html
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/ (9 project images)
│   └── icons/favicon.ico
├── css/
│   ├── base/ (reset, variables, typography)
│   ├── components/ (terminal, cards, buttons, nav, forms)
│   ├── layout/ (grid, sections, footer)
│   ├── effects/ (animations, glassmorphism)
│   └── pages/ (home, projects, project-detail, cv)
├── js/
│   ├── main.js
│   ├── modules/ (typewriter, navigation, animations, filter, form)
│   └── utils/debounce.js
├── manifest.json
├── vercel.json
└── README.md
```

---

## Tech Stack

| Area | Technologies |
|------|-------------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend (projects) | PHP, Java, Node.js |
| Database | MySQL, PostgreSQL |
| Tools | Git, GitHub, VS Code, XAMPP |

---

## Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

### Option 2 — GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Framework preset: **Other**
5. Leave build command empty
6. Click **Deploy**

The included `vercel.json` handles routing, caching, and security headers automatically. **No build errors will occur** — this is a pure static site.

---

## Customization

### Update Content

- **Hero / name**: edit `index.html` hero section
- **About**: edit the `#about` section
- **Experience**: edit the timeline in `#experience`
- **Projects**: edit cards in `index.html` and `projects.html`
- **CV**: edit `cv.html`

### Add a Project

1. Copy any file in `project-details/` and rename it
2. Update content, tech stack, and image path
3. Add a card in `index.html` and `projects.html`
4. Add the image to `assets/images/projects/`

### Change Colors

Edit `css/base/variables.css`:

```css
--accent-primary: #4ade80;    /* green */
--accent-secondary: #38bdf8;  /* cyan */
```

---

## Readability

All text meets WCAG AA contrast standards:

| Context | Text | Background | Contrast |
|---------|------|------------|----------|
| Main site | `#f0f6fc` | `#0d1117` | 15.5:1 |
| Detail pages | `#1a1a2e` | `#f8f9fa` | 13.8:1 |
| Body text | `#2d3748` | `#f8f9fa` | 8.2:1 |
| Links | `#2563eb` | `#f8f9fa` | 5.1:1 |

Minimum body font size: 16px. Line height: 1.7 for paragraphs, 1.75 for detail content.

---

## The CV Download

The CV is served as `cv.html` — a print-optimized page. Clicking **View CV** opens it in a new tab; clicking **Download PDF** triggers the browser's print dialog with print-optimized styles. This avoids broken PDF links.

---

## Browser Support

Chrome/Edge 88+, Firefox 78+, Safari 14+, all modern mobile browsers.

---

## License

MIT — free to use as a template. Replace content with your own.

---

## Contact

- **Email**: mulukaderick@gmail.com
- **GitHub**: [github.com/DerickMuluka](https://github.com/DerickMuluka)
- **LinkedIn**: [linkedin.com/in/derickmuluka](https://www.linkedin.com/in/derickmuluka)
- **Location**: Mombasa, Kenya