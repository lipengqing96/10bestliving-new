import { readFileSync, writeFileSync } from "fs";
const P = "./src/pages/";

// ===== 404.astro =====
let s = readFileSync(P + "404.astro", "utf8");
s = s.replace(/lang="en"/g, 'lang="zh-TW"');
s = s.replace("Curated luxury product reviews for discerning lifestyles.", "為講究品味的生活精選頂級產品評測。");
s = s.replace(">Home<", ">首頁<").replace(">Categories<", ">分類<").replace(">About<", ">關於我們<").replace(">Contact<", ">聯絡我們<");
s = s.replace(">Read Reviews<", ">瀏覽評測<");
s = s.replace(">Return Home<", ">返回首頁<");
s = s.replace("This page drifted away. Let us bring you back home.", "此頁面已不見，讓我們帶您回到首頁。");
s = s.replace("Curated reviews for discerning lifestyles. We test everything so you don&apos;t have to.", "為講究品味的您精選評測。我們測試一切，讓您無需費心。");
s = s.replace(">Explore</h4>", ">探索</h4>");
s = s.replace(">Reviews<", ">評測<").replace(">Categories<", ">分類<").replace(">About Us<", ">關於我們<");
s = s.replace(">Home & Kitchen<", ">居家與廚房<").replace(">Fitness & Health<", ">健身與健康<").replace(">Beauty & Personal Care<", ">美容與個人護理<").replace(">Smart Home<", ">智能家居<");
s = s.replace(">Privacy Policy<", ">隱私權政策<").replace(">Terms of Service<", ">服務條款<").replace(">Affiliate Disclosure<", ">聯盟披露<");
s = s.replace("All rights reserved.", "版權所有。");
s = s.replace("As an Amazon Associate we earn from qualifying purchases. All reviews are independent and unbiased.", "作為Amazon聯盟會員，我們從符合資格的購買中獲得佣金。所有評測均獨立公正。");
s = s.replace("We use cookies to enhance your experience. By continuing, you agree to our privacy policy.", "我們使用Cookie以提升您的體驗。繼續瀏覽即表示您同意我們的隱私權政策。");
s = s.replace(">Accept</button>", ">接受</button>");
writeFileSync(P + "404.astro", s, "utf8");
console.log("Fixed 404.astro");

// ===== blog/[slug].astro =====
s = readFileSync(P + "blog/[slug].astro", "utf8");
s = s.replace('og:description" content="Curated luxury product reviews for discerning lifestyles."', 'og:description" content="為講究品味的生活精選頂級產品評測。"');
s = s.replace(">Home<", ">首頁<").replace(">Categories<", ">分類<").replace(">About<", ">關於我們<").replace(">Contact<", ">聯絡我們<");
s = s.replace(">Read Reviews<", ">瀏覽評測<");
s = s.replace("Curated reviews for discerning lifestyles. We test everything so you don&apos;t have to.", "為講究品味的您精選評測。我們測試一切，讓您無需費心。");
s = s.replace(">Reviews<", ">評測<").replace(">Categories<", ">分類<").replace(">About Us<", ">關於我們<");
s = s.replace(">Home & Kitchen<", ">居家與廚房<").replace(">Fitness & Health<", ">健身與健康<").replace(">Beauty & Personal Care<", ">美容與個人護理<").replace(">Smart Home<", ">智能家居<");
s = s.replace(">Privacy Policy<", ">隱私權政策<").replace(">Terms of Service<", ">服務條款<");
s = s.replace("All rights reserved.", "版權所有。");
s = s.replace("As an Amazon Associate we earn from qualifying purchases. All reviews are independent and unbiased.", "作為Amazon聯盟會員，我們從符合資格的購買中獲得佣金。所有評測均獨立公正。");
s = s.replace("We use cookies to enhance your experience. By continuing, you agree to our privacy policy.", "我們使用Cookie以提升您的體驗。繼續瀏覽即表示您同意我們的隱私權政策。");
s = s.replace(">Accept</button>", ">接受</button>");
s = s.replace("{post.readTime} read", "{post.readTime}");
s = s.replace("Share this review:", "分享此評測：");
writeFileSync(P + "blog/[slug].astro", s, "utf8");
console.log("Fixed [slug].astro");

// ===== categories/index.astro =====
s = readFileSync(P + "categories/index.astro", "utf8");
s = s.replace(/lang="en"/g, 'lang="zh-TW"');
s = s.replace("Curated luxury product reviews for discerning lifestyles.", "為講究品味的生活精選頂級產品評測。");
s = s.replace(">Home<", ">首頁<").replace(">Categories<", ">分類<").replace(">About<", ">關於我們<").replace(">Contact<", ">聯絡我們<");
s = s.replace(">Read Reviews<", ">瀏覽評測<");
s = s.replace("Categories | 10Best Living", "商品分類 | 10Best Living");
s = s.replace("<h1 class=\"font-serif text-5xl font-bold text-dark mb-4\">Categories</h1>", "<h1 class=\"font-serif text-5xl font-bold text-dark mb-4\">商品分類</h1>");
s = s.replace("Explore reviews by topic. Every category is curated with care.", "依主題探索評測。每個分類皆經過精心篩選。");
s = s.replace('>Reviews</a>', '>評測</a>').replace('>Categories</a>', '>分類</a>').replace('>About Us</a>', '>關於我們</a>');
s = s.replace('>Privacy Policy</a>', '>隱私權政策</a>').replace('>Terms of Service</a>', '>服務條款</a>');
s = s.replace(">Categories</h4>", ">商品分類</h4>");
s = s.replace("All rights reserved.", "版權所有。");
s = s.replace("We use cookies to enhance your experience. By continuing, you agree to our privacy policy.", "我們使用Cookie以提升您的體驗。繼續瀏覽即表示您同意我們的隱私權政策。");
s = s.replace(">Accept</button>", ">接受</button>");
writeFileSync(P + "categories/index.astro", s, "utf8");
console.log("Fixed categories/index.astro");

