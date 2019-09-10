var logger = require('./logger');
logger.log("Dravid");
const os = require('os')
var freeMem = os.freemem()
var totalMem = os.totalmem()
console.log('Text: ', {freeMem});
const fs = require('fs')
const files = fs.readdirSync('./');
console.log(files);
fs.readdir('./',function(err , files){
if (err){
    console.log('Error',err);
} 
});

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messageLogged',(arg) => {

    console.log('Listener called',arg);
});
emitter.emit('messageLogged',{id: 1,url:'http://'});
const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Hellow World');
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();

    }
});
server.on('connection',(socket)=>{
    console.log('New connection');
});
server.listen(3000);
console.log('Listening on port 3000')

