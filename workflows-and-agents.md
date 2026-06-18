# Workflows & Agent Prompts

Reusable prompts to paste into Claude Code (or this project) as you build.

---

## 1. New feature planner
Use this HERE (in the Claude project) before building anything non-trivial.

```
I want to add [FEATURE] to my personal site.

Current stack: Next.js 14 App Router, Framer Motion, Auth.js, Recharts, JSON data files.
Current folder structure: [paste relevant parts]

Before I build, help me:
1. Identify the right approach and any new dependencies needed
2. Map out which files need to be created or changed
3. Flag any architectural decisions I should make upfront
4. Identify anything that could conflict with what's already built

Don't write code yet — just plan.
```

---

## 2. Component builder (Claude Code)
Use when building a new UI component from scratch.

```
Build a [COMPONENT NAME] component for my personal site.

Requirements:
- [list what it needs to do]
- Uses CSS custom property tokens only (--color-bg, --color-accent, etc.) — no hardcoded colors
- TypeScript with full prop types
- Framer Motion for any animation
- Mobile-first, works at 375px and 1280px

Reference the existing components in /components/ui for style consistency.
Output a single .tsx file.
```

---

## 3. Blog post formatter
Use HERE to turn rough notes into a publishable MDX post.

```
Turn these rough notes into a blog post for my personal site.

Rough notes:
[paste your notes]

Requirements:
- Written in my voice — conversational, first-person, honest about what didn't work
- MDX format with this frontmatter structure:
  ---
  title: ""
  date: "YYYY-MM-DD"
  tags: []
  summary: ""
  is_draft: true
  ---
- Length: ~[short/medium/long]
- Don't polish it into corporate speak — keep it personal
- End with what I learned or what's next
```

---

## 4. Metrics entry helper
Use HERE when you want to log a batch of data quickly.

```
Convert this into JSON entries for my [gym/coding/habit] log.

Raw data:
[paste your notes, e.g. "monday: deadlift 3x5 @ 120kg, bench 4x8 @ 80kg"]

Output format for gym:
{"id": "uuid", "date": "YYYY-MM-DD", "exercise": "", "sets": 0, "reps": 0, "weight_kg": 0, "notes": "", "is_public": true}

Give me a JSON array I can paste directly into /data/gym.json.
```

---

## 5. PR / code reviewer (Claude Code)
Run this before committing a big chunk of work.

```
Review the changes I've made in [file or feature area].

Check for:
1. Any hardcoded colors that should be CSS tokens
2. Missing TypeScript types or any use of `any`
3. Components doing too many things (should be split)
4. Accessibility issues (missing alt text, no keyboard nav, etc.)
5. Anything that will break on mobile at 375px

Don't rewrite everything — just flag issues and suggest fixes.
```

---

## 6. AI chatbot prep (for later)
When you're ready to add the chatbot, use this to prepare your content.

```
I'm building an AI assistant for my personal site that can answer questions
about me — my projects, skills, background, and current work.

Here's my content:
[paste your About page, project descriptions, recent blog posts]

Create a system prompt for the chatbot that:
1. Defines its persona (helpful, direct, represents me accurately)
2. Includes a structured summary of my background and skills
3. Sets boundaries on what it should/shouldn't answer
4. Handles "what are you?" gracefully

Also tell me the best way to chunk and pass my MDX content as context.
```

---

## Recommended build order

1. Foundation (tokens, layout, nav, theme toggle)
2. About / homepage
3. Projects grid + one project page
4. Blog list + one MDX post
5. Private dashboard + entry form
6. Public metrics page with charts
7. Polish (404, animations, "now" section)
8. AI chatbot + site search (when content exists)

