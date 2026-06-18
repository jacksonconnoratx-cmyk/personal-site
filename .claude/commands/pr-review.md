PR / code reviewer (Claude Code)
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