const http=require("http");
const fs=require("fs");
const path=require("path");
const BASE=path.resolve("dist");
const exts={".html":"text/html",".css":"text/css",".js":"application/javascript",".png":"image/png",".svg":"image/svg+xml",".ico":"image/x-icon"};
function serve(req,res){
  try{
    let u=req.url.split("?")[0].split("#")[0]||"/";
    if(u==="/")u="/index.html";
    if(!u.startsWith("/"))u="/"+u;
    let fp=path.join(BASE,u);
    try{if(fs.statSync(fp).isDirectory())fp=path.join(fp,"index.html")}catch(e){}
    fs.readFile(fp,function(err,data){
      if(err){res.writeHead(404,{"Content-Type":"text/html"});res.end("<h1>404</h1>");return;}
      const ct=exts[path.extname(fp)]||"application/octet-stream";
      res.writeHead(200,{"Content-Type":ct});res.end(data);
    });
  }catch(e){console.log("ERR",req.url,e.message);res.writeHead(500);res.end("Error");}
}
const s=http.createServer(serve);
s.listen(8765,"127.0.0.1",function(){console.log("OK http://127.0.0.1:8765");});
