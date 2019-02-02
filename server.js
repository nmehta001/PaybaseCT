const Koa = require('koa');
const KoaLogger = require('koa-logger');
const KoaRespond = require('koa-respond');
const KoaRouter = require('koa-router');

const db = require('./code/db/db');

const app = new Koa();
const router = new KoaRouter();
router.allowedMethods();

app.use(KoaLogger());
app.use(KoaRespond());

db.connect();

module.exports = app;
