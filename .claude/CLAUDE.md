# Personal Site — Claude Code Context

## Stack
Next.js 16.2.9 App Router, TypeScript, Tailwind CSS, Framer Motion,
Auth.js v5, Recharts, next-mdx-remote, JSON flat files → Supabase later.
Deploying to Vercel.

## Design rules
- NEVER hardcode colors — always use CSS custom property tokens
- Tokens defined in styles/globals.css
- Fonts: Fraunces (headings) + DM Sans (body)
- Light and dark mode via data-theme attribute on <html>
- Mobile-first, test at 375px and 1280px

## Architecture
- Public routes: /, /projects, /projects/[slug], /blog, /blog/[slug], /metrics
- Protected routes: /dashboard, /dashboard/log (Auth.js guard in layout.tsx)
- Content lives in /content/blog and /content/projects as MDX files
- Data lives in /data as JSON flat files (gym.json, coding.json, habits.json)

## Component rules
- Keep components small and single-purpose
- TypeScript with full prop types, no use of `any`
- Framer Motion for all animation — no raw CSS transitions
- Components live in /components/ui, /components/layout, /components/charts

## Current build status
[/] Foundation (tokens, layout, nav, theme toggle)
[ ] Homepage / About
[ ] Projects grid + one project page
[ ] Blog list + one MDX post
[ ] Private dashboard + entry form
[ ] Public metrics page
[ ] Polish + animations
[ ] AI chatbot + search