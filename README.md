# Hanumant Kshirsagar — Portfolio

A personal portfolio built with React, TypeScript, Tailwind CSS and Vite.
It has a top navigation bar and a light/dark theme toggle (it follows your system setting first, then remembers your choice).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Requires Node.js 18 or newer.

## Edit your content

Everything lives in `src/data.ts`: profile, about, education, skills, experience, projects, research, achievements.

- **Resume:** replace `public/Hanumant_Kshirsagar_Resume.pdf` (keep the file name or update `profile.resume`).
- **Photo:** replace `public/images/profile-photo.jpg` with a higher-resolution picture (the one pulled from the resume PDF is only 200x200).
- **Project links:** add `github` and `live` to a project in `data.ts`. Hovering the preview then shows the buttons.
- **Screenshots:** drop an image into `public/images/` and set `image: "/images/name.png"` on a project to replace the built-in preview.
- **Colours:** change the tokens at the top of `src/index.css` (one set for light, one for dark).

## Deploy

Import the repo in Vercel or Netlify. Build command `npm run build`, output directory `dist`.
