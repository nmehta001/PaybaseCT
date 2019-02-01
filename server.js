const Koa = require('koa');
const KoaLogger = require('koa-logger');
const KoaRespond = require('koa-respond');
const KoaRouter = require('koa-router');
const Mongoose = require('mongoose');

const app = new Koa();
const router = new KoaRouter();
const assert = require('assert');

app.use(KoaLogger());

app.use(KoaRespond());

require('./code/routes')(router);

app.use(router.routes());
app.use(router.allowedMethods());

Mongoose.connect(`mongodb://testuser:paybasect1@ds213645.mlab.com:13645/paybase-ct`, (err, db) => {
  assert.equal(null, err);
  console.log("Successfully connected to the database");
  console.log(db);
});

module.exports = app;
