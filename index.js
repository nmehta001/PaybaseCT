const koa = require("koa");
const app = new koa();

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);