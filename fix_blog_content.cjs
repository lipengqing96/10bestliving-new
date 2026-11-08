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

// Shared sentence pairs to replace across ALL articles
const globalPairs = [
  // Section headers
  ['Quick Overview', '快速概覽'],
  ['Quick Comparison', '快速比較'],
  ['How We Tested', '測試方法'],
  ['Top Picks Reviewed', '精選評測'],
  ['Our Picks Reviewed', '我們評測精選'],
  ['Our Evaluation Criteria', '評估標準'],
  ['Temperature Guide', '溫度指南'],
  ['Size Guide', '尺寸指南'],
  ['Benefits of Standing Desks', '站立式桌的好處'],
  ['Benefits', '好處'],
  ['FAQs', '常見問題'],
  ['最終結論', '總結論'],
  ['Our Recommendation', '我們推薦'],
  ['Share this review:', '分享此評測：'],
  ['In-Depth Reviews', '深入評測'],
  ['Pod vs. Ground Coffee', '膠囊與研磨咖啡對比'],
  ['Weight Capacity', '承重能力'],
  ['Height Range', '高度範圍'],
  ['Brew Size', '沖泡容量'],
  ['Heat-Up', '加熱時間'],
  ['Cold Hold', '保冷時長'],
  ['Compact air fryers that deliver big flavor without taking up precious counter space.', '小巧空氣炸鍋，不佔台面空間卻能做出大風味美食。'],
  ['Air fryers have revolutionized home cooking, and compact models make them accessible even for the smallest kitchens.', '空氣炸鍋徹底改變了家庭烹飪方式，緊湊型號讓小型廚房也能輕鬆使用。'],
  ['We tested 15 compact air fryers (under 0.5 cu ft) for cooking performance, ease of use, cleaning, and footprint.', '我們測試了15款小型空氣炸鍋（小於0.5立方英尺），評估烹飪表現、易用性、清潔便利性和體積。'],
  ['Are compact air fryers safe?', '小型空氣炸鍋安全嗎？'],
  ['Finding the right yoga mat as a beginner can be overwhelming with hundreds of options.', '初學者挑選合適瑜伽墊時，市面上數百種選擇容易令人不知所措。'],
  ['For beginners, we recommend 4-6mm.', '初學者建議選擇4-6mm厚度。'],
  ['The best LED desk lamps for home offices, ranked by brightness, eye comfort, adjustability, and design. Reduce eye strain with the right lighting.', '最佳居家辦公LED檯燈，按亮度、護眼舒適度、可調節性和設計排名。使用合適照明減輕眼睛疲勞。'],
  ['For task lighting at a desk, aim for 400-800 lumens.', '書桌工作照明建議目標為400-800流明。'],
  ['With 12 levels of brightness and 4 color temperature settings (2700K-6500K), it covers every lighting need from late-night reading to bright morning focus work.', '擁有12級亮度和4種色溫設定（2700K-6500K），涵蓋從深夜閱讀到清晨專注工作的各種照明需求。'],
  ['Single-serve coffee makers offer convenience without sacrificing quality.', '單杯咖啡機提供方便且不犧牲品質的選擇。'],
  ['Each machine brewed 12 identical cups using the same coffee grounds or pods, then we evaluated: extraction temperature (aiming for 195-205°F), flavor balance and body, brew speed from start to finish, noise level during operation, ease of cleaning and descaling, and water reservoir capacity and refilling convenience.', '每台機器用相同的咖啡粉或膠囊沖泡12杯相同飲品，然後我們評估萃取溫度（目標195-205°F）、風味平衡和醇厚度、從開始到結束的沖泡速度、運轉時的噪音水平、清潔和除垢便利性、以及水箱容量和加水的方便程度。'],
  ['At , the Kalroute delivers excellent performance.', 'Kalroute以。'],
  ['How much does it cost to run a single-serve coffee maker?', '單杯咖啡機的運行成本是多少？'],
  ['Can I use my own coffee grounds?', '我可以自己研磨咖啡粉嗎？'],
  ['Which insulated bottle keeps drinks coldest?', '哪款保溫水壺最保冷？'],
  ['Hydro Flask and Yeti are neck-and-neck at 24+ hours.', 'Hydro Flask和Yeti均達24小時以上，不相上下。'],
  ['Are insulated bottles dishwasher safe?', '保溫水壺可用洗碗機清洗嗎？'],
  ['Which rug material is best for high-traffic areas?', '哪種地毯材質最適合高人流量區域？'],
  ['Room size guide', '房間尺寸指南'],
  ['How do I clean an area rug?', '如何清潔地毯？'],
  ['Skincare fridges preserve active ingredients by maintaining consistent cool temperatures.', '護膚冰箱透過保持穩定低溫來保留活性成分。'],
  ['Each fridge was evaluated over 30 days for temperature accuracy with calibrated thermometers, stability during compressor cycles, noise in dB at 1 foot, interior layout and bottle compatibility, build quality and seal integrity, and energy efficiency over 24 hours.', '我們在30天內使用校準溫度計評估每台冰箱的溫度準確度、壓縮機循環穩定性、1英尺處的噪音分貝數、內部佈局與瓶裝兼容性、製造品質與密封完整性，以及24小時能耗效率。'],
  ['Standing desk converters let you transform any existing desk into an ergonomic sit-stand workstation.', '升降桌轉換器讓您將任何現有書桌變身為人體工學坐站交替工作站。'],
  ['Each converter was tested for two weeks: stability during typing and writing at standing height, adjustment smoothness (gas spring vs manual), platform size for dual monitors and accessories, build quality and materials, assembly time, and overall value.', '每款轉換器經過兩週測試：站立高度的打字和書寫穩定性、調節順滑度（氣彈簧與手動對比）、雙顯示器和配件的平台尺寸、製造品質和材料、組裝時間，以及整體性價比。'],
  ['How much time should I stand?', '我應該站立多久？'],
  ['Will a converter fit my desk?', '轉換器適合我的書桌嗎？'],
  ['How often should a robot vacuum clean?', '掃地機器人應多久清潔一次？'],
  ['Best cordless vacuum for pet hair', '最佳寵物毛髮無線吸塵器'],
  ['What to look for in a massage gun', '按摩槍選購要點'],
  ['After testing over 30 portable blenders across six months, here are our definitive rankings for 2026.', '經過六個月測試超過30款便攜果汁機，以下是我們對2026年的確定排名。'],
  ['The BlenderBottle Blender Pro earns our top spot by delivering professional-grade blending in a genuinely portable package.', 'BlenderBottle Blender Pro以真正便攜的包裝提供專業級攪拌效果，獲得我們的頂級評價。'],
  ['Essential oil diffusers have become essential additions to modern homes.', '香薰擴散器已成為現代家庭的必備物品。'],
  ['At , the URPOWER 2nd Edition offers the best value.', 'URPOWER第二代以。'],
  ['A weighted blanket applies deep pressure stimulation to promote relaxation and improve sleep quality.', '重力毯透過深壓刺激促進放鬆和改善睡眠品質。'],
  ['How heavy should a weighted blanket be?', '重力毯應該多重？'],
  ['Each product goes through rigorous real-world testing by our expert reviewers before being recommended.', '每款產品在推薦前都要經過我們專家評測員嚴格的實測。'],
];

