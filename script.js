document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const input = document.getElementById('search');
  const msg = document.getElementById('searchMsg');
  const clearBtn = document.getElementById('clearBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      if (!input.value.trim()) {
        e.preventDefault();
        msg.textContent = 'Please enter a search term.';
        msg.classList.add('error');
        input.focus();
        return;
      }
      // allow form to submit to Google; if you prefer open in new tab, uncomment:
      // e.preventDefault();
      // window.open('https://www.google.com/search?q=' + encodeURIComponent(input.value.trim()), '_blank');
      msg.textContent = '';
      msg.classList.remove('error');
    });

    clearBtn && clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
      msg.textContent = '';
      msg.classList.remove('error');
    });
  }

  // Small helper: add "visited" class to HTML nav links when clicked
  document.querySelectorAll('a[href$=".html"]').forEach((a) => {
    a.addEventListener('click', () => a.classList.add('visited'));
  });

  // Simple keyboard shortcut: focus search with / key
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      const s = document.getElementById('search');
      if (s) {
        e.preventDefault();
        s.focus();
      }
    }
  });
});