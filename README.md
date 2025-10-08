# Network Infrastructure Website

A professional website for network infrastructure solutions, featuring products, services, and company information.

## 🚀 Deploy to GitHub Pages

This repository contains a static HTML/CSS/JavaScript website ready for GitHub Pages deployment.

### Quick Deployment Steps:

1. **Prepare the files:**
   - Rename `public/index-static.html` to `index.html`
   - Keep `styles.css` and `script.js` in the same directory
   - Move all three files to root OR use the public/docs folder approach below

2. **Option A - Deploy from Root:**
   ```sh
   # Move files to root
   mv public/index-static.html index.html
   mv public/styles.css styles.css
   mv public/script.js script.js
   
   # Push to GitHub
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```
   
   Then in GitHub: Settings → Pages → Source: "Deploy from branch" → Branch: `main` / `root`

3. **Option B - Deploy from /public folder (Easier):**
   - Just rename `index-static.html` to `index.html` inside the public folder
   - Push to GitHub
   - In GitHub: Settings → Pages → Source: Branch `main` / `/public`

Your site will be live at: `https://[your-username].github.io/[repository-name]`

## 📁 Project Structure

```
├── public/
│   ├── index-static.html  # Main HTML file (rename to index.html)
│   ├── styles.css         # All styling
│   ├── script.js          # Interactive functionality
│   └── robots.txt         # SEO configuration
└── README.md
```

## ✨ Features

- ✅ Fully responsive design
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Smooth scrolling between sections
- ✅ Interactive contact form
- ✅ Professional warm brown/tan theme
- ✅ SEO optimized with meta tags
- ✅ Social media integration ready

## 🛠️ Local Development

To view the website locally:

```sh
# Option 1: Direct file open
# Simply open public/index-static.html in your browser

# Option 2: Local server (recommended)
cd public
python -m http.server 8000
# Visit http://localhost:8000

# Option 3: Using Node.js
npx serve public
```

## 🎨 Customization Guide

### Change Colors
Edit CSS variables in `public/styles.css` (lines 8-19):
```css
:root {
    --color-primary: hsl(25, 60%, 35%);  /* Main brand color */
    --color-accent: hsl(210, 80%, 45%);  /* Accent color */
}
```

### Update Content
- Edit text directly in `public/index-static.html`
- Replace placeholder images with your own
- Update contact information in the footer

### Modify Form Behavior
Edit `public/script.js` (lines 8-28) to connect to your backend or email service

## 📱 React Version

This repository also includes a React/TypeScript version with the same design:

```sh
npm install
npm run dev
```

Visit the [Lovable Project](https://lovable.dev/projects/0b1b139d-d137-43bf-b737-d19c611ace3b) for the React version.

## 📄 License

Open source - free for personal and commercial use.
