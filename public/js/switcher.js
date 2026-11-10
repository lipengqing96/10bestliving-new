(function() {
  'use strict';
  const STORAGE_KEY = 'site-lang';
  const COOKIE_NAME = 'lang-preference';
  let dict = {};
  

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) ||
             (document.cookie.match('(?:^|; )' + COOKIE_NAME + '=([^;]*)') || [])[1] ||
             'zh-TW';
    } catch(e) { return 'zh-TW'; }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.cookie = COOKIE_NAME + '=' + lang + ';path=/;max-age=31536000';
    } catch(e) {}
    applyLang(lang);
  }

  function applyLang(lang) {
    if (!dict[lang]) return;
    const d = dict[lang];
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-TW' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && d[key] !== undefined) el.innerHTML = d[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && d[key] !== undefined) el.placeholder = d[key];
    });

    document.querySelectorAll('[data-i18n-feat]').forEach(el => {
      const fidx = parseInt(el.getAttribute('data-i18n-feat'));
      const ftype = el.getAttribute('data-i18n-type');
      const key = 'feat_' + (fidx + 1) + '_' + ftype;
      if (d[key] !== undefined) el.textContent = d[key];
    });

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('bg-gold', 'text-dark');
        btn.classList.remove('text-text-muted', 'text-gray-300');
      } else {
        btn.classList.remove('bg-gold', 'text-dark');
        btn.classList.add('text-text-muted');
      }
    });

    document.querySelectorAll("[data-lang-content]").forEach(function(el) {
      if(el.dataset.langContent===lang){el.classList.remove("hidden")}else{el.classList.add("hidden")}
    });
  }

  async function init() {
    for (const lang of ['zh-TW', 'en']) {
      try {
        const res = await fetch('/js/lang/' + lang + '.json');
        if (res.ok) dict[lang] = await res.json();
      } catch(e) {}
    }
    // Apply AFTER all dictionaries are loaded
    const targetLang = getLang();
    if (dict[targetLang]) applyLang(targetLang);
    else applyLang('zh-TW');

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();