for (const dir of dirs) {
  const p = P + dir + '/index.astro';
  try {
    let ss = fs.readFileSync(p, 'utf8');
    const before = ss;
    for (const [oldT, newT] of globalPairs) {
      ss = ss.split(oldT).join(newT);
    }
    // Fix Best Innovation/Durability etc
    ss = ss.replace('— Best Innovation', '— 最佳創新款');
    ss = ss.replace('— Best Durability', '— 最耐用款');
    ss = ss.replace('— Best Premium', '— 最佳高端款');
    ss = ss.replace('— Best Heavy Setups', '— 最佳重型組合');
    ss = ss.replace('— Best Pod System', '— 最佳膠囊系統');
    // Fix JSON description fields
    ss = ss.replace(/"description":\s*"([^"]+)"/g, (_m, d) => {
      if (d.length > 30 && !d.includes('繁體') && !d.match(/[一-鿿]/)) {
        return '"描述": "' + d + '"';
      }
      return _m;
    });
    // Fix headline field
    ss = ss.replace(/"headline":\s*"([^"]+)"/g, (_m, h) => {
      if (!h.match(/[一-鿿]/)) {
        return '"標題": "' + h + '"';
      }
      return _m;
    });
    if (ss !== before) {
      fs.writeFileSync(p, ss, 'utf8');
      console.log(dir);
    }
  } catch(e) {}
}
console.log('Done!');
