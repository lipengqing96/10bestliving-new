(function() {
  'use strict';
  const STORAGE_KEY = 'site-lang';
  const COOKIE_NAME = 'lang-preference';
  
  const T = {
    'zh-TW': {
      nav_home: '首頁',
      nav_categories: '分類',
      nav_blog: '評測文章',
      nav_about: '關於我們',
      nav_contact: '聯絡我們',
      nav_browse: '瀏覽評測',
      hero_title: '探索<span class=\"gold-gradient-text\">最佳生活</span>好物',
      hero_subtitle: '精選十大頂尖產品評測，助您做出明智消費選擇-因為您的信任比任何佣金更重要。',
      hero_btn: '開始探索',
      expert_reviews: '專家評論',
      fair_ranking: '公正排名',
      featured_title: '人氣評測',
      editor_picks: '編輯精選',
      browse_all: '查看全部評測',
      browse_review: '瀏覽評測',
      newsletter_tagline: '電子報',
      newsletter_title: '加入5萬位講究品味的購物者',
      newsletter_desc: '每週為您送去精選好物、獨家優惠和專家購買指南。',
      newsletter_placeholder: '請輸入您的電子郵件地址',
      newsletter_btn: '訂閱',
      newsletter_privacy: '絕不濫發郵件。隨時可取消訂閱。我們尊重您的隱私權。',
      cookie_text: '我們使用Cookie以提升體驗並分析網站流量。繼續瀏覽即表示您同意我們的',
      cookie_policy_link: '隱私權政策',
      cookie_btn: '接受',
      blog_hero_title: '最<span class=\"gold-gradient-text\">值得信赖</span>的產品評測',
      blog_hero_subtitle: '每篇評測均由獨立研究與測試完成。我們只推薦真正相信的產品-因為您的信任比任何佣金更重要。',
      categories_page_title: '產品分類',
      about_page_title: '關於10Best Living',
      contact_page_title: '聯絡我們',
      contact_name: '姓名',
      contact_email: '電子郵件',
      contact_message: '留言內容',
      contact_send: '發送訊息',
      footer_desc: '專業產品評測與排名，助您找到最適合的生活好物。',
      footer_links: '快速連結',
      footer_copyright: '\\u00a9 2026 10Best Living. 版權所有。',
      read_time: '分鐘閱讀',
      by_team: '由10Best Living團隊評測',
      share: '分享此評測：',
      back_to_top: '回到頂部',
    },
    'en': {
      nav_home: 'Home',
      nav_categories: 'Categories',
      nav_blog: 'Reviews',
      nav_about: 'About Us',
      nav_contact: 'Contact',
      nav_browse: 'Browse Reviews',
      hero_title: 'Discover the <span class=\"gold-gradient-text\">Best Living</span> Products',
      hero_subtitle: 'Expert top-10 product reviews to help you make smarter purchasing decisions \\u2014 because your trust matters more than any commission.',
      hero_btn: 'Start Exploring',
      expert_reviews: 'Expert Reviews',
      fair_ranking: 'Fair Rankings',
      featured_title: 'Featured Reviews',
      editor_picks: 'Editor Picks',
      browse_all: 'View All Reviews',
      browse_review: 'Read Review',
      newsletter_tagline: 'Newsletter',
      newsletter_title: 'Join 50,000 discerning shoppers',
      newsletter_desc: 'Get curated picks, exclusive deals, and expert buying guides delivered weekly.',
      newsletter_placeholder: 'Enter your email address',
      newsletter_btn: 'Subscribe',
      newsletter_privacy: 'No spam. Unsubscribe anytime. We respect your privacy.',
      cookie_text: 'We use cookies to enhance your experience and analyze site traffic. By continuing to browse, you agree to our',
      cookie_policy_link: 'Privacy Policy',
      cookie_btn: 'Accept',
      blog_hero_title: 'The Most <span class=\"gold-gradient-text\">Trustworthy</span> Product Reviews',
      blog_hero_subtitle: 'Every review is independently researched and tested. We only recommend products we truly believe in \\u2014 because your trust matters more than any commission.',
      categories_page_title: 'Product Categories',
      about_page_title: 'About 10Best Living',
      contact_page_title: 'Contact Us',
      contact_name: 'Name',
      contact_email: 'Email',
      contact_message: 'Message',
      contact_send: 'Send Message',
      footer_desc: 'Professional product reviews and rankings to help you find the best living essentials.',
      footer_links: 'Quick Links',
      footer_copyright: '\\u00a9 2026 10Best Living. All rights reserved.',
      read_time: ' min read',
      by_team: 'By 10Best Living Team',
      share: 'Share this review:',
      back_to_top: 'Back to top',
    }
  };
  
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
    const dict = T[lang] || T['zh-TW'];
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-TW' : 'en';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key]) {
        el.placeholder = dict[key];
      }
    });
    
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('bg-gold','text-dark');
        btn.classList.remove('text-text-muted','text-gray-300');
      } else {
        btn.classList.remove('bg-gold','text-dark');
        btn.classList.add('text-text-muted');
      }
    });
  }
  
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      applyLang(getLang());
      document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
      });
    });
    window.__setLang = setLang;
    window.__getLang = getLang;
  }
})();