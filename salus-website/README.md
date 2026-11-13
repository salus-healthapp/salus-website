# SALUS website

A plain, fast static site: one HTML page, one CSS file, one small JS file. No build step and no frameworks.

## Files
- `index.html`: all page content
- `styles.css`: colours and layout (brand colours are at the top)
- `script.js`: mobile menu, copy-email button, footer year
- `assets/`: logo, favicon, social preview image

## Before going live, change these in index.html
1. **Email**: replace every `salus.app.team@gmail.com` with your real email (use Ctrl+H in Cursor to replace all).
2. **Instagram**: replace `@salus.app` with your real handle.

## Run it on your computer (Cursor)
Option A: right-click `index.html` → **Open with Live Server** (install the "Live Server" extension first).
Option B: in Cursor's terminal, type `npx serve .` and open the link it shows.

## Put it online for free
- **Netlify Drop**: go to app.netlify.com/drop and drag this folder in.
- **Vercel**: push the folder to GitHub, then Import Project at vercel.com (Framework: Other, no build command).
