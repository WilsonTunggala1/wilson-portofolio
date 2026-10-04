# Wilson Tunggala — Portfolio

A minimal, single-page CV-style portfolio built with Next.js, TypeScript, and Tailwind CSS. Off-white background, serif headings, muted green accents, and simple résumé sections. All six projects are included.

## Run

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run typecheck
npm run build
npm start
```

## Edit content

- app/page.tsx — biography, education, experience, skills, certifications, and contact.
- data/projects.ts — project descriptions, technologies, and GitHub links.
- app/globals.css — colors, typography, spacing, responsive and print styles.
- public/Wilson_Pranajaya_Tunggala_CV.pdf — downloadable CV.

Navbar buttons scroll to sections without changing the URL. The page also includes education and certifications. The mobile menu closes on selection or Escape.

## Add project screenshots

Images are optional. Without an image, a project renders as a simple text card with no placeholder.

1. Put your PNG, JPG, or WebP in public/projects, for example public/projects/ride-pipeline.png.
2. Add an image field to the matching entry in data/projects.ts:

```ts
image: {
  src: "/projects/ride-pipeline.png",
  alt: "Ride-hailing dashboard showing demand across NYC",
},
```

Use the exact filename, including capitalization. The image appears above the project title at its natural aspect ratio. Describe the screenshot in the alt text. Repeat for any projects you want to illustrate.

## GitHub version control

Create an empty GitHub repository, then:

```bash
git init
git add .
git commit -m "Build minimalist portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_PORTFOLIO_REPOSITORY.git
git push -u origin main
```

Replace the remote URL. Commit package-lock.json. Dependencies, build output, and environment files are excluded by .gitignore.

Content is based on Wilson's supplied CV and repository READMEs. The AWS project's infrastructure is no longer active according to its README; links point to source code. No backend or environment variables are needed.