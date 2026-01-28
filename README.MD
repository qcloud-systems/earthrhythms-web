
---

# 🌍 **Earthrhythms Web**  
*A visual and sonic exploration of Earth’s natural cycles*

Earthrhythms Web is an interactive experience that blends **data visualization**, **sonification**, and **narrative content** to reveal the hidden rhythms of our planet — tides, lunar phases, seasons, and long‑term environmental patterns. Built with **Vite**, **React**, and **TypeScript**, the project emphasizes clarity, speed, and expressive storytelling.

---

## 🏞️ **Screenshots**

> Replace these with your own images once deployed.

```
![Home Page](docs/screenshots/home.png)
![Tidal Visualization](docs/screenshots/tides.png)
![Audio Page](docs/screenshots/audio.png)
```

---

## ✨ **Features**

- Interactive visualizations of natural cycles  
- Audio & sonification of environmental datasets  
- Markdown‑driven content for easy editing  
- Fast Vite + React + TypeScript stack  
- Automatic deployment to GitHub Pages  
- Clean, modular project structure  

---

## 📁 **Project Structure**

```
earthrhythms-web/
  public/
    audio/               # Static audio files served at /audio/*
  src/
    components/          # React components
    content/             # Markdown content files
    pages/               # Page components
  index.html
  package.json
  vite.config.ts
```

---

## 🎧 **Audio Files**

All audio files must be placed in:

```
public/audio/
```

And referenced like:

```html
<audio controls src="/audio/Five-Decades-In-September.mp3"></audio>
```

Vite automatically rewrites paths for GitHub Pages based on your `base` setting.

---

## 🚀 **Local Development**

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌐 **Automatic Deployment (GitHub Pages + GitHub Actions)**

This project deploys automatically whenever you push to the **main** branch.

### 1. Enable GitHub Pages

In your repository:

**Settings → Pages → Build and deployment**

- **Source:** GitHub Actions

### 2. Add the GitHub Actions workflow

Create:

```
.github/workflows/deploy.yml
```

With:

```yaml
name: Deploy Vite site to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Deploy

Just push to `main`:

```bash
git add .
git commit -m "Update site"
git push
```

GitHub Actions will:

1. Install dependencies  
2. Build the Vite site  
3. Upload the `dist/` folder  
4. Deploy it to GitHub Pages  

Your live site will be available at:

```
https://qcloud-systems.github.io/earthrhythms-web/
```

---

## 🤝 **Contributing**

Contributions are welcome. To contribute:

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Open a pull request  

---

## 📜 **License**

MIT License (or your preferred license)

---
Notes:
```
npm install react react-dom react-router-dom react-markdown
npm install -D typescript @types/react @types/react-dom @types/react-router-dom

npm install vite-plugin-raw
npm install @vitejs/plugin-react
```
