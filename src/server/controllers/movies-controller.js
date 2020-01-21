const knex = require('../../database/db');
const uuidv4 = require('uuid/v4');

const addMovie = async ctx => {
    const queryResults = await knex('movies')
    .insert({ u_movie_id: uuidv4(), t_movie_name: ctx.request.body.t_movie_name, t_movie_genre: ctx.request.body.t_movie_genre, t_movie_director: ctx.request.body.t_movie_director });
    ctx.status = 200;
    ctx.body = {
        message: 'success',
        value: queryResults
    };
}

const getAllMovies = async ctx => {
    const queryResults = await knex('movies');
    ctx.status = 200;
    ctx.body = {
        message: 'success',
        value: queryResults
    };
}

const getMovieByUUID = async ctx => {
    const queryResults = await knex('movies').where({ u_movie_id: ctx.params.uuid});
    ctx.status = 200;
    ctx.body = {
        message: 'success',
        value: queryResults
    };
}

const deleteMovieByUUID = async ctx => {
    const queryResults = await knex('movies').where({ u_movie_id: ctx.request.body.u_movie_id }).del();
    ctx.status = 200;
    ctx.body = {
        message: 'success',
        value: queryResults
    };
}

const updateMovie = async ctx => {
    const queryResults = await knex('movies').where({ u_movie_id: ctx.request.body.u_movie_id }).update(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
        message: 'success',
        value: queryResults
    };
}

module.exports = {
    getAllMovies,
    getMovieByUUID,
    addMovie,
    deleteMovieByUUID,
    updateMovie
}