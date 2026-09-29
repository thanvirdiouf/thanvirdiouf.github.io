(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme;
  try { savedTheme = localStorage.getItem('td-theme'); } catch (_) { /* Storage is optional. */ }
  function setTheme(theme) {
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1d221e' : '#f4f1ea';
  }
  setTheme(['light', 'dark'].includes(savedTheme) ? savedTheme : (preference.matches ? 'dark' : 'light'));
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(savedTheme);
    try { localStorage.setItem('td-theme', savedTheme); } catch (_) { /* Keep the in-memory selection. */ }
  });
  preference.addEventListener('change', event => {
    if (!savedTheme) setTheme(event.matches ? 'dark' : 'light');
  });
  const filters = document.querySelector('.filters');
  const projects = [...document.querySelectorAll('.project')];
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach(project => { project.hidden = category !== 'all' && project.dataset.category !== category; });
    document.querySelector('#filter-status').textContent = `${projects.filter(project => !project.hidden).length} projects shown.`;
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
