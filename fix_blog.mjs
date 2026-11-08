import { readFileSync, writeFileSync } from "fs";

// ===== index.astro: fix Kitchen category & Explore Reviews =====
let s = readFileSync("./src/pages/index.astro", "utf8");
s = s.replace("cat: 'Kitchen'", "cat: '廚房用品'");
s = s.replace(">Explore Reviews<", ">瀏覽評測<");
writeFileSync("./src/pages/index.astro", s, "utf8");
console.log("Fixed index.astro");

// ===== Fix all individual blog review pages =====
const blogDirs = [
  "top-10-best-air-fryers-small-kitchen",
  "top-10-best-area-rugs-living-room",
  "top-10-best-coffee-makers-single-serve",
  "top-10-best-cordless-vacuums-lightweight",
  "top-10-best-electric-kettles-precise-temperature",
  "top-10-best-essential-oil-diffusers",
  "top-10-best-insulated-water-bottles",
  "top-10-best-led-desk-lamps-work-from-home",
  "top-10-best-massage-guns-recovery",
  "top-10-best-portable-blenders-smoothies-2026",
  "top-10-best-robot-vacuums-under-300",
  "top-10-best-skincare-fridges-mini",
  "top-10-best-standing-desks-converter",
  "top-10-best-weighted-blankets-better-sleep",
  "top-10-best-yoga-mats-beginners",
];

const replacements = [
  ["Compact air fryers that deliver big flavor without taking up precious counter space.", "小巧空氣炸鍋，不佔台面空間卻能做出大風味美食。"],
  ["Home & Kitchen", "居家與廚房"],
  ["Best Overall", "最全面首選"],
  ["Best for:", "最適合："],
  ["Singles, couples, and small households who want premium results in a compact footprint.", "單身、情侶及小家庭追求小巧卻頂級的效果。"],
  ["Best Premium Compact", "最佳高端小型款"],
  ["Best Value", "最佳性價比"],
  ["Best Budget Pick", "最佳預算款"],
  ["Best Portable", "最佳便攜款"],
  ["Best Large Capacity", "最佳大容量款"],
  ["Best for Coffee", "最佳咖啡用途"],
  ["Best Lightweight", "最佳輕量款"],
  ["Best for Small Spaces", "最佳小空間款"],
  ["Best Luxury", "最佳豪華款"],
  ["Best for Gym", "最佳健身款"],
  ["Best for Home Use", "最佳家用款"],
  ["Quick Overview", "快速概覽"],
  ["How We Tested", "測試方法"],
  ["Top Picks Reviewed", "精選評測"],
  ["Temperature Guide", "溫度指南"],
  ["FAQs", "常見問題"],
  ["最終結論", "總結論"],
  ["Our Recommendation", "我們推薦"],
  ["Share this review:", "分享此評測："],
  ['"description"', '"描述"'],
  ["author", "作者"],
  ["Organization", "組織"],
  ["name": "10Best Living", "name": "10Best Living"],
  ["ratingValue", "評分值"],
  ["reviewBody", "評測內容"],
  ["datePublished", "發布日期"],
  ["headline", "標題"],
  ["inLanguage", "語言"],
];

for (const dir of blogDirs) {
  const p = "./src/pages/blog/" + dir + "/index.astro";
  try {
    let ss = readFileSync(p, "utf8");
    const before = ss;
    for (const [oldText, newText] of replacements) {
      ss = ss.split(oldText).join(newText);
    }
    // Fix specific brand descriptions in content
    ss = ss.replace(/We tested \d+ [\w\s]+ for/g, "我們測試了");
    if (ss !== before) {
      writeFileSync(p, ss, "utf8");
      console.log("Fixed " + dir);
    } else {
      console.log("No changes: " + dir);
    }
  } catch(e) {
    console.log("Skip or error: " + dir + " - " + e.message);
  }
}

console.log("Blog posts done");