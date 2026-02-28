# Vishal Portfolio (Interactive)

This is a deployable React + Tailwind + Framer Motion + Three.js portfolio.

## Run locally (Windows)

1) Install Node.js LTS.
2) Open PowerShell in this folder.

```powershell
npm install
npm run dev
```

Open the URL shown (usually http://localhost:5173).

## Build + Preview

```powershell
npm run build
npm run preview
```

## Deploy (Vercel)

- Push this folder to a GitHub repo
- Import the repo in Vercel
- Framework: Vite
- Build command: `npm run build`
- Output: `dist`

## Customize

- Projects live in `src/data/projects.ts`
- Replace empty `github` / `live` links
- Update hero copy in `src/components/Hero.tsx`

## Notes

- `public/resume.pdf` is already wired to the Resume button.
- The Three.js orb is lightweight and respects `prefers-reduced-motion`.
