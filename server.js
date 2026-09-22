const http=require('http'),fs=require('fs'),path=require('path');
const port=process.env.PORT||3000;
const index=fs.readFileSync(path.join(__dirname,'index.html'));
http.createServer((req,res)=>{
  const p=(req.url||'/').split('?')[0];
  if(p==='/'||p==='/index.html'||p==='/radar'){
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache'});
    return res.end(index);
  }
  if(p==='/health'){
    res.writeHead(200,{'Content-Type':'application/json'});
    return res.end(JSON.stringify({ok:true,service:'macbil-radar-web'}));
  }
  res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Not found');
}).listen(port,'0.0.0.0',()=>console.log('MACBIL RADAR web '+port));