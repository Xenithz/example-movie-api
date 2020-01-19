require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger')
const koaJson = require('koa-json');
const koaBodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();

app.use(logger());
app.use(koaJson());
app.use(cors({credentials: true}));
app.use(koaBodyParser());

app.use(async (ctx, next) => {
    try {
      await next();
    } 
    catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
});

app.on('error', (err) => {
  console.log(err);
});


app.listen(process.env.PORT, () => {
    console.log(`Server started listening on port: ${process.env.PORT}`);
});