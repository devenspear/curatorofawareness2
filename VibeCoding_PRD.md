## 1) Page outline (IA) — one scroll, many anchors

1. **Hero** — “Vibe Coding 101: Build software by talking to AI.”
2. **What is Vibe Coding?** (definition, why now)
3. **How It Works (for absolute beginners)** — prompts → prototypes → polish → publish
4. **The Platform Ladder** — pick your tier:
   - Level 1: *Chat‑to‑App builders* (Lovable, Replit)
   - Level 2: *AI‑native IDEs* (Cursor, Windsurf)
   - Level 3: *Terminal & CLI workflows* (Claude Code CLI, Git/GitHub CLI, Vercel/Netlify CLI; plus Google Cloud Code inside IDEs)
5. **Beginner Coding Crash Course** — HTML/CSS/JS/Python basics (10‑minute tour)
6. **Deploy What You Build** — GitHub → Vercel/Netlify/Cloudflare/Render/Railway/Fly.io
7. **Starter Recipes (60–120 minutes)** — follow‑the‑recipe quick wins
8. **Resource Bank** — videos, docs, guides
9. **FAQ + Glossary** — remove fear, name the parts
10. **Product Requirements (PRD)** — scope to ship this site

I wrote the copy and sections below so you can paste them into a single page today. Where I make tool claims or recommend specific workflows, I cite the source right after the paragraph.

## 

------

## 3) Key facts & citations (load‑bearing)

- **What “vibe coding” means** and why it’s trending: Replit defines it as instructing AI agents to write code from natural‑language prompts; they host a short course with DeepLearning.AI. [Replit Blog+1](https://blog.replit.com/what-is-vibe-coding)
- **Lovable** positions itself as an AI platform to create full‑stack websites via chat, with beginner‑oriented docs. [Lovable+1](https://lovable.dev/?utm_source=chatgpt.com)
- **Cursor IDE** highlights Agent tasks, scoped changes, and top‑model access inside the editor. [Cursor](https://cursor.com/features)
- **Windsurf (Codeium)** delivers agentic flows called Cascade, with Supercomplete and persistent Memories/Rules (see official docs). [Windsurf Docs+2Windsurf Docs+2](https://docs.windsurf.com/?utm_source=chatgpt.com)
- **Claude Code** runs as a terminal‑first agent, supports *headless mode*, and has a VS Code extension & web surface. [Windows Central+3Claude Docs+3Claude Docs+3](https://docs.claude.com/en/docs/claude-code/overview?utm_source=chatgpt.com)
- **Cloud Code (Google)** brings Cloud Run/GKE/Kubernetes workflows into VS Code / JetBrains IDEs. [Google Cloud+1](https://cloud.google.com/code/docs/vscode/overview?utm_source=chatgpt.com)
- **Deploy from GitHub**: Vercel provides auto‑deploys with preview URLs; Netlify offers continuous deployment; Cloudflare Pages integrates with Workers. [Vercel+2Netlify Docs+2](https://vercel.com/docs/git/vercel-for-github?utm_source=chatgpt.com)
- **Alternatives/adjacent hosts**: Render, Railway, and Fly.io provide app/platform hosting options (usage‑based, edge‑close). [Render+2Railway+2](https://render.com/?utm_source=chatgpt.com)
- **Starters**: Next.js `create-next-app` and Vercel’s template gallery; Hono starters for Cloudflare Workers. [Next.js+2Vercel+2](https://nextjs.org/docs/app/api-reference/cli/create-next-app?utm_source=chatgpt.com)
- **Prompting guides** from OpenAI, Anthropic, and Google Gemini (model‑agnostic best practices). [OpenAI Platform+2Claude Docs+2](https://platform.openai.com/docs/guides/prompt-engineering?utm_source=chatgpt.com)
- **Note on “Codex” naming**: the original OpenAI Codex models were *retired in 2023*; today, modern coding agents/APIs supplant that line. (If you see “Codex” elsewhere, treat it as historical branding unless an official source says otherwise.) [Hacker News+1](https://news.ycombinator.com/item?id=35242069&utm_source=chatgpt.com)

------

## 4) Two canonical beginner workflows (copy for the site)

**A) GitHub ➜ Vercel (Next.js or static)**

1. Push your repo to GitHub.
2. In Vercel, “Import Project” and pick your repo; Vercel auto‑detects framework and builds.
3. Every PR gets a unique Preview URL; merging to `main` updates production. [Vercel+1](https://vercel.com/docs/git/vercel-for-github?utm_source=chatgpt.com)

**B) GitHub ➜ Netlify (Astro/HTML or React)**

1. Connect your repo to Netlify.
2. Netlify builds on every push; use “Deploy Previews” for PRs.
3. Use Netlify Functions if you need server logic. [Netlify Docs](https://docs.netlify.com/deploy/create-deploys/?utm_source=chatgpt.com)

------

## 5) Prompting mini‑framework (for novices)

- **Goal** — “Build a one‑page site for [audience] that lets me [outcome].”
- **Constraints** — “Keep it one HTML file + minimal CSS. Lighthouse score ≥ 90. No external JS.”
- **Inputs** — paste a tiny example (copy block, colors, logo alt text).
- **Steps** — “Propose plan → I approve → you implement in small commits.”
- **Tests** — “Add a 3‑item checklist I can click through to confirm.”

This mirrors best practices in the official guides and keeps agents safe and focused. [OpenAI Platform+1](https://platform.openai.com/docs/guides/prompt-engineering?utm_source=chatgpt.com)

------

## 6) Next actions (fastest path to value)

- **Pick your level**: want pure chat? Try Lovable or Replit’s Agent. Prefer control? Install Cursor or Windsurf. Power‑user? Add Claude Code CLI. [Claude Docs+4Lovable Documentation+4Replit+4](https://docs.lovable.dev/)
- **Ship a win today**: choose *Recipe A* (Astro site) or *Recipe B* (Next.js starter) and deploy. [Astro+1](https://astro.build/themes/?utm_source=chatgpt.com)
- **Teach through building**: have the agent annotate the code and write a README in plain English.

------

### Notes on platform naming you mentioned

- You wrote “replet” and “Versal.” I aligned to **Replit** and **Vercel** (the industry spellings).
- You mentioned “Cloud Code, Codex” for terminal tools: **Cloud Code** is an IDE extension by Google; **Codex** (2021) is historical — today use tools like **Claude Code (CLI)** for terminal agent workflows. [Google Cloud+1](https://cloud.google.com/code/docs/vscode/overview?utm_source=chatgpt.com)