const fs = require("fs");
const P = "./src/pages/";

// === blog/index.astro ===
let s = fs.readFileSync(P + "blog/index.astro", "utf8");
s = s.replace("The Most <span class=\"gold-gradient-text\">值得信賴</span> Product Reviews", "最<span class=\"gold-gradient-text\">值得信赖</span>的產品評測");
s = s.replace("Every review is independently researched and tested. We only recommend products we truly believe in — because your trust matters more than any commission.", "每篇評測均由獨立研究與測試完成。我們只推薦真正相信的產品——因為您的信任比任何佣金更重要。");
s = s.replace("{review.分鐘閱讀Time} 分钟閱讀", "{review.分鐘閱讀Time}");
s = s.replace(">Read Review", ">瀏覽評測");
s = s.replace("Editor\\'s Choice", "編輯精選");
fs.writeFileSync(P + "blog/index.astro", s, "utf8");
console.log("Fixed blog/index.astro");

// === Fix cookie banners in all standalone HTML pages ===
["404.astro", "categories/index.astro", "blog/[slug].astro"].forEach((f) => {
  try {
    let ss = fs.readFileSync(P + f, "utf8");
    const before = ss;
    ss = ss.replace(/We use cookies to enhance your experience and analyze site traffic\. By continuing, you agree to our Privacy Policy\./g, "我們使用Cookie以提升您的體驗並分析網站流量。繼續瀏覽即表示您同意我們的隱私權政策。");
    ss = ss.replace(/We use cookies to enhance your experience\. By continuing, you agree to our privacy policy\./g, "我們使用Cookie以提升您的體驗。繼續瀏覽即表示您同意我們的隱私權政策。");
    ss = ss.replace("Accept</button>", "接受</button>");
    if (ss !== before) { fs.writeFileSync(P + f, ss, "utf8"); console.log("Fixed " + f); }
  } catch(e) {}
});

console.log("All fixed!");