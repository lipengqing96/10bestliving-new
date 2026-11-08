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

// Common UI replacements for blog posts
const uiReps = [
  ["Quick Overview", "快速概覽"],
  ["Quick Comparison", "快速比較"],
  ["How We Tested", "測試方法"],
  ["Top Picks Reviewed", "精選評測"],
  ["Temperature Guide", "溫度指南"],
  ["Size Guide", "尺寸指南"],
  ["Benefits of Standing Desks", "站立式桌的好處"],
  ["Benefits", "好處"],
  ["FAQs", "常見問題"],
  ["最終結論", "總結論"],
  ["Our Recommendation", "我們推薦"],
  ["Share this review:", "分享此評測："],
  ["Best Overall", "最全面首選"],
  ["Best Value", "最佳性價比"],
  ["Best Budget Pick", "最佳預算款"],
  ["Best Portable", "最佳便攜款"],
  ["Best Large Capacity", "最佳大容量款"],
  ["Best for Coffee", "最佳咖啡用途"],
  ["Best Lightweight", "最佳輕量款"],
  ["Best for Small Spaces", "最佳小空間款"],
  ["Best Luxury", "最佳豪華款"],
  ["Best Premium Compact", "最佳高端小型款"],
  ["Best Heavy Setups", "最佳重型組合"],
  ["Best Pod System", "最佳膠囊系統"],
  ["Best Compact", "最佳緊湊型"],
  ["Best Premium", "最佳高端款"],
  ["best compact air fryer", "最佳小型空氣炸鍋"],
  ["best value", "最佳性價比"],
  ["best luxury", "最佳豪華款"],
  ["best portable blender", "最佳便攜果汁機"],
  ["best cordless vacuum", "最佳無線吸塵器"],
  ["best robot vacuum", "最佳掃地機器人"],
  ["best yoga mat", "最佳瑜伽墊"],
  ["best water bottle", "最佳水壺"],
  ["best essential oil diffuser", "最佳香薰擴散器"],
  ["best led desk lamp", "最佳LED檯燈"],
  ["best standing desk converter", "最佳升降桌轉換器"],
  ["best skincare fridge", "最佳護膚冰箱"],
  ["best weighted blanket", "最佳重力毯"],
  ["best massage gun", "最佳按摩槍"],
  ["best coffee maker", "最佳咖啡機"],
  ["best area rug", "最佳地毯"],
  ["Pod vs. Ground Coffee", "膠囊與研磨咖啡"],
  ["Our Picks Reviewed", "我們的評測精選"],
];

for (const dir of dirs) {
  const p = P + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    for (const [oldT, newT] of uiReps) {
      ss = ss.split(oldT).join(newT);
    }
    // Fix Our Pick badge
    ss = ss.replace(">Our Pick</div>", ">我們的推薦</div>");
    // Fix "readTime: X min" 
    ss = ss.replace(/readTime:\s*'(\d+)\s*min'/g, "'$1 分鐘閱讀'");
    // Fix category labels in content
    ss = ss.replace("'Home & Kitchen'", "'居家與廚房'");
    ss = ss.replace("'Fitness & Health'", "'健身與健康'");
    ss = ss.replace("'Beauty & Personal Care'", "'美容與個人護理'");
    ss = ss.replace("'Smart Home'", "'智能家居'");
    ss = ss.replace("'Outdoor & Travel'", "'戶外與旅行'");
    if (ss !== before) {
      fs.writeFileSync(p, ss, "utf8");
      console.log("Fixed " + dir);
    }
  } catch(e) { console.log("Error " + dir + ": " + e.message); }
}
console.log("All blog UI fixed");