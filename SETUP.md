# DroneDontCare — Setup Guide for Louis

## Prerequisites

- Node.js 20+
- npm or pnpm
- Git
- Claude Code CLI (optional, for AI-assisted development)

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yuwei-liang/louis-drone.git
cd louis-drone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Yuwei will send you a zipped `.env.local` file. Unzip it into the project root:

```bash
unzip env-for-louis.zip -d .
```

This places `.env.local` in the project root. **Do not commit this file** — it's already in `.gitignore`.

### 4. Run the dev server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: shadcn/ui + Tailwind CSS v4
- **Payments**: Stripe
- **Deployment**: Vercel
- **Styling**: Dark mode, cyberpunk neon aesthetic

## Project Structure

```
app/              → Next.js App Router pages and layouts
components/       → React components (shadcn/ui based)
public/           → Static assets (drone images, etc.)
```

## Useful Commands

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run lint`  | Run ESLint               |

## Deployment

The project is deployed on Vercel. To set up your own Vercel project:

```bash
npx vercel          # follow the prompts to link/create a project
npx vercel env add  # add each env var from .env.local
```

Then every push to `main` will auto-deploy.

## Questions?

Ask Yuwei or use Claude Code in the project directory — the `CLAUDE.md` has context about the codebase.
