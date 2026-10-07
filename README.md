# ELVORA — Technology Studio Portfolio

> Modern digital technology studio portfolio — built with React, TypeScript, Vite, and Tailwind CSS.

---

## 📋 Overview

**ELVORA** is a digital technology studio website featuring a multi-page portfolio, project planner, blog, team, and contact pages. The site is built as a static multi-page application (MPA) using React + Vite with full dark/light mode support.

---

## 🚀 Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vite 6](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling |
| [Lucide React](https://lucide.dev) | Icons |
| [Framer Motion](https://www.framer.com/motion) | Animations |

---

## 📁 Project Structure

```
Elvora/
├── public/
│   ├── logo.png           # Main logo (white E mark)
│   ├── logo-light.png     # Light mode logo (black E mark)
│   └── favicon.png        # Browser tab icon
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Top navigation with dark/light toggle
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── ProjectCard.tsx     # Live iframe project previews
│   │   ├── BlogCard.tsx        # Blog post cards
│   │   ├── ArticleReaderModal.tsx  # Full-screen article reader
│   │   ├── FAQAccordion.tsx    # Expandable FAQ items
│   │   ├── ServiceItem.tsx     # Service listing rows
│   │   ├── SectionHeading.tsx  # Reusable section headers
│   │   └── Layout.tsx          # Page wrapper
│   │
│   ├── pages/
│   │   ├── Home.tsx       # Landing page
│   │   ├── Portfolio.tsx  # Full project portfolio
│   │   ├── Planner.tsx    # Project cost planner (Student & Professional)
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Blog.tsx       # Articles & journal
│   │   └── Team.tsx       # Team members
│   │
│   ├── data/
│   │   ├── selectedWork.ts  # Featured projects (Worklane, Inky, Resiboss)
│   │   ├── services.ts      # Service offerings
│   │   ├── pricing.ts       # Planner pricing data
│   │   ├── process.ts       # How we work steps
│   │   ├── principles.ts    # Company principles
│   │   ├── faqs.ts          # FAQ items
│   │   ├── blogPosts.ts     # Blog article content
│   │   └── teamMembers.ts   # Team member profiles
│   │
│   ├── styles/
│   │   └── index.css    # Global styles + light/dark mode
│   │
│   ├── App.tsx          # Router / page switcher
│   └── main.tsx         # Entry point
│
├── index.html           # Home page shell
├── portfolio.html       # Portfolio page shell
├── planner.html         # Planner page shell
├── contact.html         # Contact page shell
├── blog.html            # Blog page shell
├── team.html            # Team page shell
│
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd Elvora

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output goes to `/dist`. Preview the build locally:

```bash
npm run preview
```

---

## 🌙 Dark / Light Mode

The site uses a **CSS filter inversion** approach for theming:

- **Dark mode** (default) — `#050505` background, `#EDEDED` text
- **Light mode** — `filter: invert(1) hue-rotate(180deg)` on `<body>` flips every color to its exact opposite

Theme state is persisted to `localStorage` under the key `elvora-theme`. A script injected in each HTML `<head>` prevents flash-of-wrong-theme on load.

Toggle is located in the **Navbar** (☀️ / 🌙 pill button beside "Start a Project").

---

## 📄 Pages

| Route | File | Description |
|---|---|---|
| `/` | `index.html` | Hero, services, process, selected work, FAQ, CTA |
| `/portfolio.html` | `portfolio.html` | Full project grid |
| `/planner.html` | `planner.html` | Interactive cost estimator (Student + Professional modes) |
| `/contact.html` | `contact.html` | Inquiry form with sidebar info |
| `/blog.html` | `blog.html` | Articles with category filter & article reader modal |
| `/team.html` | `team.html` | Team member profiles |

---

## 🖥️ Featured Projects

Live embedded iframe previews of real deployed apps:

| Project | URL |
|---|---|
| **Worklane** — Smart Project Management | https://worklane-five.vercel.app |
| **Inky** — Automated E-signatures | https://inky-tan.vercel.app |
| **Resiboss 2.0** — Personal Spending Intelligence | https://resiboss.vercel.app |

---

## 🎨 Design Tokens

```css
/* Dark Mode (default) */
--bg:       #050505
--surface:  #0A0A0A
--border:   rgba(255, 255, 255, 0.08)
--text:     #EDEDED
--muted:    #6B6B6B
```

**Fonts:**
- Headings → [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Body → [Inter](https://fonts.google.com/specimen/Inter)
- Mono → [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 📝 Before Going Live

> Replace all placeholder content before deploying to production:

- [ ] `hello@yourdomain.com` → real contact email (in `Footer.tsx` and `Contact.tsx`)
- [ ] Social links in `Footer.tsx` (GitHub, LinkedIn, Twitter)
- [ ] Team member names & bios in `src/data/teamMembers.ts`
- [ ] Blog post authors in `src/data/blogPosts.ts`
- [ ] Open Graph image (`og:image` meta tag in all `.html` files)
- [ ] Real domain in Vite config if using a custom base path

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview production build locally |

---

## 📜 License

Private — ELVORA Technology. All rights reserved.
