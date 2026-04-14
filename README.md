# DroneDontCare

Single-product storefront for the X8 Cine-Lifter FPV drone. Built with Next.js, Tailwind CSS, and Stripe.

**Live site:** https://dronedontcare.com

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables (see SETUP.md for details)
# Place .env.local in the project root

# Start dev server
npm run dev
```

Open http://localhost:3000 to see the site locally.

For full onboarding instructions, see [SETUP.md](SETUP.md).

## Managing the Site with Claude Code

You can use Claude Code (the AI CLI tool) to make changes to this site without writing code yourself. Here's how:

### Setup

1. Install Claude Code: https://claude.ai/claude-code
2. Clone this repo and `cd` into it
3. Run `claude` to start a session

### Common Tasks

Just tell Claude what you want in plain English:

| What you want | What to say |
|---|---|
| Change the price | "Change the drone price to $2,799" |
| Update product description | "Update the description to mention the new motor upgrade" |
| Add/remove a product image | "Add this image to the gallery" (drag image into the chat) |
| Change contact email | "Change the support email to newemail@gmail.com" |
| Update shipping info | "Change shipping to 5-day delivery" |
| Change spec values | "Update the max flight time to 18 minutes" |
| Edit the page text | "Change the warranty from 1 month to 3 months" |
| Deploy changes | "Push and deploy to production" |

### Deploying Changes

After making changes, tell Claude:

```
push to github and deploy
```

This will commit your changes, push to GitHub, and deploy to Vercel. The live site updates in about 30 seconds.

### Environment Variables

Stripe keys and other secrets are stored in Vercel (not in code). To manage them:

```
vercel env ls          # List all env vars
vercel env pull        # Pull to local .env.local for dev
```

Never commit `.env.local` — it's in `.gitignore`.

## Project Structure

```
src/
  app/
    page.tsx           # Main product page
    layout.tsx         # Header, footer, SEO metadata
    globals.css        # Cyberpunk theme colors and utilities
    api/checkout/      # Stripe checkout endpoint
    success/           # Post-purchase confirmation page
  components/
    buy-button.tsx     # Stripe checkout button
    image-gallery.tsx  # Product image gallery
    ui/                # shadcn/ui components
public/
  images/              # Product photos
```

## Key Accounts

| Service | Purpose | Dashboard |
|---|---|---|
| **Vercel** | Hosting & deploys | https://vercel.com/dashboard |
| **Stripe** | Payments | https://dashboard.stripe.com |
| **GoDaddy** | Domain (dronedontcare.com) | https://dcc.godaddy.com |
| **GitHub** | Code repo | https://github.com/yuwei-liang/louis-drone |

## Tech Stack

- **Next.js 16** — React framework
- **Tailwind CSS** — Styling
- **shadcn/ui** — UI components
- **Stripe Checkout** — Payment processing
- **Vercel** — Hosting (auto-deploys from GitHub)
