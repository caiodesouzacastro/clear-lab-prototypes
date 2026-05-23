// CLEAR Lab Prototypes — comportamento compartilhado

(function() {
  // Theme persistence
  const saved = localStorage.getItem('clear-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  window.toggleTheme = function() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('clear-theme', next);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = next === 'dark' ? '☀' : '☾';
  };

  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = saved === 'dark' ? '☀' : '☾';
  });
})();
