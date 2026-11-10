(function () {
  var root = document.documentElement;

  // Theme toggle: cycles light/dark, remembered per browser.
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu.
  var menuBtn = document.querySelector('.menu-toggle');
  var list = document.getElementById('nav-list');
  if (menuBtn && list) menuBtn.addEventListener('click', function () {
    var open = list.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Resume track filter (Science / Engineering / Data / Fitness).
  var resume = document.querySelector('[data-resume]');
  if (resume) {
    var chips = resume.querySelectorAll('[data-set-filter]');
    var titleEl = resume.querySelector('[data-resume-title]');
    var apply = function (track, push) {
      var chip = resume.querySelector('[data-set-filter="' + track + '"]') || chips[0];
      track = chip.getAttribute('data-set-filter');
      resume.setAttribute('data-filter', track);
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      if (titleEl && chip.dataset.title) titleEl.textContent = chip.dataset.title;
      if (push) history.replaceState(null, '', track === 'all' ? location.pathname : '#' + track);
    };
    chips.forEach(function (c) {
      c.addEventListener('click', function () { apply(c.getAttribute('data-set-filter'), true); });
    });
    apply((location.hash || '#all').slice(1), false);
    var printBtn = resume.querySelector('[data-print]');
    if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
  }
})();
