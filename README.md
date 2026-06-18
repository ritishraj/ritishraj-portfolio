# 🚀 Ritish Raj — Portfolio

**Live at:** `https://ritishraj.github.io/` *(after deployment)*

A professional portfolio website built with clean, separated HTML / CSS / JS — ready to deploy on GitHub Pages in under 5 minutes.

---

## 📁 Project Structure

```
ritishraj-portfolio/
├── index.html          ← Main HTML (all sections)
├── css/
│   └── styles.css      ← All styles, variables, responsive rules
├── js/
│   └── main.js         ← Cursor, canvas, scroll, animations
├── assets/             ← Add your images / resume PDF here
│   └── (empty — add resume.pdf here)
└── README.md           ← This file
```

---

## ✨ Features

- 🎨 **Premium dark design** — deep navy + blue/violet gradients
- 🖱️ **Custom cursor** with smooth trailing ring animation
- 🌐 **Particle network background** (canvas-based, animated)
- ⌨️ **Typewriter effect** on hero subtitle
- 📜 **Scroll progress bar** at the top
- 🔁 **Scroll reveal animations** on every section
- 🔗 **Active nav link** highlighting on scroll
- 📱 **Fully responsive** — mobile, tablet, desktop
- ♿ **Respects prefers-reduced-motion**

---

## 🚀 Deploy to GitHub Pages — Step by Step

### Step 1 — Create the Repository

1. Go to [github.com](https://github.com) and log in as **ritishraj**
2. Click **"New"** (green button, top left)
3. Repository name: **`ritishraj.github.io`**
   > ⚠️ Name must match exactly: `<your-username>.github.io`
4. Set to **Public**
5. Leave all other options as default
6. Click **"Create repository"**

---

### Step 2 — Upload Your Files

#### Option A — Upload via GitHub website (easiest)

1. Open your new repo: `github.com/ritishraj/ritishraj.github.io`
2. Click **"uploading an existing file"** or drag & drop
3. Upload these files maintaining the folder structure:
   ```
   index.html
   css/styles.css
   js/main.js
   README.md
   ```
4. Scroll down → write commit message: `"Initial portfolio deploy"`
5. Click **"Commit changes"**

#### Option B — Via Git command line

```bash
# 1. Clone your new empty repo
git clone https://github.com/ritishraj/ritishraj.github.io.git

# 2. Copy all portfolio files into the cloned folder
cp -r ritishraj-portfolio/* ritishraj.github.io/

# 3. Navigate into it
cd ritishraj.github.io

# 4. Stage everything
git add .

# 5. Commit
git commit -m "🚀 Initial portfolio deploy"

# 6. Push to GitHub
git push origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repo: `github.com/ritishraj/ritishraj.github.io`
2. Click **"Settings"** tab (top right area)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"** → select **"Deploy from a branch"**
5. Branch: **`main`** / Folder: **`/ (root)`**
6. Click **"Save"**

---

### Step 4 — Wait & Visit 🎉

- GitHub Pages takes **1–3 minutes** to build
- Visit: **`https://ritishraj.github.io/`**
- You'll see a green ✅ checkmark in the Actions tab when it's live

---

## 🔄 How to Update Your Portfolio Later

Whenever you want to update:

```bash
# Edit index.html or css/styles.css or js/main.js
# Then:

git add .
git commit -m "Update: added new project XYZ"
git push origin main

# GitHub Pages auto-rebuilds in ~1 minute
```

---

## 📄 Adding Your Resume PDF

1. Put your resume PDF in the `assets/` folder → rename it `resume.pdf`
2. Add this button anywhere in `index.html`:
   ```html
   <a href="assets/resume.pdf" download class="bta">Download Resume ↓</a>
   ```
3. Commit and push — done!

---

## 🛠️ Customization Guide

| What to change | Where |
|---|---|
| Name, bio, links | `index.html` — Hero section |
| Colors / fonts | `css/styles.css` — `:root` variables |
| Project cards | `index.html` — Projects section |
| Particle count | `js/main.js` — `length: 80` |
| Animation speed | `js/main.js` — typewriter `18` ms |
| Nav links | `index.html` — `<nav>` → `<ul class="nul">` |

---

## 📬 Contact

- **Email:** ritishbarnwal2004@gmail.com
- **GitHub:** [github.com/ritishraj](https://github.com/ritishraj)
- **LinkedIn:** [linkedin.com/in/ritish-raj](https://linkedin.com/in/ritish-raj)

---

*Built with ❤️ by Ritish Raj · 2026*
