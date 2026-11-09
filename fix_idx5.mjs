import fs from "fs";
const base = "C:\\Users\\25061\\Documents\\ChatGPT\\网站\\csctechltd-trad\\src";

let idx = fs.readFileSync(base + "/pages/index.astro", "utf8");

// Fix data-i18n-feat attr - remove quotes around {i} so it's treated as expression
idx = idx.replaceAll('data-i18n-feat="{i}"', 'data-i18n-feat={i}');
idx = idx.replaceAll('data-i18n-type="title"', 'data-i18n-type="title"');
idx = idx.replaceAll('data-i18n-type="excerpt"', 'data-i18n-type="excerpt"');
idx = idx.replaceAll('data-i18n-type="readtime"', 'data-i18n-type="readtime"');

// Fix browse_all button  
idx = idx.replaceAll('>查看全部評測</span>', '>查看全部評測</span>');
if (!idx.includes('browse_all')) {
  idx = idx.replace(
    '<a href="/blog" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#1A1A1A] transition-all duration-300">\n          查看全部評測',
    '<a href="/blog" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-[#C9A962] text-[#C9A962] hover:bg-[#C9A962] hover:text-[#1A1A1A] transition-all duration-300"><span data-i18n="browse_all">查看全部評測</span>'
  );
}

fs.writeFileSync(base + "/pages/index.astro", idx, "utf8");
console.log("Fixed data-i18n-feat attr:", !idx.includes('data-i18n-feat="'));
