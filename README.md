# Dynami — Workout Chatbot

Dynami is a fitness chatbot web app that generates personalized workout plans based on your age, weight, and fitness goals. Built with Next.js 16, React 19, and Tailwind CSS 4, it features a sleek dark UI with animated green accents and a guided conversational flow.

---

## Features

- **Guided chatbot flow** — Collects user info (age, weight, goal) through quick-select buttons in a chat-style interface
- **Personalized workout plans** — Recommends a tailored 4-day split based on your inputs, covering all major muscle groups
- **Animated loading experience** — Displays a multi-stage loading screen while your plan is "calculated"
- **Animated dark UI** — Pulsing grid background, floating geometric shapes, and smooth Framer Motion transitions throughout
- **Restart flow** — Users can restart the entire session from the results screen

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.3 | App framework (App Router) |
| [React](https://react.dev) | 19.2.4 | UI library |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling |
| [Motion (Framer Motion)](https://motion.dev) | 12.38.0 | Animations |
| [Lucide React](https://lucide.dev) | 1.8.0 | Icons |
| [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) | 2.22.0 | Text animation |

---

## Project Structure

```
dynami/
├── src/
│   └── app/
│       ├── Components/
│       │   ├── Background.jsx   # Reusable animated background
│       │   ├── Header.jsx
│       │   └── Footer.jsx
│       ├── chatbot/
│       │   └── page.js          # Main chatbot UI & logic
│       ├── layout.js            # Root layout (Bebas Neue font)
│       ├── page.js              # Landing page
│       └── globals.css          # Global styles
├── public/                      # Static assets
├── package.json
└── next.config.mjs
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone <your-repo-url>
cd dynami
npm install
```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other Scripts

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## How It Works

The chatbot uses a finite state machine approach to guide users through a fixed conversation:

```
GREET → STARTING → ASK_AGE → ASK_WEIGHT → ASK_GOAL → RECOMMEND
```

At each step the user selects from button options rather than typing free text. Once all three inputs are collected (age group, weight range, fitness goal), the app looks up a pre-defined workout plan from an internal data structure and renders it as a 4-day split card grid.

### Age Groups
- Under 18
- 18–44
- 45+

### Weight Ranges
- Under 100 lbs / 100–150 lbs / 150–175 lbs / 175–200 lbs / 200 lbs+

### Fitness Goals
- Lose Body Fat / Gain Muscle
- Gain Muscle & Maintain Body Fat
- Maintain Muscle / Lose Body Fat

---

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new):

1. Push your repo to GitHub
2. Import it on Vercel
3. Deploy — no configuration needed for a standard Next.js app

---
