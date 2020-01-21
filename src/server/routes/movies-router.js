const Router = require('koa-router');
const moviesRouter = new Router();
const moviesController = require('../controllers/movies-controller');

moviesRouter.post('/api/movies', moviesController.addMovie);
moviesRouter.get('/api/movies/:uuid', moviesController.getMovieByUUID);
moviesRouter.get('/api/movies', moviesController.getAllMovies);
moviesRouter.delete('/api/movies', moviesController.deleteMovieByUUID);
moviesRouter.put('/api/movies', moviesController.updateMovie);

module.exports = moviesRouter;