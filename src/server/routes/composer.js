const combineRouters = require('koa-combine-routers');
const moviesRouter = require('./movies-router');

const composedRouter = combineRouters(moviesRouter);

module.exports = composedRouter;