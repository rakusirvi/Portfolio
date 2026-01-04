<!-- Copilot instructions tailored to this React + Vite portfolio project -->
# Copilot / AI assistant instructions

Purpose: Give concise, actionable guidance an AI coding agent needs to be productive in this repository.

- Project type: Single-page React app created with Vite. Entry: `src/main.jsx` -> `src/App.jsx` (routes).
- Build & dev commands: use `npm run dev` (vite dev server), `npm run build` (vite build), `npm run preview` (serve build), `npm run lint` (eslint).
- Styling toolchain: Tailwind CSS with `@tailwindcss/vite` plugin. See `vite.config.js` and `package.json`.

Big picture
- Client-only portfolio site (no server code in repo). Data (projects, certifications) are provided from `src/assets/assets.js` and imported as modules.
- App structure: layout components (`src/Components/*`) wrap routes defined in `src/App.jsx`. Pages live in `src/Pages/*`.
- Routing: uses `react-router-dom` (v7). Routes are defined in `App.jsx` and expect `path="/projects/:id"` for project details.

Key files to inspect first
- `src/main.jsx`: app bootstrap and `BrowserRouter` usage.
- `src/App.jsx`: route table and global layout (Navbar, Footer, Toaster).
- `src/assets/assets.js`: canonical source of project and certification data (edit here to change displayed projects).
- `src/Components/ProjectCard.jsx` and `src/Components/ProjectSection.jsx`: examples of navigation (`useNavigate`) and how `projects.id` is used to link to `/projects/:id`.
- `src/Components/Navbar.jsx`: layout conventions (fixed top, conditional color based on route). Useful when adding new pages or anchor links.

Project-specific conventions & patterns
- File naming: components and pages use PascalCase and default exports.
- Data-as-modules: images and project metadata are imported and exported from `src/assets/assets.js` (not fetched from an API).
- Navigation patterns: `useNavigate()` and `navigate('/projects/${id}')` for intra-app linking; some anchors use `href="#Section"` + `window.scrollTo(0,0)` for top reset.
- Styling: utility-first Tailwind classes in `className`. Button and card styles follow consistent class groupings (see `ProjectCard.jsx` for examples).
- Images: static imports (e.g., `import QuickShow from './ProjectImages/QuickShow.png'`) — Vite handles them as modules.

Build/dev notes for agents
- To start development with HMR: `npm run dev`. Default port is Vite's (typically `5173`).
- To test a production build locally: `npm run build` then `npm run preview`.
- Linting: `npm run lint` runs ESLint over the repo root.

What to change where (common edits)
- Add/remove projects: edit `src/assets/assets.js` (update `projects` array). Thumbnails are imported at top of that file.
- Add a page: create `src/Pages/MyPage.jsx`, export default, then add a `<Route>` in `src/App.jsx` and a link in `src/Components/Navbar.jsx` if needed.
- Add a component: place in `src/Components/`, use PascalCase and default export.

Debugging tips
- If a component fails to render, check console errors and confirm named/default imports match file exports.
- If images fail to load, ensure import path in `src/assets/` is correct and rebuild dev server.
- For route problems, inspect `App.jsx` and confirm `BrowserRouter` is used in `src/main.jsx`.

Integration points / external deps
- No backend — site is static. Live demo links in `assets.js` point to external URLs (GitHub Pages, etc.).
- Key dependencies: `react`, `react-dom`, `react-router-dom`, `tailwindcss`, `@vitejs/plugin-react`, `@tailwindcss/vite`.

Testing & CI
- There are no tests or CI pipelines in the repo. Follow local `npm run lint` before creating PRs.

Notes for Copilot-style code generation
- Preserve existing className/Tailwind style groups; follow the component structure (small presentational components under `src/Components/`).
- Use `projects` from `src/assets/assets.js` when creating sample UI or storybook-style examples.
- Keep routes consistent with `App.jsx`. Use `useNavigate` for programmatic navigation.

If unsure about intent, ask the human: e.g., "Should a new page be client route-only, or does it require fetching external data?"

Feedback request: If any part of this draft is missing project-specific details you expect, please point to files to include and I will update the guidance.
