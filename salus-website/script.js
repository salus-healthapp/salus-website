// SALUS website — small helpers only (no libraries, loads instantly)

// 1. Mobile menu
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = open ? '✕' : '☰';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  }));
}

// 2. Copy email button
const copyBtn = document.getElementById('copyBtn');
const emailText = document.getElementById('emailText');
const copied = document.getElementById('copied');
if (copyBtn && emailText) {
  copyBtn.addEventListener('click', async () => {
    const email = emailText.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      copied.textContent = 'Copied!';
    } catch (e) {
      const r = document.createRange();
      r.selectNodeContents(emailText);
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      copied.textContent = 'Selected, press Ctrl+C';
    }
    setTimeout(() => (copied.textContent = ''), 2500);
  });
}

// 3. Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
