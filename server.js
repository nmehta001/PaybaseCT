const Koa = require('koa');
const KoaLogger = require('koa-logger');
const KoaRespond = require('koa-respond');
const KoaRouter = require('koa-router');
const Mongoose = require('mongoose');

const app = new Koa();
const router = new KoaRouter();

app.use(KoaLogger());

app.use(KoaRespond());

require('./code/routes')(router);
app.use(router.routes());
app.use(router.allowedMethods());

Mongoose.connect(`mongodb://<dbuser>:<dbpassword>@ds213645.mlab.com:13645/paybase-ct`);

module.exports = app;
