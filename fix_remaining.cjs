const fs = require("fs");
const P = "./src/pages/";

// Fix categories/index.astro
let s = fs.readFileSync(P + "categories/index.astro", "utf8");
s = s.replace(">Home</a>", ">首頁</a>").replace(">About</a>", ">關於我們</a>").replace(">Contact</a>", ">聯絡我們</a>");
s = s.replace(">Read Reviews</a>", ">瀏覽評測</a>");
s = s.replace("{cat.count} reviews", "{cat.count} 篇評測");
s = s.replace("Curated reviews for discerning lifestyles. We test everything so you don&apos;t have to.", "為講究品味的您精選評測。我們測試一切，讓您無需費心。");
s = s.replace(/>Categories</a>/g, ">分類</a>");
s = s.replace(">Categories</h4>", ">商品分類</h4>");
fs.writeFileSync(P + "categories/index.astro", s, "utf8");
console.log("Fixed categories");

// Fix 404.astro
s = fs.readFileSync(P + "404.astro", "utf8");
s = s.replace(">Home</a>", ">首頁</a>").replace(">About</a>", ">關於我們</a>").replace(">Contact</a>", ">聯絡我們</a>");
s = s.replace(">Read Reviews</a>", ">瀏覽評測</a>");
s = s.replace(/>Categories</a>/g, ">分類</a>");
s = s.replace(/>Categories</h4>/g, ">商品分類</h4>");
s = s.replace(/>Contact</a>/g, ">聯絡我們</a>");
fs.writeFileSync(P + "404.astro", s, "utf8");
console.log("Fixed 404");

// Fix blog/[slug].astro
s = fs.readFileSync(P + "blog/[slug].astro", "utf8");
s = s.replace(">Home</a>", ">首頁</a>").replace(">About</a>", ">關於我們</a>").replace(">Contact</a>", ">聯絡我們</a>");
s = s.replace(">Read Reviews</a>", ">瀏覽評測</a>");
fs.writeFileSync(P + "blog/[slug].astro", s, "utf8");
console.log("Fixed [slug]");

// Fix terms-of-service Contact heading
s = fs.readFileSync(P + "terms-of-service/index.astro", "utf8");
s = s.replace("<h2 id=\"sec-10\">Contact</h2>", "<h2 id=\"sec-10\">聯絡我們</h2>");
fs.writeFileSync(P + "terms-of-service/index.astro", s, "utf8");
console.log("Fixed terms Contact");

// Fix privacy-policy Contact heading
s = fs.readFileSync(P + "privacy-policy/index.astro", "utf8");
s = s.replace("<h2 id=\"sec-10\">Contact</h2>", "<h2 id=\"sec-10\">聯絡我們</h2>");
fs.writeFileSync(P + "privacy-policy/index.astro", s, "utf8");
console.log("Fixed privacy Contact");

// Fix index.astro remaining
s = fs.readFileSync(P + "index.astro", "utf8");
s = s.replace(">Explore Reviews<", ">瀏覽評測<").replace(">Browse Categories<", ">瀏覽分類<");
fs.writeFileSync(P + "index.astro", s, "utf8");
console.log("Fixed index remaining");

// Fix Blog post descriptions that are still in English
const blogDirs = [
  "top-10-best-portable-blenders-smoothies-2026",
  "top-10-best-led-desk-lamps-work-from-home",
];
for (const dir of blogDirs) {
  const p = P + "blog/" + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    // Fix description in BaseLayout tag
    ss = ss.replace(/description={`[^`]+`}/, 'description={`專業評測，為您推薦最佳選擇。' + dir.split("-").slice(2).join(" ") + '}'');
    if (ss !== before) { fs.writeFileSync(p, ss, "utf8"); console.log("Fixed desc: " + dir); }
  } catch(e) {}
}

console.log("\n=== ALL REMAINING FIXES DONE ===");