EarthRhythms Web

EarthRhythms Web is a Vite + React + TypeScript project designed to present a collection of Markdown‑driven content pages (Home, Tides, Cycles, EarthRhythms, Audio, About) inside a simple layout with client‑side routing. The project uses React Router for navigation and React Markdown to render .md files as HTML.

This README summarizes the project structure, describes the purpose of the application, and documents the recovery steps taken to restore a working build after configuration and dependency issues.

Project Description

EarthRhythms Web is a lightweight content‑driven site. Each page loads its content from a Markdown file stored in src/content/. The application uses:

React for UI components

React Router for navigation

React Markdown for rendering Markdown content

Vite for fast development and optimized production builds

TypeScript for type safety

The site layout includes a header with navigation links and a main content area where Markdown pages are rendered.

File Structure

earthrhythms-web/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Tides.tsx
│   │   ├── Cycles.tsx
│   │   ├── EarthRhythms.tsx
│   │   ├── Audio.tsx
│   │   └── About.tsx
│   └── content/
│       ├── home.md
│       ├── tides.md
│       ├── cycles.md
│       ├── earthrhythms.md
│       ├── audio.md
│       └── about.md
└── public/

Build Recovery Summary

The project required several fixes to restore a working build environment. These steps are documented here for future reference.

1. Restored TypeScript JSX Support

A valid tsconfig.json was recreated to enable JSX and ensure Vite + React + TypeScript compatibility. A tsconfig.node.json file was also restored.

2. Reinstalled Missing Dependencies

Core packages were missing due to earlier branch merges. The following were reinstalled:

react, react-dom

react-router-dom

react-markdown

@vitejs/plugin-react

TypeScript type definitions

A clean reinstall was performed:

pm install

3. Fixed Markdown Imports (.md?raw)

Vite supports raw imports natively, but TypeScript required a declaration. Added:

// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module "*.md?raw" {
  const content: string
  export default content
}

4. Removed vite-plugin-raw

The plugin was incompatible with Vite 7 and caused build failures. It was removed from both the config and dependencies.

Updated vite.config.ts:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/earthrhythms-web/',
})

5. Verified Markdown Content Files

All required .md files were confirmed present in src/content/ with correct lowercase filenames.

6. Successful Build

After restoring configuration and dependencies, the project builds successfully using:

npm run build

Development

Start the development server:

npm run dev

Build for production:

npm run build

Preview the production build:

npm run preview

Deployment

The project is configured for GitHub Pages using:

base: '/earthrhythms-web/'

Ensure the repository name matches this base path.

Notes

Markdown files must remain in src/content/ with lowercase filenames.

The vite-env.d.ts declaration is required for TypeScript to accept .md?raw imports.

No additional Vite plugins are required for raw Markdown loading.

EarthRhythms Web is now fully restored and ready for development and deployment.
