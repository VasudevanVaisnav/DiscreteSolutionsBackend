const http = require('http');
const app = require('./app');
http.createServer(app).listen(3060,()=>{
  console.log("conected")
});