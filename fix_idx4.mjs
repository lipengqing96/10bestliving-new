import fs from "fs";
const base = "C:\\Users\\25061\\Documents\\ChatGPT\\网站\\csctechltd-trad\\src";

let idx = fs.readFileSync(base + "/pages/index.astro", "utf8");

// 1. Remove t constant line if exists
idx = idx.replace(/const t = \{[^}]+\};\n/g, "");

// 2. Fix featured reviews to use data-i18n-feat properly in template
// Pattern: <span class="feat-title" ...>{review.title}</span> -> add data-i18n-feat attr
idx = idx.replaceAll(
  'class="font-serif text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#C9A962] transition-colors line-clamp-2 leading-tight">',
  'class="font-serif text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#C9A962] transition-colors line-clamp-2 leading-tight" data-i18n-feat="{i}" data-i18n-type="title">'
);

// Note: We can't put {i} inside HTML attribute directly in Astro... 
// Actually in Astro we CAN! The template literal approach won't work in static HTML though.
// Let me check how the current code looks:
console.log("index length:", idx.length);
console.log("has feat-title:", idx.includes('feat-title'));
console.log("has i18n-feat:", idx.includes('data-i18n-feat'));
console.log("has t[review:", idx.includes('t[review'));

fs.writeFileSync(base + "/pages/index.astro", idx, "utf8");
