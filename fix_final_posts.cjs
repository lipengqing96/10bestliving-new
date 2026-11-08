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

// Targeted fixes per article
const fixes = {
  "top-10-best-air-fryers-small-kitchen": [
    ["Air fryers have revolutionized home cooking, and compact models make them accessible even for the smallest kitchens.", "空氣炸鍋徹底改變了家庭烹飪方式，緊湊型號讓小型廚房也能輕鬆使用。"],
    ["Are compact air fryers safe?", "小型空氣炸鍋安全嗎？"],
    ["best compact air fryer", "最佳小型空氣炸鍋"],
  ],
  "top-10-best-insulated-water-bottles": [
    ["A quality insulated water bottle keeps cold drinks cold for 24+ hours and hot beverages warm for 12+.", "優質保溫水壺可保持冷飲24小時以上冰冷，熱飲12小時以上溫暖。"],
    ["We measured cold retention (ice water at 35°F every 4 hours for 24h), heat retention (boiling water at 212°F every 2 hours for 12h), leak integrity after vigorous shaking and inversion, drop durability from 4 feet onto concrete, drinkability while moving, and cup holder compatibility.", "我們測量了保冷性能（35°F冰水每4小時監測24小時）、保熱性能（212°F沸水每2小時監測12小時）、劇烈搖晃和倒置後的防漏性、從4英尺高度跌落至混凝土地面的耐久性、運動時的便飲性，以及杯架兼容性。"],
    ["Which insulated bottle keeps drinks coldest?", "哪款保溫水壺最保冷？"],
    ["Are insulated bottles dishwasher safe?", "保溫水壺可用洗碗機清洗嗎？"],
  ],
  "top-10-best-skincare-fridges-mini": [
    ["Skincare fridges preserve active ingredients by maintaining consistent cool temperatures.", "護膚冰箱透過保持穩定低溫來保留活性成分。"],
    ["Each fridge was evaluated over 30 days for temperature accuracy with calibrated thermometers, stability during compressor cycles, noise in dB at 1 foot, interior layout and bottle compatibility, build quality and seal integrity, and energy efficiency over 24 hours.", "我們在30天內使用校準溫度計評估每台冰箱的溫度準確度、壓縮機循環穩定性、1英尺處的噪音分貝數、內部佈局與瓶裝兼容性、製造品質與密封完整性，以及24小時能耗效率。"],
    ["What temperature should a skincare fridge be set to?", "護膚冰箱應設定多少溫度？"],
    ["Can I put all skincare products in a mini fridge?", "所有護膚產品都能放入迷你冰箱嗎？"],
  ],
  "top-10-best-standing-desks-converter": [
    ["Standing desk converters let you transform any existing desk into an ergonomic sit-stand workstation.", "升降桌轉換器讓您將任何現有書桌變身為人體工學坐站交替工作站。"],
    ["Each converter was tested for two weeks: stability during typing and writing at standing height, adjustment smoothness (gas spring vs manual), platform size for dual monitors and accessories, build quality and materials, assembly time, and overall value.", "每款轉換器經過兩週測試：站立高度的打字和書寫穩定性、調節順滑度（氣彈簧與手動對比）、雙顯示器和配件的平台尺寸、製造品質和材料、組裝時間，以及整體性價比。"],
    ["How much time should I stand?", "我應該站立多久？"],
    ["Will a converter fit my desk?", "轉換器適合我的書桌嗎？"],
  ],
  "top-10-best-coffee-makers-single-serve": [
    ["Single-serve coffee makers offer convenience without sacrificing quality.", "單杯咖啡機提供便利且不犧牲品質的選擇。"],
    ["How much does it cost to run a single-serve coffee maker?", "單杯咖啡機的運行成本是多少？"],
    ["Can I use my own coffee grounds?", "我可以自己研磨咖啡粉嗎？"],
  ],
  "top-10-best-weighted-blankets-better-sleep": [],
  "top-10-best-yoga-mats-beginners": [],
  "top-10-best-led-desk-lamps-work-from-home": [],
  "top-10-best-electric-kettles-precise-temperature": [],
  "top-10-best-essential-oil-diffusers": [],
  "top-10-best-cordless-vacuums-lightweight": [],
  "top-10-best-robot-vacuums-under-300": [],
  "top-10-best-massage-guns-recovery": [],
  "top-10-best-portable-blenders-smoothies-2026": [],
  "top-10-best-area-rugs-living-room": [],
};

for (const dir of dirs) {
  const p = P + dir + "/index.astro";
  try {
    let ss = fs.readFileSync(p, "utf8");
    const before = ss;
    const pairs = fixes[dir] || [];
    for (const [oldT, newT] of pairs) {
      ss = ss.split(oldT).join(newT);
    }
    if (ss !== before) {
      fs.writeFileSync(p, ss, "utf8");
      console.log(dir);
    }
  } catch(e) {}
}
console.log("Done");