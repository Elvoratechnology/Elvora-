# ELVORA — Technology Studio Portfolio

> Modern digital technology studio portfolio & engineering showcase — engineered with React, TypeScript, Vite, and Tailwind CSS.

Live Deployment: [https://elvora-zeta.vercel.app](https://elvora-zeta.vercel.app)

---

## 📋 Overview

**ELVORA** is a modern digital technology studio website featuring a high-performance multi-page experience: an architectural project portfolio with interactive live previews, instant digital scope cost planner, engineering articles, team showcase, and a connected Formspree contact form.

---

## 🚀 Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | Modern component architecture & UI rendering |
| [TypeScript](https://www.typescriptlang.org) | Strict type safety & maintainability |
| [Vite 6](https://vitejs.dev) | Ultra-fast build tool, HMR, and MPA bundler |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling & frosted glass aesthetics |
| [Lucide React](https://lucide.dev) | High-contrast geometric iconography |
| [Framer Motion](https://www.framer.com/motion) | Fluid UI animations & transitions |
| [Formspree](https://formspree.io) | Contact form submission API with anti-spam honeypot |

---

## 📁 Project Structure

```
Elvora/
├── .vscode/
│   └── settings.json      # VS Code File Nesting (groups configs & HTML pages)
│
├── public/
│   ├── logo.png           # Official studio emblem mark
│   ├── favicon.png        # Browser favicon
│   └── hero-laptop.jpg    # High-resolution hero showcase asset
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Header with theme toggle, brand lockup, & sticky border
│   │   ├── Footer.tsx             # Global footer with studio links & contact info
│   │   ├── Layout.tsx             # Page layout & dynamic document metadata wrapper
│   │   ├── ProjectCard.tsx        # Live iframe project preview cards
│   │   ├── BlogCard.tsx           # Article cards with tag filters
│   │   ├── ArticleReaderModal.tsx # Full-screen modal reader
│   │   ├── FAQAccordion.tsx       # Interactive FAQ items
│   │   ├── ServiceItem.tsx        # Studio capability & offering rows
│   │   ├── SectionHeading.tsx     # Typography headers
│   │   └── Button.tsx             # Reusable interactive buttons
│   │
│   ├── pages/
│   │   ├── Home.tsx          # Studio landing page
│   │   ├── Portfolio.tsx     # Case studies & live interactive system models
│   │   ├── Planner.tsx       # Instant investment planner (Student & Pro tiers in ₱)
│   │   ├── Contact.tsx       # Formspree-connected inquiry form
│   │   ├── Blog.tsx          # Tech journal & architecture articles
│   │   └── Team.tsx          # Engineering and leadership profiles
│   │
│   ├── data/
│   │   ├── selectedWork.ts   # Featured case studies (Worklane, Inky, Resiboss)
│   │   ├── services.ts       # Studio capabilities & services data
│   │   ├── pricing.ts        # Planner configuration & tier pricing
│   │   ├── process.ts        # Sprint methodology & workflow
│   │   ├── principles.ts     # Studio engineering philosophy
│   │   ├── faqs.ts           # Frequently asked questions
│   │   ├── blogPosts.ts      # Technical articles
│   │   └── teamMembers.ts    # Studio team profiles
│   │
│   ├── styles/
│   │   └── index.css         # Global styles, dot grid, & theme invert filters
│   │
│   ├── App.tsx               # Client-side router & dynamic page switcher
│   └── main.tsx              # DOM mount entry point
│
├── index.html                # Home entry shell
├── portfolio.html            # Portfolio entry shell
├── planner.html              # Planner entry shell
├── contact.html              # Contact entry shell
├── blog.html                 # Blog entry shell
├── team.html                 # Team entry shell
│
├── vite.config.ts            # Vite MPA build configuration (port 3000)
├── tailwind.config.js        # Design system & color tokens
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project scripts & dependencies
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone repository
git clone https://github.com/Elvoratechnology/Elvora-.git
cd Elvora

# 2. Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

The dev server starts at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Generates production-ready, minified static bundles in `dist/`.

### Local Build Preview

```bash
npm run preview
```

---

## 📬 Contact Form Integration (Formspree)

The contact form in [src/pages/Contact.tsx](src/pages/Contact.tsx) submits to the active Formspree endpoint:

* **Endpoint**: `https://formspree.io/f/mbgdzylw`
* **Method**: `POST` via AJAX (`fetch`) with `Accept: application/json`
* **Payload Fields**:
  - `name`: Client's full name
  - `email`: Client's email address
  - `phone`: Contact number / WhatsApp
  - `contactMethod`: Preferred communication channel (Email, WhatsApp, Phone Call, Zoom, Messenger)
  - `subject`: Dynamic subject line (`New Project Inquiry from [Name] - Elvora Technology`)
  - `message`: Project goals & description
  - `_replyto`: Auto-routes inbox replies directly to the client's email
  - `_gotcha`: Hidden honeypot field for bot spam prevention
* **UX & State**:
  - Client-side validation for required fields and valid email format
  - Duplicate submission prevention (`isSubmitting` disables inputs and button)
  - Branded dark-glass *"Inquiry Received"* confirmation card
  - Actionable error alert banner with fallback to `elvora1007@gmail.com`

---

## 🌙 Dark / Light Mode

The website uses an instant **CSS inversion filter** for global theming:

- **Dark Mode** (default): `#050505` background, `#EDEDED` typography, subtle glass borders.
- **Light Mode**: Inverted filter with hue compensation on `<body>`. Embedded iframes are protected from inversion to display live websites in their true colors.
- **Persistence**: Saved automatically in `localStorage` under `elvora-theme`.

---

## 📄 Pages & Routes

| Route | Entry | Description |
|---|---|---|
| `/` | `index.html` | Studio hero, capabilities, process, featured work, FAQ, CTA |
| `/portfolio.html` | `portfolio.html` | Architectural project showcase with live iframe models |
| `/planner.html` | `planner.html` | Interactive investment estimator (Student & Professional tiers in ₱) |
| `/contact.html` | `contact.html` | Project inquiry form connected to Formspree |
| `/blog.html` | `blog.html` | Technical journals with categorized modal reader |
| `/team.html` | `team.html` | Studio engineering and design team profiles |

---

## 🖥️ Featured Live Projects

Interactive embedded preview models of real deployed systems:

| Project | Live URL |
|---|---|
| **Worklane** — Smart Project Management | [worklane-five.vercel.app](https://worklane-five.vercel.app) |
| **Inky** — Automated E-signatures | [inky-tan.vercel.app](https://inky-tan.vercel.app) |
| **Resiboss 2.0** — Personal Spending Intelligence | [resiboss.vercel.app](https://resiboss.vercel.app) |

---

## 🎨 Design System

```css
/* Core Dark Palette */
--bg:       #050505   /* Pitch background */
--surface:  #0A0A0A   /* Secondary surface */
--border:   rgba(255, 255, 255, 0.08) /* Subtle glass divider */
--text:     #EDEDED   /* Primary typography */
--muted:    #8E8E93   /* Secondary typography */
```

* **Headings**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
* **Body**: [Inter](https://fonts.google.com/specimen/Inter)
* **Monospace**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts Vite local development server on port 3000 |
| `npm run build` | Runs TypeScript type-checking (`tsc`) and generates production bundle (`vite build`) |
| `npm run preview` | Runs local HTTP server to preview the production build in `dist/` |

---

## 📜 License & Ownership

© ELVORA Technology. All rights reserved.
