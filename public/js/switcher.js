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
      hero_tagline: '自2026年起值得信賴的評測',
      hero_title_part1: '發現並體驗',
      hero_title_part2: '世界頂級',
      hero_title_en: 'Products',
      hero_subtitle: '為追求卓越品質的你，精心篩選評測、專家洞見與仔細排名的優質商品。',
      hero_btn_browse: '瀏覽評測',
      hero_btn_categories: '瀏覽分類',
      trust_products: '500+款產品實測',
      expert_reviews: '專家評論',
      fair_ranking: '公正排名',
      featured_title: '編輯精選',
      editor_picks: '編輯精選',
      best_value: '最佳性價比',
      our_pick: '我們的推薦',
      top_choice: '首選之選',
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
      blog_hero_title: '最<span class="gold-gradient-text">值得信賴</span>的產品評測',
      blog_hero_subtitle: '每篇評測均由獨立研究與測試完成。我們只推薦真正相信的產品——因為您的信任比任何佣金更重要。',
      categories_page_title: '產品分類',
      about_page_title: '關於10Best Living',
      contact_page_title: '聯絡我們',
      footer_copyright: '\u00a9 2026 10Best Living. 版權所有。',
      read_time_suffix: '分鐘閱讀',
      by_team: '由10Best Living團隊評測',
      share: '分享此評測：',
      back_to_top: '回到頂部',
      cat_home_kitchen: '居家與廚房',
      cat_fitness_health: '健身與健康',
      cat_smart_home: '智能家居',
      cat_beauty: '美容護理',
      cat_outdoor: '戶外與旅行',
      cat_sports: '運動用品',
      cat_cosmetics: '美容化妝品',
      cat_fashion_shoes: '織服鞋帽',
      cat_accessories: '衣服飾物',
      feat_1_title: '十大最佳便攜果汁機鮮果昔攪拌機2026年推薦',
      feat_1_excerpt: '從通勤到健身房，便攜果汁機隨時為你打造新鮮冰沙。',
      feat_1_cat: '居家與廚房',
      feat_1_rt: '5 分鐘閱讀',
      feat_2_title: '十大最佳300美元以內掃地機器人2026年推薦',
      feat_2_excerpt: '智慧清潔不花大錢，我們測試了最具性價比的掃地機器人榜單。',
      feat_2_cat: '智能家居',
      feat_2_rt: '7 分鐘閱讀',
      feat_3_title: '十大最佳瑜伽墊初學者入門2026年推薦',
      feat_3_excerpt: '找到適合每個練習階段的完美瑜伽墊，我們測試了25款產品的抓地力、緩衝和耐用性。',
      feat_3_cat: '健身與健康',
      feat_3_rt: '5 分鐘閱讀',
      feat_4_title: '十大最佳單杯咖啡機2026年推薦',
      feat_4_excerpt: '用最佳膠囊和研磨咖啡機提升您的早晨儀式，價格從40至300美元。',
      feat_4_cat: '居家與廚房',
      feat_4_rt: '6 分鐘閱讀',
      feat_5_title: '十大最佳保溫水壺2026年推薦',
      feat_5_excerpt: '全天保持水分補給，我們測試了18款水壺的保冷能力、耐用性和防漏性能。',
      feat_5_cat: '戶外與旅行',
      feat_5_rt: '5 分鐘閱讀',
      feat_6_title: '十大最佳重力毯改善睡眠2026年推薦',
      feat_6_excerpt: '用深壓刺激療法提升睡眠品質，經測試重量分佈和溫度調節表現。',
      feat_6_cat: '臥室',
      feat_6_rt: '5 分鐘閱讀',
    },
    'en': {
      nav_home: 'Home',
      nav_categories: 'Categories',
      nav_blog: 'Reviews',
      nav_about: 'About Us',
      nav_contact: 'Contact',
      nav_browse: 'Browse Reviews',
      hero_tagline: 'Trusted Reviews Since 2026',
      hero_title_part1: 'Discover and Experience',
      hero_title_part2: 'World-Class',
      hero_title_en: 'Products',
      hero_subtitle: 'Curated top-10 product reviews, expert insights, and fair rankings for those who demand excellence.',
      hero_btn_browse: 'Browse Reviews',
      hero_btn_categories: 'Browse Categories',
      trust_products: '500+ Products Tested',
      expert_reviews: 'Expert Reviews',
      fair_ranking: 'Fair Rankings',
      featured_title: 'Featured Reviews',
      editor_picks: 'Editor Picks',
      best_value: 'Best Value',
      our_pick: 'Our Pick',
      top_choice: 'Top Choice',
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
      blog_hero_title: 'The Most <span class="gold-gradient-text">Trustworthy</span> Product Reviews',
      blog_hero_subtitle: 'Every review is independently researched and tested. We only recommend products we truly believe in \u2014 because your trust matters more than any commission.',
      categories_page_title: 'Product Categories',
      about_page_title: 'About 10Best Living',
      contact_page_title: 'Contact Us',
      footer_copyright: '\u00a9 2026 10Best Living. All rights reserved.',
      read_time_suffix: ' min read',
      by_team: 'By 10Best Living Team',
      share: 'Share this review:',
      back_to_top: 'Back to top',
      cat_home_kitchen: 'Home & Kitchen',
      cat_fitness_health: 'Fitness & Health',
      cat_smart_home: 'Smart Home',
      cat_beauty: 'Beauty Care',
      cat_outdoor: 'Outdoor & Travel',
      cat_sports: 'Sports Equipment',
      cat_cosmetics: 'Beauty & Cosmetics',
      cat_fashion_shoes: 'Fashion & Footwear',
      cat_accessories: 'Clothing & Accessories',
      feat_1_title: 'Top 10 Best Portable Blenders for Smoothies 2026',
      feat_1_excerpt: 'From commute to gym, portable blenders make fresh smoothies anywhere.',
      feat_1_cat: 'Home & Kitchen',
      feat_1_rt: '5 min read',
      feat_2_title: 'Top 10 Best Robot Vacuums Under $300 in 2026',
      feat_2_excerpt: 'Smart cleaning on a budget — we tested the best value robot vacuums.',
      feat_2_cat: 'Smart Home',
      feat_2_rt: '7 min read',
      feat_3_title: 'Top 10 Best Yoga Mats for Beginners in 2026',
      feat_3_excerpt: 'Find the perfect yoga mat for every level. We tested grip, cushioning, and durability across 25 products.',
      feat_3_cat: 'Fitness & Health',
      feat_3_rt: '5 min read',
      feat_4_title: 'Top 10 Best Single-Serve Coffee Makers in 2026',
      feat_4_excerpt: 'Elevate your morning routine with the best pod and ground coffee makers, from $40 to $300.',
      feat_4_cat: 'Home & Kitchen',
      feat_4_rt: '6 min read',
      feat_5_title: 'Top 10 Best Insulated Water Bottles in 2026',
      feat_5_excerpt: 'Stay hydrated all day. We tested 18 bottles for cold retention, durability, and leak-proof performance.',
      feat_5_cat: 'Outdoor & Travel',
      feat_5_rt: '5 min read',
      feat_6_title: 'Top 10 Best Weighted Blankets for Better Sleep in 2026',
      feat_6_excerpt: 'Improve sleep quality with deep pressure stimulation. Tested for weight distribution and temperature regulation.',
      feat_6_cat: 'Bedroom',
      feat_6_rt: '5 min read',
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
    
    // Static i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) el.innerHTML = dict[key];
    });
    
    // Placeholder i18n
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key]) el.placeholder = dict[key];
    });
    
    // Featured review cards via data-i18n-feat
    document.querySelectorAll('[data-i18n-feat]').forEach(el => {
      const fidx = el.getAttribute('data-i18n-feat');
      const ftype = el.getAttribute('data-i18n-type');
      const key = 'feat_' + (parseInt(fidx)+1) + '_' + ftype;
      if (dict[key]) el.textContent = dict[key];
    });
    
    // Lang button styles
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