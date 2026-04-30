# Nabeela K — Portfolio Website

A personal developer portfolio built with pure HTML, CSS & JavaScript.  
**Theme:** Deep Navy + Teal/Cyan + Amber  
**Fonts:** Syne (display) + JetBrains Mono (code)

---

## 📁 Folder Structure

```
nabeela-portfolio/
├── index.html          ← Main HTML file
├── css/
│   └── style.css       ← All styles + CSS variables
├── js/
│   └── main.js         ← Typed animation, scroll reveal, nav, form
├── assets/             ← Put your photo here (photo.jpg)
└── README.md
```

---

## 🖼️ Adding Your Photo

1. Add your photo to the `assets/` folder (e.g. `assets/photo.jpg`)
2. Open `index.html` and find this block inside the `profile-card`:

```html
<!-- Replace with your image: <img src="assets/photo.jpg" alt="Nabeela" /> -->
<div class="avatar-initials">NK</div>
```

3. Replace it with:

```html
<img src="assets/photo.jpg" alt="Nabeela" />
```

---

## 🎨 Changing Colors

All colors are defined as CSS variables at the top of `css/style.css`:

```css
:root {
  --bg:       #0a0f1e;   /* Main background */
  --teal:     #00c9a7;   /* Primary accent */
  --cyan:     #38bdf8;   /* Secondary accent */
  --amber:    #f59e0b;   /* Highlight color */
  --text:     #e2ecf8;   /* Body text */
  /* ... */
}
```

Just change those hex values — everything updates automatically.

---

## 🔗 Updating Your Links

Search for these in `index.html` and update them:

| What | Where to update |
|------|----------------|
| GitHub URL | `href="https://github.com/nabeela-k"` |
| Email | `href="mailto:nabeelatrp@gmail.com"` |
| Phone | `href="tel:+917306080669"` |

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it: `nabeela-portfolio` (or `yourusername.github.io` for root site)
3. Set it to **Public**
4. Click **Create repository**

### Step 2 — Push your code

Open VS Code terminal (`Ctrl + \``) and run:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio commit"

# Connect to your GitHub repo (replace with your URL)
git remote add origin https://github.com/nabeela-k/nabeela-portfolio.git

# Push
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, Folder: `/ (root)`
5. Click **Save**

Your site will be live at:  
`https://nabeela-k.github.io/nabeela-portfolio/`

(Takes 1–2 minutes to go live after first push)

---

## ✏️ Editing Content

All content is in `index.html`. Each section is clearly labelled with comments:

- `<!-- NAV -->` — Navigation bar
- `<!-- HERO -->` — Landing section
- `<!-- ABOUT -->` — About me
- `<!-- SKILLS -->` — Tech stack
- `<!-- PROJECTS -->` — Project cards
- `<!-- EDUCATION -->` — Academic background
- `<!-- CERTIFICATIONS -->` — Certs
- `<!-- CONTACT -->` — Contact form & links
- `<!-- FOOTER -->` — Footer

---

## 📦 No build tools needed

This is plain HTML/CSS/JS — no npm, no webpack, no React.  
Just open `index.html` in a browser or use the VS Code **Live Server** extension.

---

Made with 💙 by Nabeela Kavungakandi
