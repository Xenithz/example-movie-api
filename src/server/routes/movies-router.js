const Router = require('koa-router');
const moviesRouter = new Router();
const moviesController = require('../controllers/movies-controller');

moviesRouter.get('/api/movies', moviesController.test);

module.exports = moviesRouter;