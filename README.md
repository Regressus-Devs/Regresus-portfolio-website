# Regressus — IT, Website & AI Consulting

The marketing website for Regressus, a consulting business focused on IT systems, website design and development, and practical AI adoption. The site is intended to explain the services, showcase client work, and help businesses start a consulting conversation.

## Business focus

- **IT consulting:** help businesses assess and improve their technology, systems, and workflows.
- **Website consulting and development:** plan, design, and build websites and web applications around business needs.
- **AI consulting and automation:** identify useful AI applications, integrate suitable tools, and reduce repetitive work.

These describe the website's intended service offering; this repository does not currently contain an AI backend or consulting-platform functionality.

## Current implementation

- A Next.js App Router homepage at `/`.
- A sticky header that becomes more compact on scroll, with animated desktop navigation and a mobile menu built with Base UI's dialog primitives.
- A monochrome hero with JetBrains Mono typography, consultation and service links, and an isometric SVG illustration.
- A synchronized GSAP animation that separates and reassembles the processor and four gray server layers, with reduced-motion support and a static image fallback while the inline SVG loads.
- Shared button and sheet components, theme variables, and business-specific page metadata.

The navigation already lists Services, Our Work, Solutions, Blog, and About Us, and the CTAs target `#contact` and `#services`. **Those destination sections are not implemented yet.** `Footer.tsx` is a placeholder and is not mounted in the root layout. There is currently no contact form, booking integration, database, authentication, or API route.

## Tech stack

| Area | Technology |
| --- | --- |
| Application | Next.js 16.4.4, React 19.3, TypeScript 5 |
| Styling | Tailwind CSS 4, `@tailwindcss/turbopack`, CSS custom properties |
| UI | shadcn/ui (`base-nova`), Base UI, Lucide icons |
| Animation | GSAP 3, `@gsap/react`, CustomEase; custom WebGL desktop navigation |
| Typography | JetBrains Mono, self-hosted through `next/font/google` |
| Class helpers | `cn`, `class-variance-authority` |
| Code checks | ESLint 9 with Next.js Core Web Vitals and TypeScript rules |

The Motion package is installed but is not currently used by the source components. `next.config.ts` enables React Compiler, Cache Components, partial prefetching, and experimental agent feedback.

## Local development

Use Node.js **20.9 or newer** and npm. Install the versions recorded in the lockfile:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Source edits are reflected automatically. No environment variables are required for the current frontend. Google Fonts may need to be reachable during the initial build; visitors receive self-hosted font assets.

### Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application and check TypeScript |
| `npm start` | Serve an existing production build |
| `npm run lint` | Run ESLint across the project |
| `npm run lint -- --max-warnings=0` | Fail the ESLint check if any warnings remain |

No automated test suite is configured yet. Check desktop and mobile layouts, the mobile menu, keyboard navigation, and reduced-motion behavior when changing the UI.

## Project structure

```text
public/
  images/
    logo.svg
    home/hero/illustration-1.svg
src/
  app/
    globals.css             # Tailwind imports, theme tokens, and base styles
    layout.tsx              # Font, metadata, and shared header
    page.tsx                # Homepage composition
    favicon.ico
  components/
    home/HomeHero.tsx        # Hero layout, SVG loading, and GSAP timeline
    layout/Header.tsx       # Desktop navigation and mobile menu
    layout/Footer.tsx       # Unmounted footer placeholder
    ui/button.tsx           # Base UI button and reusable variants
    ui/sheet.tsx            # Base UI dialog-backed sheet
    GooeyNav.jsx            # WebGL navigation with a non-WebGL fallback
    GooeyNav.css            # Scoped navigation styles
  lib/utils.ts              # Shared cn export for shadcn components
.vscode/settings.json       # Tailwind language mode and class-helper detection
components.json             # shadcn/ui aliases and React Bits registry
eslint.config.mjs
next.config.ts
tsconfig.json
```

The `@/` import alias resolves to `src/`.

## Layout and Tailwind conventions

- Use **`max-w-341.5`** for page-wide content containers, including the header, hero, and future footer and sections. Tailwind's default spacing unit is `0.25rem`, so this is **85.375rem / 1366px** at a 16px root font size. The cap applies throughout desktop sizes, not just at `2xl`.
- Keep section backgrounds full width and center their content inside the cap:

  ```tsx
  <section>
    <div className="mx-auto w-full max-w-341.5 px-6 lg:px-12">
      {/* Section content */}
    </div>
  </section>
  ```

- Use the same horizontal gutters for aligned page regions: `px-6`, increasing to `lg:px-12`. Keep text blocks, illustrations, and dialog panels narrower where their content requires it; they are not page-wide containers.
- Tailwind 4 configuration lives in `src/app/globals.css`. The build uses the configured `@tailwindcss/turbopack` loader; this project does not use a separate `tailwind.config.js` or PostCSS configuration.
- `font-sans`, `font-mono`, and `font-heading` all resolve to the `--font-jetbrains-mono` variable supplied by the root layout.
- Prefer canonical utilities such as `max-w-124`, `aspect-653/570`, and `translate-y-10` over equivalent arbitrary values. Keep arbitrary values only when they represent a genuinely custom measurement or expression.
- In VS Code, install **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`). Workspace settings select its CSS language mode so Tailwind directives are understood and recognize classes passed to `cn`, `cva`, and `buttonVariants`. Tailwind diagnostics remain enabled; ESLint alone does not check Tailwind's canonical-class suggestions.

### Illustration maintenance

The hero loads `/images/home/hero/illustration-1.svg`. Preserve that filename's capitalization for case-sensitive deployment environments. Its GSAP timeline depends on these group IDs:

```text
chip-l1-base, chip-l2-board, chip-l3-mechanics, chip-l3-posts,
chip-l4-core, chip-l5-cover, chip-guides, card-dashboard, card-document,
server-l1-base, server-l2, server-l3, server-l4-top
```

Keep those IDs when replacing or re-exporting the SVG, or update the selectors and timeline in `HomeHero.tsx` together.

The server layers use nested SVG groups with resting offsets of 0, 17, 34, and 51 units. Keep those offsets when editing the asset: the timeline expands the layers from that compact resting pose while keeping the top layer inside the SVG viewport.

## Deployment

Deploy on Vercel or another host that supports the configured Next.js version. For a Node.js deployment, run:

```bash
npm ci
npm run build
npm start
```

The current homepage is prerendered during the production build. Before a public launch, implement the navigation's destination sections, replace the footer placeholder, connect a real consultation/contact flow, and review the favicon and any social-sharing assets.

## Notes for contributors and coding agents

Follow `AGENTS.md`. This repository's installed Next.js version includes its own guides in `node_modules/next/dist/docs/`; read the relevant guides before changing framework APIs or configuration rather than relying on older Next.js conventions.
