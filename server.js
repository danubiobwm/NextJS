const { createServer } =  require('http');
const next = require ('next');
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle =routes.getRequestHandler(app);

app.prepare().then(()=>{
  createServer(handle).listen(3000);
});