// ===== about/index.astro =====
s = readFileSync(P + "about/index.astro", "utf8");
s = s.replace("We believe that quality products deserve to be recognized, and that consumers deserve honest, thorough reviews \u2014 not paid endorsements disguised as opinions. Every product we review is purchased with our own funds whenever possible, and we never accept compensation for favorable coverage.", "我們深信優質產品值得被肯定，消費者也配得到誠實、深入的評測\u2014\u2014而非包裝成意見的付費廣告。只要可能，我們會自行購買每款評測產品，絕不接受任何影響公正性的報酬。");
s = s.replace("10Best Living is staffed by experienced reviewers, writers, and researchers with deep expertise across home goods, fitness, beauty, and technology categories. Our lead reviewers bring an average of 10+ years of product testing experience from leading consumer publications.", "10Best Living 由具備豐富經驗的評測員、撰寫者與研究者組成，在家電、健身、美容與科技領域均有深厚專業。我們的 Lead 評測員平均擁有超過10年的消費產品評測經驗，來自業界領先的媒體機構。");
writeFileSync(P + "about/index.astro", s, "utf8");
console.log("Fixed about/index.astro");

// ===== blog/index.astro =====
s = readFileSync(P + "blog/index.astro", "utf8");
// Fix English titles in reviews array
s = s.replace("Top 10 Best Portable Blenders for Smoothies in 2026", "十大最佳便攜果汁機Smoothie攪拌機2026年推薦");
s = s.replace("Top 10 Best LED Desk Lamps for Working From Home in 2026", "十大最佳LED檯燈書房工作燈2026年推薦");
s = s.replace("Top 10 Best Yoga Mats for Beginners in 2026", "十大最佳瑜伽墊初學者入門2026年推薦");
s = s.replace("Top 10 Best Robot Vacuums Under $300 in 2026", "十大最佳300美元以內掃地機器人2026年推薦");
s = s.replace("Top 10 Best Essential Oil Diffusers in 2026", "十大最佳香薰擴散器2026年推薦");
s = s.replace("Top 10 Best Air Fryers for Small ", "十大最佳小型 ");
s = s.replace("Kitchen s in 2026", "廚房空氣炸鍋2026年推薦"); // The original had "Small Kitchen" mixed
s = s.replace("Top 10 Best Weighted Blankets for Better Sleep in 2026", "十大最佳重力毯改善睡眠2026年推薦");
s = s.replace("Top 10 Best Electric Kettles with Precise Temperature Control in 2026", "十大最佳精密溫度控制電水壺2026年推薦");
s = s.replace("Top 10 Best Standing Desk Converters in 2026", "十大最佳升降桌轉換器2026年推薦");
s = s.replace("Top 10 Best Cordless Vacuums (Lightweight) in 2026", "十大最佳無線吸塵器(輕量型)2026年推薦");
s = s.replace("Top 10 Best Mini Skincare Fridges in 2026", "十大最佳迷你護膚冰箱2026年推薦");
s = s.replace("Top 10 Best Insulated Water Bottles in 2026", "十大最佳保溫水壺2026年推薦");
s = s.replace("Top 10 Best Massage Guns for Muscle Recovery in 2026", "十大最佳按摩槍肌肉恢復2026年推薦");
s = s.replace("Top 10 Best Single-Serve Coffee Makers in 2026", "十大最佳單杯咖啡機2026年推薦");
s = s.replace("Top 10 Best Area Rugs for Living Room in 2026", "十大最佳客廳地毯2026年推薦");
// Fix category labels
s = s.replace("'Home & 健康養生'", "'健康養生'");
s = s.replace("'Outdoor & Travel'", "'戶外與旅行'");
s = s.replace("'Home & Decor'", "'家居裝飾'");
// Fix readTime min -> 分鐘閱讀
s = s.replace(/分鐘閱讀Time: '(\d+) min'/g, (_, m) => `分鐘閱讀Time: '${m} 分鐘閱讀'`);
// Fix description meta
s = s.replace("Expert reviews and rankings of premium lifestyle products. From kitchen essentials to fitness gear, discover the best picks for discerning tastes.", "專業評測與排名，涵蓋廚房用品到健身裝備，為講究品味的您推薦最佳選擇。");
writeFileSync(P + "blog/index.astro", s, "utf8");
console.log("Fixed blog/index.astro");

console.log("All fixes applied!");