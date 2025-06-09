# React + Vite

This project is bootstrapped with Vite and React. The site is published on
GitHub Pages at
[https://YeswanthC7.github.io/yeswanth-portfolio](https://YeswanthC7.github.io/yeswanth-portfolio).
The Vite configuration sets `base` to `/yeswanth-portfolio/` so assets resolve
correctly when deployed.

## Usage

### Install dependencies

```bash
npm install
```

### Build the site

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
GH_TOKEN=<your token> npm run deploy
```

### Automatic deployment

A GitHub Actions workflow defined at `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to the `main` branch.


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript
with type-aware lint rules enabled. Check out the
[TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
for information on how to integrate TypeScript and
[`typescript-eslint`](https://typescript-eslint.io) in your project.
