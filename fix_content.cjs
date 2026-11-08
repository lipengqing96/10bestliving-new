const fs = require('fs');
const P = 'src/pages/blog/';
const dirs = [
  'top-10-best-air-fryers-small-kitchen',
  'top-10-best-area-rugs-living-room',
  'top-10-best-coffee-makers-single-serve',
  'top-10-best-cordless-vacuums-lightweight',
  'top-10-best-electric-kettles-precise-temperature',
  'top-10-best-essential-oil-diffusers',
  'top-10-best-insulated-water-bottles',
  'top-10-best-led-desk-lamps-work-from-home',
  'top-10-best-massage-guns-recovery',
  'top-10-best-portable-blenders-smoothies-2026',
  'top-10-best-robot-vacuums-under-300',
  'top-10-best-skincare-fridges-mini',
  'top-10-best-standing-desks-converter',
  'top-10-best-weighted-blankets-better-sleep',
  'top-10-best-yoga-mats-beginners',
];

// Sentence-level replacements applied to each article
const pairs = [
  ['We tested 15 compact air fryers (under 0.5 cu ft) for cooking performance, ease of use, cleaning, and footprint.', '我們測試了15款小型空氣炸鍋（小於0.5立方英尺），評估烹飪表現、易用性、清潔便利性和體積。'],
  ['We tested the best models for small kitchens and dorms.', '我們為小型廚房和宿舍選擇了最佳型號。'],
  ['We tested 18 diffusers across ultrasonic, nebulizing, and evaporative technologies to find the best options for every need and budget.', '我們測試了18款香薰擴散器，涵蓋超聲波、霧化和蒸發技術，為各種需求和預算找到最佳選擇。'],
  ['We tested 25 popular mats across grip, cushioning, durability, weight, and odor to help you make an informed decision.', '我們對25款熱門瑜伽墊的抓地力、緩衝性、耐用度、重量和氣味進行了測試，幫助您做出明智決定。'],
  ['After testing over 30 portable blenders across six months, here are our definitive rankings for 2026. Each model was evaluated on blending performance, battery longevity, ease of cleaning, build quality, and value for money.', '經過六個月測試超過30款便攜果汁機，以下是我們對2026年的確定排名。每款產品均按攪拌性能、電池續航、清潔便利性、製造品質和性價比進行評估。'],
  ['The BlenderBottle Blender Pro earns our top spot by delivering professional-grade blending in a genuinely portable package.', 'BlenderBottle Blender Pro以真正便攜的包裝提供專業級攪拌效果，獲得我們的頂級評價。'],
  ['A quality insulated water bottle keeps cold drinks cold for 24+ hours and hot beverages warm for 12+. We tested 18 bottles through temperature retention trials, drop tests, and leak checks.', '優質保溫水壺可保持冷飲24小時以上冰冷，熱飲12小時以上溫暖。我們通過溫度保持試驗、跌落測試和防漏檢查測試了18款水壺。'],
  ['We measured cold retention (ice water at 35°F every 4 hours for 24h), heat retention (boiling water at 212°F every 2 hours for 12h), leak integrity after vigorous shaking and inversion, drop durability from 4 feet onto concrete, drinkability while moving, and cup holder compatibility.', '我們測量了保冷性能（35°F冰水每4小時監測24小時）、保熱性能（212°F沸水每2小時監測12小時）、劇烈搖晃和倒置後的防漏性、從4英尺高度跌落至混凝土地面的耐久性、運動時的便飲性，以及杯架兼容性。'],
  ['Which insulated bottle keeps drinks coldest?', '哪款保溫水壺最保冷？'],
  ['Hydro Flask and Yeti are neck-and-neck at 24+ hours. Simple Modern and Takeya follow at 14 hours.', 'Hydro Flask和Yeti均達24小時以上，不相上下。Simple Modern和Takeya紧随其後達14小時。'],
  ['Are insulated bottles dishwasher safe?', '保溫水壺可用洗碗機清洗嗎？'],
  ['Yes, but avoid freezing-point-sensitive products like certain oils.', '可以，但避免放入對冷凍敏感的產品如某些精油。'],
  ['Water-based serums, sheet masks, eye creams, and sunscreen benefit most.', '水性精華、紙膜、眼霜和防曬霜受益最大。'],
  ['39-45°F (4-7°C) is ideal. This preserves actives without freezing water-based products.', '39-45°F（4-7°C）為理想溫度。這能保留活性成分而不凍結水性產品。'],
  ['Can I put all skincare products in a mini fridge?', '所有護膚產品都能放入迷你冰箱嗎？'],
  ['Skincare fridges preserve active ingredients by maintaining consistent cool temperatures.', '護膚冰箱透過保持穩定低溫來保留活性成分。'],
  ['Each fridge was evaluated over 30 days for temperature accuracy with calibrated thermometers, stability during compressor cycles, noise in dB at 1 foot, interior layout and bottle compatibility, build quality and seal integrity, and energy efficiency over 24 hours.', '我們在30天內使用校準溫度計評估每台冰箱的溫度準確度、壓縮機循環穩定性、1英尺處的噪音分貝數、內部佈局與瓶裝兼容性、製造品質與密封完整性，以及24小時能耗效率。'],
  ['Standing desk converters let you transform any existing desk into an ergonomic sit-stand workstation.', '升降桌轉換器讓您將任何現有書桌變身為人體工學坐站交替工作站。'],
  ['We tested stability, ease of adjustment, build quality, and value.', '我們測試了穩定性、調節便利性和性價比。'],
  ['Each converter was tested for two weeks: stability during typing and writing at standing height, adjustment smoothness (gas spring vs manual), platform size for dual monitors and accessories, build quality and materials, assembly time, and overall value.', '每款轉換器經過兩週測試：站立高度的打字和書寫穩定性、調節順滑度（氣彈簧與手動對比）、雙顯示器和配件的平台尺寸、製造品質和材料、組裝時間，以及整體性價比。'],
  ['How much time should I stand?', '我應該站立多久？'],
  ['Aim for 20-30 minutes per hour. The ideal pattern is 40 minutes sitting followed by 20 minutes standing.', '目標是每小時站立20-30分鐘。理想模式是坐40分鐘後站20分鐘。'],
  ['Will a converter fit my desk?', '轉換器適合我的書桌嗎？'],
  ['Most work on desks 1-2.5 inches thick. The FlexiSpot M2B accommodates 0.5 to 2.5 inches.', '大部分適用於厚度1-2.5英寸的書桌。FlexiSpot M2B適用0.5至2.5英寸。'],
  ['Cordless vacuums have come a long way, and lightweight models under 7 pounds now deliver suction rivaling corded units. We tested 15 models across suction power, battery life, weight distribution, and versatility.', '無線吸塵器已取得長足進步，7磅以下的輕量型號現在能提供媲美有線機的吸力。我們測試了15款產品的吸力、電池續航、重量分佈和多功能性。'],
  ['Standardized testing on multiple surfaces: suction with calibrated airflow meters, battery runtime on medium power, weight comfort during 30-minute sessions, attachment versatility, dustbin emptying ease, and noise at 3 feet.', '在多種表面進行標準化測試：使用校準風量計測量吸力、中功率下電池續航、30分鐘使用中的重量舒適度、附件多功能性、集塵盒清空便利性，以及3英尺處的噪音。'],
  ['How long do batteries last?', '電池能用多久？'],
  ['3-5 years with regular use. Replacement batteries cost -80. Dyson and Shark rate for 500+ charge cycles.', '正常使用下可使用3-5年。更換電池成本為-80。Dyson和Shark標稱可充電500次以上。'],
  ['Can they replace corded vacuums?', '它們能取代有線吸塵器嗎？'],
  ['For homes under 2,000 sq ft, yes. The Dyson V15 and V10 clean entire homes on one charge. For larger spaces, corded may still be preferable.', '對於2000平方英尺以內的房屋，可以。Dyson V15和V10一次充電即可清潔整個房屋。對於更大的空間，有線吸塵器可能仍然更合適。'],
  ['The robot vacuum market has exploded, and finding quality models under  requires careful evaluation. We tested 20 robot vacuums in real home environments over three months, measuring suction power, navigation accuracy, battery life, and app functionality.', '掃地機器人市場已爆發式增長，尋找300美元以內的優質型號需要仔細評估。我們在三個月中在真實家居環境中測試了20款掃地機器人，測量吸力、導航精度、電池壽命和應用程式功能。'],
  ['Why does water temperature matter?', '水溫為什麼重要？'],
  ['Water temperature directly affects extraction. Too hot over-extracts bitter compounds; too cool under-extracts sour, weak flavor. Precision ensures optimal extraction for each beverage type.', '水溫直接影響萃取效果。過熱會萃取出苦澀化合物；過涼則萃取不足，導致酸味淡薄。精確控溫確保每種飲品達到最佳萃取。'],
  ['Do I need a gooseneck kettle?', '我需要鵝頸壺嗎？'],
  ['For pour-over coffee, yes — controlled flow rate is essential. For tea, a standard spout suffices. The Fellow Stagg EKG serves both purposes elegantly.', '沖泡咖啡的話，是的——水流控制至關重要。泡茶則標準出水口就夠用。Fellow Stagg EKG優雅地兼顧兩種用途。'],
  ['Single-serve coffee makers offer convenience without sacrificing quality.', '單杯咖啡機提供方便且不犧牲品質的選擇。'],
  ['Perfect your morning ritual with the best single-serve coffee makers. From pod systems to premium brewers, we found the best options.', '用最佳單杯咖啡機完美開啟您的早晨儀式。從膠囊系統到高端沖泡機，我們找到了最佳選擇。'],
  ['Each machine brewed 12 identical cups using the same coffee grounds or pods, then we evaluated: extraction temperature (aiming for 195-205°F), flavor balance and body, brew speed from start to finish, noise level during operation, ease of cleaning and descaling, and water reservoir capacity and refilling convenience.', '每台機器用相同的咖啡粉或膠囊沖泡12杯相同飲品，然後我們評估萃取溫度（目標195-205°F）、風味平衡和醇厚度、從開始到結束的沖泡速度、運轉時的噪音水平、清潔和除垢便利性、以及水箱容量和加水的方便程度。'],
  ['How much does it cost to run a single-serve coffee maker?', '單杯咖啡機的運行成本是多少？'],
  ['Pod systems cost .50-1.50 per cup depending on brand. Ground coffee with reusable filters costs .15-0.30 per cup. Annual running costs range from -500 depending on your consumption and choice.', '膠囊系統每杯成本為.50-1.50，取決於品牌。使用可重複濾網的研磨咖啡每杯成本僅.15-0.30。年運行成本根據您的消耗量和選擇在-500之間。'],
  ['Can I use my own coffee grounds?', '我可以自己研磨咖啡粉嗎？'],
  ['Yes, the Keurig K-Elite includes a My K-Cup Universal Reusable Filter that accepts any ground coffee. Nespresso Vertuo pods are proprietary, but third-party compatible pods are widely available.', '可以，Keurig K-Elite附帶My K-Cup通用可重複使用濾網，接受任何研磨咖啡粉。Nespresso Vertuo膠囊為專用規格，但第三方兼容膠囊廣泛可得。'],
  ['Weighted blankets can transform your sleep quality. We tested the best options for anxiety relief, temperature regulation, and comfort.', '重力毯能顯著改善您的睡眠品質。我們測試了最具效用的減壓、溫度調節和舒適性選項。'],
  ['For beginners, we recommend 4-6mm. Thinner mats (3mm) offer better balance feedback but less joint protection. Thicker mats (6mm+) provide more cushioning for knees and wrists but can feel less stable in balancing poses.', '初學者建議選擇4-6mm厚度。較薄的墊子（3mm）提供更好平衡回饋但關節保護較少。較厚的墊子（6mm以上）為膝蓋和手腕提供更多緩衝但在平衡姿勢中可能感覺不夠穩定。'],
  ['The Gaiam 6mm and Manduka PRO Lite (4.7mm) represent the best compromises.', 'Gaiam 6mm和Manduka PRO Lite（4.7mm）是最佳折衷選擇。'],
  ['We tested 32 models over six months, ultimately recommending the 10 that consistently delivered the best results across all criteria.', '我們六個月內測試了32款產品，最終推薦持續在所有標準上表現最佳的10款。'],
  ['Smart home devices make everyday tasks easier. We tested 18 smart plugs based on reliability, app experience, voice assistant support, and value.', '智能家居設備讓日常任務更轻松。我們根據可靠性、應用程式體驗、語音助手支持和性價比測試了18款智能插座。'],
  ['Massage guns use percussive therapy to relieve muscle tension and accelerate recovery. We tested 20 massage guns for power, amplitude, noise level, accessory variety, and value.', '按摩槍利用衝擊療法緩解肌肉張力並加速恢復。我們測試了20款按摩槍的功率、振幅、噪音水平、配件多樣性和性價比。'],
  ['LED desk lamps reduce eye strain during long work sessions. We tested 18 LED lamps for brightness, color accuracy, adjustability, glare control, and design.', 'LED檯燈減輕長時間工作的眼睛疲勞。我們測試了18款LED檯燈的亮度、色彩準確度、可調節性、眩光控制和設計。'],
  ['The TaoTronics LED Desk Lamp excels in user experience with its intuitive touch panel.', 'TaoTronics LED檯燈以其直覺觸控面板優異的用戶體驗脫穎而出。'],
  ['For task lighting at a desk, aim for 400-800 lumens. This provides sufficient brightness for reading, writing, and screen work without causing glare. Our top picks all fall within this range.', '書桌工作照明建議目標為400-800流明。這提供足夠亮度用於閱讀、書寫和螢幕工作而不會造成眩光。我們的頂級選擇均在此範圍內。'],
  ['With 12 levels of brightness and 4 color temperature settings (2700K-6500K), it covers every lighting need from late-night reading to bright morning focus work.', '擁有12級亮度和4種色溫設定（2700K-6500K），涵蓋從深夜閱讀到清晨專注工作的各種照明需求。'],
  ['How heavy should a weighted blanket be?', '重力毯應該多重？'],
  ['Generally, choose a blanket weighing 10% of your body weight. A 150-pound person would benefit from a 15-pound blanket.', '一般來說，選擇體重10%重量的毯子。150磅的人適合15磅的重力毯。'],
  ['A rug anchors the space and adds warmth and texture. We tested 20 area rugs for material quality, durability, stain resistance, and style versatility.', '地毯能固定空間並增添溫暖和質感。我們測試了20款區域地毯的材質品質、耐用性、防污性能和風格多樣性。'],
  ['Polypropylene (olefin) is the most durable and stain-resistant for high-traffic areas. Wool is luxurious but requires more care. Cotton is affordable but shows wear faster.', '丙綸（ olefin）最適合高人流量區域，最耐用且防污。羊毛奢華但需要更多保養。棉質經濟實惠但更容易磨損。'],
  ['For most living rooms, an 8x10 ft rug is ideal — it should extend beyond the sofa and at least partially under side tables. In smaller rooms, a 5x8 or 6x9 works well. Always leave 12-18 inches of floor visible around the rug edges.', '大多數客廳的理想選擇是8x10英尺的地毯——它應超出沙發並至少部分覆蓋邊桌。在小房間中，5x8或6x9很合適。地毯邊緣周圍始終留出12-18英寸的地板可見。'],
  ['Vacuum weekly without a beater bar. Clean spills immediately with a clean cloth and mild detergent. Deep clean every 6-12 months. Professional cleaning is recommended for wool rugs annually.', '每週使用不加轉刷的模式吸塵。立即用乾淨布料和溫和洗滌劑清理潑灑物。每6-12個月深度清潔一次。建議每年對羊毛地毯進行專業清潔。'],
  ['Best for:', '最適合：'],
  ['Best Innovation', '最佳創新款'],
  ['Best Durability', '最耐用款'],
  ['Best Multi-Surface', '最佳多表面款'],
  ['Buying Guide', '購買指南'],
  ['Whole-home cleaning, pet owners, and anyone wanting the most advanced technology.', '全屋清潔、寵物主人和希望使用最先進技術的使用者。'],
  ['Pour-over coffee enthusiasts, tea connoisseurs, and anyone who values design alongside performance.', '滴濾咖啡愛好者、茶專家和重視設計與性能兼備的使用者。'],
  ['Anytime someone asks me about buying a humidifier.', ' anytime有人問我關於購買加濕器的問題。'],
];

for (const dir of dirs) {
  const p = P + dir + '/index.astro';
  try {
    let ss = fs.readFileSync(p, 'utf8');
    const before = ss;
    for (const [oldT, newT] of pairs) {
      ss = ss.split(oldT).join(newT);
    }
    // Fix headline in JSON-LD
    ss = ss.replace(/"標題":\s*"([^"]+)"/g, (_, h) => {
      if (!h.match(/[一-鿿]/)) return '"標題": "' + h + '"';
      return _m;
    });
    if (ss !== before) { fs.writeFileSync(p, ss, 'utf8'); console.log(dir); }
  } catch(e) {}
}
console.log('Done!');
