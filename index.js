const fs = require('fs')
const http = require('http')
const port = 7000;


function readServe(path, res)   
{
    fs.readFile(path,(err, data)=>{
    
        console.log(data.toString());
  
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
}

const server = http.createServer((req,res)=>{
  if(req.url ==='/' || req.url ==='/home'){
    readServe("./home.html",res) 
  }
  else if(req.url ==='/about'){
    readServe("./about.html",res)
  }
  else if(req.url==='/contact'){
    readServe("./contact.html",res)
  }
});
server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

