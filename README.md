# Bytecode Websites — pricing & lead-gen site

> Sales site for **Bytecode Consulting Limited**'s small-business website service. Live at **https://website.bytecodeconsulting.com/**.

Three pages:

- `/` — the pitch (hero, who-it's-for, why-a-website, what-you-get, live example, pricing with itemised setup breakdown, add-ons, how it works, FAQ, Bytecode portfolio, apply form)
- `/privacy` — UK GDPR-compliant privacy notice
- `/terms` — plain-English terms & conditions

Form submissions go to Formspree (`xbdwkvqj`) → `admin@bytecodeconsulting.com`.

## Tech

- [Astro 5](https://astro.build) (static, zero runtime JS)
- [Tailwind CSS v4](https://tailwindcss.com) via the official Vite plugin
- Google Fonts: Playfair Display + Inter
- Hosted on GitHub Pages, custom domain via DNS CNAME

## Run locally

```bash
npm install
npm run dev   # http://localhost:4321
```

`npm run build` produces `dist/` for deploy.

## Where things live

- `src/data/pricing.ts` — single source of truth for pricing, FAQs, portfolio cards, all copy
- `src/pages/*.astro` — three pages, each fully self-contained
- `src/styles/global.css` — design tokens (cream / charcoal / brass) + utility classes
- `public/CNAME` — `website.bytecodeconsulting.com`
- `public/images/portfolio/` — Bytecode product logos (GabbleAI, ClubOS, GNG)

## Deploy

`.github/workflows/deploy.yml` auto-deploys on every push to `main`. Push → live in ~40 seconds.

## License

MIT — see [LICENSE](LICENSE).

---

Prepared by **Bytecode Consulting Limited** · AI · Cloud · Software Delivery · Training
[bytecodeconsulting.com](https://bytecodeconsulting.com) · admin@bytecodeconsulting.com
