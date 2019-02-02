const assert = require('assert');
const Koa = require('koa');
const KoaLogger = require('koa-logger');
const KoaRespond = require('koa-respond');
const KoaRouter = require('koa-router');
const Mongoose = require('mongoose');
const config = require('./env')[process.env.NODE_ENV || 'development'];

const app = new Koa();
const router = new KoaRouter();

// const talks = require('code/routes/talks');

app.use(KoaLogger());
app.use(KoaRespond());

Mongoose.connect(config.MONGO_URI, (err, db) => {
  assert.equal(null, err);
  console.log("Successfully connected to the database");
  const t = require("./code/models/talk");

  t.find({}, (err, talks) => {
    console.log(`list of all talks: ${talks}`);
  });

  // console.log(db);
});

module.exports = app;
