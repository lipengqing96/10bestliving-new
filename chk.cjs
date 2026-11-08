const fs=require('fs'); const s=fs.readFileSync('src/pages/blog/index.astro','utf8'); console.log(s.includes('Read Review')?'still there':'fixed');
