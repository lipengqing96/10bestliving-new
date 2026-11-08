var fs=require("fs");
var D="C:\\Users\\25061\\Documents\\ChatGPT\\网站\\csctechltd-trad";
function walk(dir){
  var entries=fs.readdirSync(dir,{withFileTypes:true});
  entries.forEach(function(e){
    var p=dir+"/"+e.name;
    if(e.isDirectory())walk(p);
    else if(e.name.endsWith(".html")){
      var c=fs.readFileSync(p,"utf8");
      c=c.replace(/Top 10 Best Portable Blenders for Smoothies in 2026/g,"十大最佳便攜果汁機Smoothie攪拌機2026年推薦");
      c=c.replace(/Top 10 Best Robot Vacuums Under \$300 in 2026/g,"十大最佳300美元以內掃地機器人2026年推薦");
      c=c.replace(/Top 10 Best Yoga Mats for Beginners in 2026/g,"十大最佳瑜伽墊初學者入門2026年推薦");
      c=c.replace(/Top 10 Best Single-Serve Coffee Makers in 2026/g,"十大最佳單杯咖啡機2026年閱讀");
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
      c=c.replace(/Editor'"'"'s Choice/g,"編輯精選");
      c=c.replace(/Best Value/g,"最佳性價比");
      c=c.replace(/Our Pick/g,"我們的推薦");
      c=c.replace(/Top Pick/g,"首選之選");
      c=c.replace(/Premium Pick/g,"高端首選");
      fs.writeFileSync(p,c,"utf8");
      console.log("OK: "+p.split("\\").pop());
    }
  });
}
walk(D+"/dist/blog/");
console.log("Done");