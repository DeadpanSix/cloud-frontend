# `cloud-frontend`

<h2 align="center">
  <img height="256" width="256" src="./src/assets/preact.svg">
</h2>

<h3 align="center">Using Preact and Vite!</h3>

## Getting Started

-   `npm run dev` - Starts a dev server at http://localhost:5173/

-   `npm run build` - Builds for production, emitting to `dist/`. Prerenders all found routes in app to static HTML

-   `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

## To add a new page you must follow the next filesx

- Create a new FOLDER under the folder `src/pages` and a `single-component.jsx` inside his own folder to be loaded on the next files as a whole page.

- Example `src/pages/FileUpload/file-upload.jsx`.

- `vite.config.js` - Plugin renderer for preact. Need to search more online to get more data about it.

- `index.jsx` - Adds the route for the new page on the site, follow the on-file steps.

- `Header.jsx` - Adds the link on the navbar, follow the on-file steps.

- This whole page must be shattered into smaller componentes under the `src/components` folder.

- Example; `src/components/file-upload/email-to.jsx`
