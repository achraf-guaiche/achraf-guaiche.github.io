# Deploying a Vite React App to GitHub Pages

This guide explains how to build and publish your Vite React project to **GitHub Pages**, and how to republish it if it gets unpublished.

---

## 1️⃣ Configure `vite.config.js`
Edit `vite.config.js` and set the correct **base** path:

- If your repo name is **`my-app`**:
```js
base: '/my-app/'
```

- If your repo name is `username.github.io`:
```js
base: '/'
```

Example:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REPO-NAME/' // change this to match your repo
})
```

---

## 2️⃣ Install Deployment Tool

We’ll use the `gh-pages` package to push the build to GitHub.
```bash
npm install --save-dev gh-pages
```

---

## 3️⃣ Add Scripts to package.json
Open `package.json` and add:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 4️⃣ First Deployment
```bash
npm run deploy
```
This will:
1. Build the app (`npm run build`)
2. Push the `dist/` folder to a branch called `gh-pages`

---

## 5️⃣ Enable GitHub Pages
1. Go to your repository on GitHub.
2. Navigate to Settings → Pages.
3. Under Source, select:
    - Branch: gh-pages
    - Folder: / (root)
4. Save.

---

## 6️⃣ Redeploy if Unpublished
If your page is unpublished for any reason, just run:
```bash
npm run deploy
```

---

Then verify that GitHub Pages is still enabled on the `gh-pages` branch.

## 7️⃣ View Your Site
After a minute, your app will be live at:
```cpp
https://USERNAME.github.io/REPO-NAME/
```

---

## 🛠 Common Issues
- Wrong MIME type: Make sure `base` in `vite.config.js` matches your repo name.
- 404 errors on reload: GitHub Pages doesn’t handle client-side routing by default. Consider adding a `404.html` copy of `index.html`.