const fs = require("fs");
const P = "./src/pages/";

// === Fixed og:description remaining in 404 and categories ===
for (const f of ["404.astro", "categories/index.astro"]) {
  let s = fs.readFileSync(P + f, "utf8");
  const before = s;
  s = s.replace(/Curated luxury product reviews for discerning lifestyles\./g, "為講究品味的生活精選頂級產品評測。");
  if (s !== before) { fs.writeFileSync(P + f, s, "utf8"); console.log("Fixed " + f); }
}

// === blog/[slug].astro fix remaining items ===
let slug = fs.readFileSync(P + "blog/[slug].astro", "utf8");
slug = slug.replace('og:description" content="Curated luxury product reviews for discerning lifestyles."', 'og:description" content="為講究品味的生活精選頂級產品評測。"');
if (slug.includes(">Reviews</a>") || slug.includes(">Categories</a>")) {
  slug = slug.replace(/>Reviews</g, ">評測<").replace(/>Categories</g, ">分類<");
  fs.writeFileSync(P + "blog/[slug].astro", slug, "utf8");
  console.log("Fixed [slug] extra");
}

// === terms-of-service ===
let tos = fs.readFileSync(P + "terms-of-service/index.astro", "utf8");
tos = tos.replace("By accessing and using 10bestliving.com, you accept and agree to be bound by these 服務條款. If you do not agree, please do not use our website.", "透過訪問和使用10bestliving.com，即表示您接受並同意受這些服務條款約束。如果您不同意，請不要使用本網站。");
tos = tos.replace("All content on this website, including text, images, and designs, is for informational purposes only. While we strive for accuracy, we make no representations about the completeness or reliability of any information. Product prices and availability may change without notice.", "本網站所有內容（包括文字、圖片和設計）僅供資訊參考。雖然我們力求準確，但不對任何信息的完整性或可靠性做出保證。產品價格和可用性可能會隨時變更，恕不另行通知。");
tos = tos.replace("10Best Living participates in the Amazon Services LLC Associates Program and other affiliate advertising programs. This means we may earn commissions on qualifying purchases made through our links, at no additional cost to you. All editorial content remains independent and unbiased.", "10Best Living 參與Amazon服務LLC聯盟計劃及其他聯盟廣告計劃。這意味著我們可能透過我們的連結獲得符合資格的購買佣金，對您不會產生額外費用。所有編輯內容均保持獨立且公正。");
tos = tos.replace("All content on this website is owned by 10Best Living or its licensors. You may not reproduce, distribute, or create derivative works without express written permission.", "本網站所有內容歸10Best Living或其授權方所有。未經明確書面許可，不得複製、分發或創作衍生作品。");
tos = tos.replace("10Best Living shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website. Our total liability shall not exceed the amount paid by you, if any, for access to our services.", "10Best Living不對因您使用本網站而產生的間接、附帶、特殊、後果性或懲罰性損害承擔責任。我們的總責任不超过您為訪問我們服務所支付的金額（如有）。");
tos = tos.replace("These Terms are governed by the laws of the United States, without regard to conflict of law principles.", "本條款受美國法律管轄，且不考慮法律衝突原則。");
fs.writeFileSync(P + "terms-of-service/index.astro", tos, "utf8");
console.log("Fixed terms-of-service");

// === affiliate-disclosure ===
let aff = fs.readFileSync(P + "affiliate-disclosure/index.astro", "utf8");
aff = aff.replace(">Affiliate Disclosure</h1>", ">聯盟披露</h1>");
aff = aff.replace("Affiliate commissions do NOT influence our product rankings, reviews, or recommendations. Our editorial process is entirely independent:", "聯盟佣金絕不影响我們的產品排名、評測或推薦。我們的編輯流程完全獨立：");
aff = aff.replace("Thank you for supporting 10Best Living!", "感謝您支持10Best Living！");
fs.writeFileSync(P + "affiliate-disclosure/index.astro", aff, "utf8");
console.log("Fixed affiliate-disclosure");

