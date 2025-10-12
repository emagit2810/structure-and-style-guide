# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1bc2a5b4-4003-4324-9736-64f5cf1048f9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1bc2a5b4-4003-4324-9736-64f5cf1048f9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1bc2a5b4-4003-4324-9736-64f5cf1048f9) and click on Share -> Publish.

### Configure the base URL

The application detects the correct URL automatically. During development it uses `window.location.origin`. When building for production the URL defaults to `https://www.bvslab.com/`. You can override this by setting the `VITE_SITE_URL` environment variable.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## ¿Cómo genera Codex las capturas y por qué pueden verse como 404?

- Cuando Codex comparte capturas dentro de la conversación, los archivos se guardan como artefactos temporales del entorno donde se ejecutó la tarea. Esos enlaces dejan de existir al finalizar la sesión, por lo que muestran `404` si intentas abrirlos más tarde.
- No depende de que el proyecto tenga un dominio público en GitHub Pages; las capturas se generan a partir de un servidor de desarrollo local que se levanta con `npm run dev` dentro del contenedor.
- El flujo es: iniciar el servidor (`npm run dev -- --host 0.0.0.0 --port 4173`), abrir esa URL local con Playwright/Chromium y guardar la imagen con un viewport fijo (por ejemplo, 1280×800). Después se adjunta el archivo resultante a la respuesta.
- Si necesitas conservar las capturas, descárgalas antes de que termine la sesión o inclúyelas en el repositorio (por ejemplo, en `public/screenshots/`) para que queden versionadas.

### Generar tus propias capturas

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4173
# En otra terminal (por ejemplo con Playwright):
npx playwright screenshot http://127.0.0.1:4173/equipos equipos.png --width=1280 --height=800
```

También puedes abrir la URL en tu navegador local y capturar manualmente la pantalla.
