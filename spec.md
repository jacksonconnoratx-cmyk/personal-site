# Personal Site — Project Spec

## Overview
A personal portfolio site with blog, project showcase, and progress tracking dashboard. Built to serve as both a resume link and a living personal project. Public-facing for visitors, with a private dashboard for self-logging and admin.

---

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, protected routes, API endpoints, markdown blog |
| Styling | Tailwind CSS + CSS custom properties | Utility-first + themeable design tokens |
| Animations | Framer Motion | Handles everything from fade-ins to drag-and-drop |
| Auth | Auth.js (NextAuth v5) | Protects /dashboard and entry forms |
| Database | JSON flat files → Supabase (Postgres) | Start simple, migrate when querying gets complex |
| Hosting | Vercel | Free tier, auto-deploys from GitHub, made for Next.js |
| Blog | MDX (markdown + JSX) | Write in markdown, embed React components |
| Charts | Recharts | Styled to match earthy palette |

---

## Visual Identity

### Color Tokens (CSS custom properties)

```css
:root {
  --color-bg: #f5f0eb;
  --color-surface: #ece7e0;
  --color-border: #d8cfc5;
  --color-accent: #b07d5a;
  --color-accent-light: #d4a882;
  --color-accent-dark: #8a5a38;
  --color-text: #2c2824;
  --color-text-muted: #5a4e42;
  --color-text-subtle: #8a7060;
}

[data-theme="dark"] {
  --color-bg: #1e1c19;
  --color-surface: #2a2723;
  --color-border: #3a3630;
  --color-accent: #c4956a;
  --color-accent-light: #d4a882;
  --color-accent-dark: #8a5a38;
  --color-text: #e8e0d5;
  --color-text-muted: #b8a898;
  --color-text-subtle: #8a7a6a;
}
```

### Typography
- **Headings**: Fraunces (Google Fonts) — editorial, warm
- **Body**: DM Sans (Google Fonts) — neutral, readable

### Aesthetic Notes
- Never use pure white or pure black — always the token values
- One accent color (terracotta) used for links, highlights, chart bars, hover states
- Subtle grain texture overlay via SVG filter (optional, adds depth)
- Generous whitespace — don't crowd components

---

## Site Structure

```
/                        → Landing + About (hero, quick bio, currently section)
/projects                → Portfolio grid (project cards with stack tags)
/projects/[slug]         → Individual project page (process, learnings, links)
/blog                    → Blog post list
/blog/[slug]             → Individual blog post (MDX)
/metrics                 → Public progress dashboard (filtered: is_public = true)
/dashboard               → PRIVATE — full data, entry forms, raw logs (auth required)
/dashboard/log           → PRIVATE — entry form for gym, coding, habit logs
```

---

## Feature Map

### Public features
- Hero section with name, tagline, "currently working on"
- Project cards with stack tags, description, GitHub/live links
- Individual project pages showing process + learnings (not just screenshots)
- Blog with tag filtering
- Metrics page: trend charts, PR highlights, streaks (public entries only)
- Light/dark mode toggle (persisted to localStorage)
- Custom 404 page
- "Now" page or section (what you're reading, building, lifting right now)

### Private features (behind Auth.js)
- Full metrics dashboard with raw data
- Entry form for all three log types (gym, coding, habits)
- Toggle is_public per entry
- Draft blog posts

### Leave-the-door-open features (architecture ready, build later)
- AI chatbot: content stored as structured MDX/JSON, ready to feed as context
- Site search: Pagefind (runs at build time, zero cost)
- Drag-and-drop dashboard reordering: Framer Motion drag is already in the dep tree
- Hardware data ingestion: API route ready to accept POST from Raspberry Pi / Arduino

---

## Data Model

### Gym Log
```json
{
  "id": "uuid",
  "date": "2024-01-15",
  "exercise": "Deadlift",
  "sets": 3,
  "reps": 5,
  "weight_kg": 120,
  "notes": "New PR",
  "is_public": true
}
```

### Coding Log
```json
{
  "id": "uuid",
  "date": "2024-01-15",
  "project": "personal-site",
  "hours": 2.5,
  "milestone": "Finished metrics page",
  "notes": "Recharts API took a while to figure out",
  "is_public": true
}
```

### Habit Log
```json
{
  "id": "uuid",
  "date": "2024-01-15",
  "habit_name": "Morning walk",
  "value": true,
  "streak": 12,
  "is_public": false
}
```

**Storage path**: Start with `/data/*.json` files in the repo. Migrate to Supabase when you need cross-entry queries or the form needs a real write endpoint.

---

## Folder Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout, theme provider, fonts
│   ├── page.tsx                # Homepage / About
│   ├── projects/
│   │   ├── page.tsx            # Project grid
│   │   └── [slug]/page.tsx     # Individual project
│   ├── blog/
│   │   ├── page.tsx            # Post list
│   │   └── [slug]/page.tsx     # MDX post renderer
│   ├── metrics/
│   │   └── page.tsx            # Public dashboard
│   └── dashboard/
│       ├── layout.tsx          # Auth guard wrapper
│       ├── page.tsx            # Private dashboard
│       └── log/page.tsx        # Entry form
├── components/
│   ├── ui/                     # Buttons, cards, inputs, tags
│   ├── charts/                 # Recharts wrappers styled to palette
│   ├── layout/                 # Nav, footer, theme toggle
│   └── metrics/                # Log entry form, metric cards
├── content/
│   ├── blog/                   # .mdx files
│   └── projects/               # .mdx files
├── data/
│   ├── gym.json
│   ├── coding.json
│   └── habits.json
├── lib/
│   ├── auth.ts                 # Auth.js config
│   ├── data.ts                 # Read/write helpers for JSON data
│   └── mdx.ts                  # MDX parsing helpers
├── public/
│   └── fonts/                  # Self-hosted if needed
├── styles/
│   └── globals.css             # CSS tokens, base styles
└── next.config.js
```

---

## Protected Route Pattern

```typescript
// app/dashboard/layout.tsx
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }) {
  const session = await auth()
  if (!session) redirect('/') 
  return <>{children}</>
}
```

---

## Key Libraries to Install

```bash
npx create-next-app@latest personal-site --typescript --tailwind --app
cd personal-site
npm install framer-motion
npm install next-auth@beta
npm install recharts
npm install next-mdx-remote
npm install next-themes
```

---

## Personalization Priorities (do these before anything generic)
1. Write your actual bio copy before building the About section
2. Pick 2-3 real projects to feature at launch — write the process stories, not just descriptions
3. Decide your accent color shade (terracotta is the starting point — adjust to taste)
4. Write one blog post before you build the blog — it'll shape the design
5. Log one week of real data before building the metrics UI — it'll shape the schema

---

## Out of scope for v1
- CMS (write MDX files directly)
- Comments on blog posts
- Email newsletter
- Analytics (add Plausible or Fathom in v2)
- AI chatbot (architecture is ready, build when the content exists to power it)

