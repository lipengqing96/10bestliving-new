const fs = require("fs");
const P = "./src/pages/";

// Fix Kitchen category
let s = fs.readFileSync(P + "index.astro", "utf8");
s = s.replace("cat: 'Kitchen'", "cat: '廚房用品'");
s = s.replace(">Explore Reviews<", ">瀏覽評測<");
fs.writeFileSync(P + "index.astro", s, "utf8");
console.log("Fixed index.astro");

const reps = [
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
  ["Quick Overview", "快速概覽"],
  ["How We Tested", "測試方法"],
  ["Top Picks Reviewed", "精選評測"],
  ["Temperature Guide", "溫度指南"],
  ["FAQs", "常見問題"],
  ["Our Recommendation", "我們推薦"],
  ["Share this review:", "分享此評測："],
  ["Home & Kitchen", "居家與廚房"],
  ["Best Luxury", "最佳豪華款"],
];

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

for (const dir of dirs) {
  const p = P + "blog/" + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    for (const [oldT, newT] of reps) {
      ss = ss.split(oldT).join(newT);
    }
    // Fix brand names descriptions
    ss = ss.replace(/We tested \d+ [\w\s]+ for/g, "我們對");
    if (ss !== before) { fs.writeFileSync(p, ss, "utf8"); console.log("Fixed " + dir); }
    else console.log("No change: " + dir);
  } catch(e) { console.log("Error: " + dir + " " + e.message); }
}
console.log("Done all blog posts");