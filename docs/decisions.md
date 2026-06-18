# Architectural decisions

## 2026-06-17 — Storage
Starting with JSON flat files in /data. Will migrate to Supabase
when the entry form needs a real write endpoint or querying gets complex.

## 2026-06-17 — Auth
Using Auth.js v5. Single user (me), protecting /dashboard routes only.
No public sign-up flow needed.

## 2026-06-17 — Styling
CSS custom properties for all colors. Tailwind for layout/spacing.
No hardcoded hex values anywhere in components.