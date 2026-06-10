# Project AI Instructions

## What this project is

- A React Router full-stack app using React 19, TypeScript, Tailwind CSS, DaisyUI, and Vite.
- Source is in `app/`; generated route types are in `.react-router/types/`.
- Output is built into `build/` by `react-router build` and served with `react-router-serve`.

## Primary commands

- `npm install` - install dependencies
- `npm run dev` - start local development server with HMR
- `npm run build` - build the app for production
- `npm run start` - run the production server from `build/server/index.js`

## Key file and folder conventions

- `app/root.tsx` - top-level layout, metadata links, `Outlet`, and error boundary.
- `app/routes/` - route entry files; each file maps to a route.
- `app/components/core/` - main reusable UI and page components.
- `app/components/core/welcome/welcome.tsx` - home hero and introductory content.
- `app/components/core/about-us/` - staff/profile content components.
- `app/components/core/family-law/` - family law service pages.
- `.react-router/types/` - auto-generated route and type definitions. Do not edit manually.
- `build/` - generated production output. Changes should not be made here directly.

## Styling and UI

- Tailwind CSS is configured via `@tailwindcss/vite` in `vite.config.ts`.
- DaisyUI is installed and used for component styling.
- `app.css` contains the project stylesheet.

## What agents should do first

- Use the existing scripts in `package.json` for dev/build tasks.
- Preserve the React Router route structure and generated `.react-router/types/` files.
- Prefer editing source files under `app/`.
- Avoid modifying `build/` output or `.react-router/types/` generated artifacts.

## Useful context

- This project is based on the React Router app template and uses the React Router developer tooling.
- The project has no separate backend source directory; it is server-rendered through React Router.
