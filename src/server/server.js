require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger')
const koaJson = require('koa-json');
const koaBodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const errorHandler = require('./utilities/error-handler')
const composedRouter = require('./routes/composer');

const app = new Koa();

app.use(logger());
app.use(koaJson());
app.use(cors({credentials: true}));
app.use(koaBodyParser());
app.use(errorHandler());
app.use(composedRouter());

app.on('error', (err) => {
  console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log(`Server started listening on port: ${process.env.PORT}`);
});