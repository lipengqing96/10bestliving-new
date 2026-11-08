var fs=require("fs");
var D="C:\\Users\\25061\\Documents\\ChatGPT\\网站\\csctechltd-trad";
function walk(dir){
  var entries=fs.readdirSync(dir,{withFileTypes:true});
  entries.forEach(function(e){
    var p=dir+"/"+e.name;
    if(e.isDirectory())walk(p);
    else if(e.name.endsWith(".html")){
      var c=fs.readFileSync(p,"utf8");
      // Fix broken replacements
      c=c.replace(/min 分鐘閱讀/g,"分鐘閱讀");
      c=c.replace(/minute 分鐘閱讀/g,"分鐘閱讀");
      c=c.replace(/minutes 分鐘閱讀/g,"分鐘閱讀");
      // Product titles in blog cards
      c=c.replace(/Top 10 Best Portable Blenders for Smoothies in 2026/g,"十大最佳便攜果汁機Smoothie攪拌機2026年推薦");
      c=c.replace(/Top 10 Best Robot Vacuums Under \$300 in 2026/g,"十大最佳300美元以內掃地機器人2026年推薦");
      c=c.replace(/Top 10 Best Yoga Mats for Beginners in 2026/g,"十大最佳瑜伽墊初學者入門2026年推薦");
      c=c.replace(/Top 10 Best Single-Serve Coffee Makers in 2026/g,"十大最佳單杯咖啡機2026年推薦");
      c=c.replace(/Top 10 Best Insulated Water Bottles in 2026/g,"十大最佳保溫水壺2026年推薦");
      c=c.replace(/Top 10 Best Weighted Blankets for Better Sleep in 2026/g,"十大最佳重力毯改善睡眠2026年推薦");
      c=c.replace(/Top 10 Best LED Desk Lamps Work From Home in 2026/g,"十大最佳居家辦公LED檯燈2026年推薦");
      c=c.replace(/Top 10 Best Essential Oil Diffusers in 2026/g,"十大最佳香薰擴散器2026年推薦");
      c=c.replace(/Top 10 Best Air Fryers for Small Kitchens in 2026/g,"十大最佳小型廚房空氣炸鍋2026年推薦");
      c=c.replace(/Top 10 Best Cordless Vacuums Lightweight in 2026/g,"十大最佳輕量無線吸塵器2026年推薦");
      c=c.replace(/Top 10 Best Electric Kettles Precise Temperature in 2026/g,"十大最佳精確控溫電水壺2026年推薦");
      c=c.replace(/Top 10 Best Massage Guns Recovery in 2026/g,"十大最佳肌肉復甦按摩槍2026年推薦");
      c=c.replace(/Top 10 Best Skincare Fridges Mini in 2026/g,"十大最佳迷你護膚冰箱2026年推薦");
      c=c.replace(/Top 10 Best Standing Desks Converter in 2026/g,"十大最佳升降桌轉換器2026年推薦");
      c=c.replace(/Top 10 Best Area Rugs Living Room in 2026/g,"十大最佳客廳地毯2026年推薦");
      // Badges
      c=c.replace(/Editor'"'"'s Choice/g,"編輯精選");
      c=c.replace(/Best Value/g,"最佳性價比");
      c=c.replace(/Our Pick/g,"我們的推薦");
      c=c.replace(/Top Pick/g,"首選之選");
      c=c.replace(/Premium Pick/g,"高端首選");
      // More UI text
      c=c.replace(/Curated Picks/g,"精心挑選");
      c=c.replace(/Editor'"'"'s Selection/g,"編輯精選");
      c=c.replace(/500\+ Products Tested/g,"500+產品實測");
      c=c.replace(/Expert Reviews/g,"專家評測");
      c=c.replace(/Unbiased Rankings/g,"公正排名");
      c=c.replace(/From commute-ready models to gym bag companions, these portable blenders deliver fresh smoothies anywhere./g,"從通勤到健身房，便攜果汁機隨時為你打造新鮮Smoothie。");
      c=c.replace(/Clean your home smartly without breaking the bank. We tested the top robot vacuums for value and performance./g,"智慧清潔不花大錢，我們測試了最具性價比的掃地機器人榜單。");
      c=c.replace(/Find your perfect mat for every practice level. We tested grip, cushioning, and durability across 25 models./g,"找到適合每個練習階段的完美瑜伽墊，我們測試了25款產品的抓地力、緩衝和耐用性。");
      c=c.replace(/Perfect your morning ritual with the best pod and ground coffee makers — from \$40 to \$300./g,"用最佳膠囊和研磨咖啡機提升您的早晨儀式，價格從40至300美元。");
      c=c.replace(/Stay hydrated all day. We tested 18 bottles for cold retention, durability, and leak-proof performance./g,"全天保持水分補給，我們測試了18款水壺的保冷能力、耐用性和防漏性能。");
      c=c.replace(/Transform your sleep quality with deep pressure therapy. Tested for weight distribution and temperature./g,"用深壓刺激療法提升睡眠品質，經測試重量分佈和溫度調節表現。");
      c=c.replace(/Expert product reviews you can trust/g,"值得信賴的專家產品評測");
      c=c.replace(/See our top picks/g,"查看我們的精選");
      // Navigation
      c=c.replace(/>Home</g,">首頁<");
      c=c.replace(/>About</g,">關於我們<");
      c=c.replace(/>Contact</g,">聯絡我們<");
      c=c.replace(/aria-label="Open menu"/g,'aria-label="開啟選單"');
      c=c.replace(/aria-label="Close menu"/g,'aria-label="關閉選單"');
      c=c.replace(/Newsletter/g,"電子報");
      c=c.replace(/Join 50,000\+ Discerning Shoppers/g,"加入5萬位講究品味的購物者");
      c=c.replace(/Get our weekly curated picks, exclusive deals, and expert buying guides delivered to your inbox./g,"每週為您送去精選好物、獨家優惠和專家購買指南。");
      c=c.replace(/Enter your email address/g,"請輸入您的電子郵件地址");
      c=c.replace(/>Subscribe</g,">訂閱<");
      c=c.replace(/No spam, ever. Unsubscribe anytime. We respect your privacy./g,"絕不濫發郵件。隨時可取消訂閱。我們尊重您的隱私權。");
      c=c.replace(/lang="en"/g,'lang="zh-TW"');
      c=c.replace(/Curated luxury product reviews for discerning lifestyles/,"為講究品味的生活精選頂級產品評測。專業見解，公正評分，經典之選。");
      fs.writeFileSync(p,c,"utf8");
      console.log("Fixed: "+p.split("\\").pop());
    }
  });
}
walk(D+"/dist/");
console.log("All done!");