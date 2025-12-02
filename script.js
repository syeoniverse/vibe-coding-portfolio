// 다크모드 토글
const themeToggle = document.getElementById('themeToggle');
const bodyEl = document.getElementById('page-body');

if (themeToggle && bodyEl) {
  themeToggle.addEventListener('click', () => {
    const isDark = bodyEl.classList.toggle('bg-dark');
    bodyEl.classList.toggle('text-slate-100', isDark);
    bodyEl.classList.toggle('bg-cream', !isDark);
    themeToggle.textContent = isDark ? 'Light' : 'Dark';
  });
}

// 부드러운 스크롤
const portfolioBtn = document.getElementById('viewWorkBtn');
const contactBtn = document.getElementById('contactBtn');

if (portfolioBtn) {
  portfolioBtn.addEventListener('click', () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  });
}

if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}


