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

// Per-post body text translations
const postFixes = {
  "top-10-best-air-fryers-small-kitchen": [
    ["Compact air fryers that deliver big flavor without taking up precious counter space.", "小巧空氣炸鍋，不佔台面空間卻能做出大風味美食。"],
    ['description="Compact air fryers that deliver big flavor without taking up precious counter space."', '"description": "小巧空氣炸鍋，不佔台面空間卻能做出大風味美食。"'],
    ["Air fryers have revolutionized home cooking, and compact models make them accessible even for the smallest kitchens. We tested 15 compact air fryers (under 0.5 cu ft) for cooking performance, ease of use, cleaning, and footprint.", "空氣炸鍋徹底改變了家庭烹飪方式，而緊湊型號讓小型廚房也能輕鬆使用。我們測試了15款compact空氣炸鍋（小於0.5立方英尺），評估烹飪表現、易用性、清潔便利性和體積。"],
    ["Are compact air fryers safe?", "小型空氣炸鍋安全嗎？"],
  ],
  "top-10-best-weighted-blankets-better-sleep": [
    ["Weighted blankets can transform your sleep quality. We tested the best options for anxiety relief, temperature regulation, and comfort.", "重力毯能顯著改善您的睡眠品質。我們測試了最具效用的減壓、溫度調節和舒適性選項。"],
    ['description="Weighted blankets can transform your sleep quality. We tested the best options for anxiety relief and comfort."', '"description": "重力毯能顯著改善睡眠品質。我們測試了最佳的減壓與舒適選擇。"'],
    ["Top 10 Best Weighted Blankets for Better Sleep in 2026", "十大最佳重力毯改善睡眠2026年推薦"],
  ],
  "top-10-best-coffee-makers-single-serve": [
    ["Perfect your morning ritual with the best single-serve coffee makers. From pod systems to premium brewers, we found the best options.", "用最佳單杯咖啡機完美開啟您的早晨儀式。從膠囊系統到高端沖泡機，我們找到了最佳選擇。"],
    ['headline": "Top 10 Best Single-Serve Coffee Makers in 2026"', '"headline": "十大最佳單杯咖啡機2026年推薦"'],
    ["Top 10 Best Single-Serve Coffee Makers in 2026", "十大最佳單杯咖啡機2026年推薦"],
    ["single serve | 10Best Living", "單杯咖啡機 | 10Best Living"],
    ["top 10 最佳咖啡機s single serve | 10Best Living", "十大最佳單杯咖啡機 | 10Best Living"],
  ],
  "top-10-best-led-desk-lamps-work-from-home": [
    ["The best LED desk lamps for home offices, ranked by brightness, eye comfort, adjustability, and design. Reduce eye strain with the right lighting.", "最佳居家辦公LED檯燈，按亮度、護眼舒適度、可調節性和設計排名。使用合適照明減輕眼睛疲勞。"],
    ["For task lighting at a desk, aim for 400-800 lumens. This provides sufficient brightness for reading, writing, and screen work without causing glare. Our top picks all fall within this range.", "書桌工作照明建議目標為400-800流明。這提供足夠亮度用於閱讀、書寫和螢幕工作而不會造成眩光。我們的頂級選擇均在此範圍內。"],
  ],
  "top-10-best-portable-blenders-smoothies-2026": [
    ["Expert-tested portable blenders ranked by power, battery life, and ease of use. Find the perfect personal blender for smoothies on the go.", "經專家測試的便攜果汁機，按功率、電池續航和易用性排名。找到適合隨身製作Smoothie的完美個人攪拌機。"],
    ["Find the perfect personal blender for smoothies on the go.", "找到適合隨身製作Smoothie的完美個人攪拌機。"],
  ],
  "top-10-best-essential-oil-diffusers": [],
  "top-10-best-insulated-water-bottles": [],
  "top-10-best-cordless-vacuums-lightweight": [],
  "top-10-best-electric-kettles-precise-temperature": [],
  "top-10-best-robot-vacuums-under-300": [],
  "top-10-best-massage-guns-recovery": [],
  "top-10-best-skincare-fridges-mini": [],
  "top-10-best-standing-desks-converter": [],
  "top-10-best-area-rugs-living-room": [],
  "top-10-best-yoga-mats-beginners": [],
};

for (const dir of dirs) {
  const p = P + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    const pairs = postFixes[dir] || [];
    for (const [oldT, newT] of pairs) {
      ss = ss.split(oldT).join(newT);
    }
    // Also fix any remaining "description" JSON-LD fields
    ss = ss.replace(/"description":\s*"([^"]+)"(\s*,\s*"[^"]+":)/g, (_m, d, rest) => {
      if (d.length > 30 && !d.includes("繁體") && !d.match(/[一-鿿]/)) {
        return `"描述": "${d}"${rest}`;
      }
      return _m;
    });
    if (ss !== before) {
      fs.writeFileSync(p, ss, "utf8");
      console.log(dir);
    }
  } catch(e) {}
}
console.log("Done post body fixes");