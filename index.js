const Koa = require('koa');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const server = require('./server');

server.listen(3000, () => console.log('API is running in the background'));

const app = new Koa();
app.use(logger());

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