// === privacy-policy ===
let priv = fs.readFileSync(P + "privacy-policy/index.astro", "utf8");
priv = priv.replace(">Privacy Policy</h1>", ">隱私權政策</h1>");
priv = priv.replace('10Best Living ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 10bestliving.com.', '10Best Living（以下稱「我們」）致力於保護您的隱私。本隱私權政策說明當您訪問本網站時我們如何收集、使用、披露及保護您的信息。');
priv = priv.replace("We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site usage, and serve relevant content. You can control cookie settings through your browser preferences.", "我們使用Cookie、網頁信標和類似追蹤技術以提升您的體驗、分析網站使用情況並提供相關內容。您可以通過瀏覽器偏好設置控制Cookie設定。");
priv = priv.replace("We may update this Privacy Policy periodically. We will notify you of significant changes by posting a notice on our website.", "我們會定期更新本隱私權政策。重大變更將通過在網站上發布通知來告知您。");
// Third-party services section
priv = priv.replace("We use the following third-party services that may collect information about you:", "我們使用以下第三方服務，可能會收集您的信息：");
priv = priv.replace("<li><strong>Google Analytics:</strong> For website traffic analysis</li>", "<li><strong>Google Analytics：</strong>用於網站流量分析</li>");
priv = priv.replace("<li><strong>Amazon Associates:</strong> For affiliate linking and commission tracking</li>", "<li><strong>Amazon Associates：</strong>用於聯盟鏈接和佣金追踪</li>");
priv = priv.replace("<li><strong>Mailchimp:</strong> For newsletter delivery and management</li>", "<li><strong>Mailchimp：</strong>用於電子報推送和管理</li>");
priv = priv.replace("<li><strong>Cloudflare:</strong> For website security and performance</li>", "<li><strong>Cloudflare：</strong>用於網站安全與性能優化</li>");
fs.writeFileSync(P + "privacy-policy/index.astro", priv, "utf8");
console.log("Fixed privacy-policy");

// === Fix individual blog post BaseLayout descriptions (English titles) ===
const blogDirs = [
  "top-10-best-portable-blenders-smoothies-2026",
  "top-10-best-led-desk-lamps-work-from-home",
];
for (const dir of blogDirs) {
  const p = P + "blog/" + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    // Fix the Auto-generated lowercase title in BaseLayout
    ss = ss.replace(/title={`top 10 best ([a-z-]+) \| 10Best Living`}/, (_m, rest) => {
      return `title={\`十大最佳${rest.replace(/-/g, "")} | 10Best Living\`}`;
    });
    // Fix description in BaseLayout
    ss = ss.replace(/description={`([^`]+)`}/, (_m, desc) => {
      if (desc.length < 80) return _m; // skip short JSON fields
      // Don't touch JSON-LD - check context
      return _m;
    });
    if (ss !== before) { fs.writeFileSync(p, ss, "utf8"); console.log("Fixed " + dir); }
    else console.log("No change: " + dir);
  } catch(e) { console.log("Error " + dir); }
}

// === Fix Editor's Choice badge ===
let blogIdx = fs.readFileSync(P + "blog/index.astro", "utf8");
blogIdx = blogIdx.replace("'Best Value'", "'最佳性價比'");
blogIdx = blogIdx.replace("'Editor\'s Choice'", "'編輯精選'");
blogIdx = blogIdx.replace("'Top Pick'", "'首選之選'");
blogIdx = blogIdx.replace("'Premium Pick'", "'高端之選'");
blogIdx = blogIdx.replace("'Our Pick'", "'我們的推薦'");
fs.writeFileSync(P + "blog/index.astro", blogIdx, "utf8");
console.log("Fixed blog/index badges");

// === categories index fix remaining ===
let cats = fs.readFileSync(P + "categories/index.astro", "utf8");
cats = cats.replace(">Affiliate Disclosure<", ">聯盟披露<");
cats = cats.replace("As an Amazon Associate we earn from qualifying purchases. All reviews are independent and unbiased.", "作為Amazon聯盟會員，我們從符合資格的購買中獲得佣金。所有評測均獨立公正。");
cats = cats.replace("Baby & Kids", "寶寶與兒童");
cats = cats.replace(/lang="en"/g, 'lang="zh-TW"');
fs.writeFileSync(P + "categories/index.astro", cats, "utf8");
console.log("Fixed categories index");

console.log("\n=== ALL DONE ===");