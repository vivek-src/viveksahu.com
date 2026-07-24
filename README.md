# viveksahu.com

[![Live](https://img.shields.io/badge/Live-viveksahu.com-black?style=flat-square)](https://viveksahu.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Source for [viveksahu.com](https://viveksahu.com). Next.js 16 App Router, statically exported, no server at runtime.

## What's here

Four routes, one codebase:

- `/` — hero, tech stack, featured projects, latest posts, contact
- `/projects` — MDX case studies (stack used, live demo link, source link)
- `/blog` — MDX posts
- `/about` — background

`next.config.ts` sets `output: "export"`. Every route is pre-rendered at build time and shipped as static HTML — no SSR, no API routes, no server to keep alive.

## Stack

| Layer      | Technology                                                             |
| ---------- | ---------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, static export)                                 |
| Language   | TypeScript                                                             |
| Styling    | Tailwind CSS 4                                                         |
| Components | shadcn/ui (Radix-based), lucide-react / react-icons                    |
| Content    | MDX via `@next/mdx` + `next-mdx-remote`, parsed with `gray-matter`     |
| Theming    | `next-themes` (dark/light)                                             |
| Hosting    | Static CDN edge (Cloudflare-style `_headers` cache rules in `public/`) |

## Project structure

```
app/          Routes — home, about, projects, blog (App Router)
components/   Page sections + shadcn/ui primitives
content/      MDX source for projects and posts (frontmatter + body)
lib/          Build-time readers — parse content/ into sorted lists
```

Routes read through `lib/` straight into `content/` at build time — no API layer, no database.


New project or post = new `.mdx` file in `content/projects/` or `content/posts/`. `lib/projects.ts` / `lib/posts.ts` read the directory, sort by `date`, no registration step needed.

## Getting started

```bash
# Clone
git clone https://github.com/vivek-src/viveksahu.com.git
cd viveksahu.com

# Install
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the dev server (webpack mode)         |
| `npm run build` | Build the static export (writes to `out/`)  |
| `npm run start` | Start `next start` (production server mode) |
| `npm run lint`  | Run ESLint                                  |

Built by [Vivek Sahu](https://viveksahu.com) · [@vivek_src](https://x.com/vivek_src)
