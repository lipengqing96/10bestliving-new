const fs = require("fs");
const P = "./src/pages/blog/";
const dirs = [
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

// Common replacements applied to ALL blog posts
const reps = [
  ["Quick Overview", "快速概覽"],
  ["Quick Comparison", "快速比較"],
  ["How We Tested", "測試方法"],
  ["Top Picks Reviewed", "精選評測"],
  ["Our Picks Reviewed", "我們評測精選"],
  ["Our Evaluation Criteria", "評估標準"],
  ["Temperature Guide", "溫度指南"],
  ["Size Guide", "尺寸指南"],
  ["Benefits of Standing Desks", "站立式桌的好處"],
  ["Benefits", "好處"],
  ["FAQs", "常見問題"],
  ["最終結論", "總結論"],
  ["Our Recommendation", "我們推薦"],
  ["Share this review:", "分享此評測："],
  ["In-Depth Reviews", "深入評測"],
  ["best compact air fryer", "最佳小型空氣炸鍋"],
  ["best value", "最佳性價比"],
  ["best luxury", "最佳豪華款"],
  ["best portable blender", "最佳便攜果汁機"],
  ["best cordless vacuum", "最佳無線吸塵器"],
  ["best robot vacuum", "最佳掃地機器人"],
  ["best yoga mat", "最佳瑜伽墊"],
  ["best water bottle", "最佳保溫水壺"],
  ["best essential oil diffuser", "最佳香薰擴散器"],
  ["best led desk lamp", "最佳LED檯燈"],
  ["best standing desk converter", "最佳升降桌轉換器"],
  ["best skincare fridge", "最佳護膚冰箱"],
  ["best weighted blanket", "最佳重力毯"],
  ["best massage gun", "最佳按摩槍"],
  ["best coffee maker", "最佳咖啡機"],
  ["best area rug", "最佳地毯"],
  ["Pod vs. Ground Coffee", "膠囊與研磨咖啡對比"],
  ["Quick Comparison Table", "快速比較表"],
  ["Weight Capacity", "承重能力"],
  ["Height Range", "高度範圍"],
  ["Brew Size", "沖泡容量"],
  ["Heat-Up", "加熱時間"],
  ["Cold Hold", "保冷時長"],
];

for (const dir of dirs) {
  const p = P + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    for (const [oldT, newT] of reps) {
      ss = ss.split(oldT).join(newT);
    }
    // Fix Best Innovation, Best Durability etc
    ss = ss.replace("Best Innovation", "最佳創新款").replace("Best Durability", "最耐用款");
    // Fix "reviews" in category labels
    ss = ss.replace(/(\d+) reviews/g, "$1 篇評測");
    if (ss !== before) { fs.writeFileSync(p, ss, "utf8"); console.log(dir); }
  } catch(e) { console.log("Error: " + dir); }
}

console.log("Done common fixes");