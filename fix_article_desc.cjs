const fs = require("fs"); const P = "./src/pages/blog/";

// Per-article fixes: { dir: [ [old, new], ... ] }
const fixes = {
  "top-10-best-air-fryers-small-kitchen": [
    ["Compact air fryers that deliver big flavor without taking up precious counter space.", "小巧空氣炸鍋，不佔台面空間卻能做出大風味美食。"],
    ["We tested 15 compact air fryers (under 0.5 cu ft) for cooking performance, ease of use, cleaning, and footprint.", "我們測試了15款小型空氣炸鍋（容量小於0.5立方英尺），評估烹飪表現、易用性、清潔便利性和體積。"],
  ],
  "top-10-best-yoga-mats-beginners": [
    ["Finding the right yoga mat as a beginner can be overwhelming with hundreds of options. We tested 25 popular mats across grip, cushioning, durability, weight, and odor to help you make an informed decision.", "初學者挑選合適瑜伽墊時，市面上數百種選擇容易令人不知所措。我們對25款熱門墊子在抓地力、緩衝性、耐用度、重量和氣味方面進行了測試，幫助您做出明智決定。"],
    ["For beginners, we recommend 4-6mm. Thinner mats (3mm) offer better balance feedback but less joint protection. Thicker mats (6mm+) provide more cushioning for knees and wrists but can feel less stable in balancing poses. The Gaiam 6mm and Manduka PRO Lite (4.7mm) represent the best compromises.", "初學者建議選擇4-6mm厚度。較薄的墊子（3mm）提供更好平衡回饋但關節保護較少。較厚的墊子（6mm以上）為膝蓋和手腕提供更多緩衝但在平衡姿勢中可能感覺不夠穩定。Gaiam 6mm和Manduka PRO Lite（4.7mm）是最佳折衷選擇。"],
  ],
  "top-10-best-led-desk-lamps-work-from-home": [
    ["The best LED desk lamps for home offices, ranked by brightness, eye comfort, adjustability, and design. Reduce eye strain with the right lighting.", "最佳居家辦公LED檯燈，按亮度、護眼舒適度、可調節性和設計排名。使用合適照明減輕眼睛疲勞。"],
    ["For task lighting at a desk, aim for 400-800 lumens. This provides sufficient brightness for reading, writing, and screen work without causing glare. Our top picks all fall within this range.", "書桌工作照明建議目標為400-800流明。這提供足夠亮度用於閱讀、書寫和螢幕工作而不會造成眩光。我們的頂級選擇均在此範圍內。"],
    ["With 12 levelsof brightness and 4 color temperature settings (2700K-6500K), it covers every lighting need from late-night reading to bright morning focus work.", "擁有12級亮度和4種色溫設定（2700K-6500K），涵蓋從深夜閱讀到清晨專注工作的各種照明需求。"],
  ],
  "top-10-best-coffee-makers-single-serve": [
    ["Single-serve coffee makers offer convenience without sacrificing quality. 我們對 brew temperature, extraction quality, speed, ease of use, and pod compatibility.", "單杯咖啡機提供方便且不犧牲品質的選擇。我們測試了沖泡溫度、萃取質量、速度、易用性和膠囊兼容性。"],
    ["Each machine brewed 12 identical cups using the same coffee grounds or pods, then we evaluated: extraction temperature (aiming for 195-205°F), flavor balance and body, brew speed from start to finish, noise level during operation, ease of cleaning and descaling, and water reservoir capacity and refilling convenience.", "每台機器用相同的咖啡粉或膠囊沖泡12杯相同飲品，然後我們評估：萃取溫度（目標195-205°F）、風味平衡和醇厚度、從開始到結束的沖泡速度、運轉時的噪音水平、清潔和除垢便利性、以及水箱容量和加水的方便程度。"],
  ],
  "top-10-best-weighted-blankets-better-sleep": [
    ["Weighted blankets can transform your sleep quality. We tested the best options for anxiety relief, temperature regulation, and comfort.", "重力毯可以改變您的睡眠品質。我們測試了最具效用的減壓、溫度調節和舒適性選項。"],
  ],
  "top-10-best-robot-vacuums-under-300": [],
  "top-10-best-cordless-vacuums-lightweight": [],
  "top-10-best-electric-kettles-precise-temperature": [],
  "top-10-best-essential-oil-diffusers": [],
  "top-10-best-insulated-water-bottles": [],
  "top-10-best-massage-guns-recovery": [],
  "top-10-best-portable-blenders-smoothies-2026": [],
  "top-10-best-skincare-fridges-mini": [],
  "top-10-best-standing-desks-converter": [],
  "top-10-best-area-rugs-living-room": [],
};

for (const [dir, pairs] of Object.entries(fixes)) {
  if (pairs.length === 0) continue;
  const p = P + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    for (const [oldT, newT] of pairs) {
      ss = ss.split(oldT).join(newT);
    }
    if (ss !== before) { fs.writeFileSync(p, ss, "utf8"); console.log("Fixed: " + dir); }
  } catch(e) {}
}
console.log("Done article-specific fixes");