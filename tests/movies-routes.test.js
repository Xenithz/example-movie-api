const request = require('supertest');
const app = require('../src/server/server');
const knex = require('../src/database/db');

describe('routes: Movies', () => {
    beforeEach(async () => {
        await knex('movies').del();
        await knex.seed.run();
    });

    afterAll(async () => {
        await knex.destroy();
    });

    describe('POST /api/movies', () => {
        it('should create a new movie', async () => {
            const mockMovie = {
                t_movie_name: 'test',
                t_movie_genre: 'test',
                t_movie_director: 'test'
            };

            const response = await request(app.callback()).post('/api/movies').send(mockMovie);
            expect(typeof response).toBe('object');
            expect(response.body.message).toEqual('success');
            expect(response.body.value.command).toEqual('INSERT');
            expect(response.body.value.rowCount).toEqual(1);
            expect(response.status).toEqual(200);
        });
    });

    describe('GET /api/movies', () => {
        it('should get all existing movies', async () => {
            const response = await request(app.callback()).get('/api/movies');
            expect(typeof response).toBe('object');
            expect(response.body.message).toEqual('success');
            expect(response.body.value.length).toEqual(3);
            expect(response.body.value[0].id).toEqual(1);
            expect(response.body.value[0].u_movie_id).toEqual('9b40b30b-99eb-4868-a75a-43dcf08211ec');
            expect(response.body.value[0].t_movie_name).toEqual('Whiplash');
            expect(response.body.value[0].t_movie_genre).toEqual('Drama');
            expect(response.body.value[0].t_movie_director).toEqual('Damien Chazelle');
            expect(response.status).toEqual(200);
        });

        it('should return movie with corresponding movie id', async () => {
            const response = await request(app.callback()).get('/api/movies/9b40b30b-99eb-4868-a75a-43dcf08211ec');
            expect(typeof response).toBe('object');
            expect(response.body.message).toEqual('success');
            expect(response.body.value.length).toEqual(1);
            expect(response.body.value[0].id).toEqual(1);
            expect(response.body.value[0].u_movie_id).toEqual('9b40b30b-99eb-4868-a75a-43dcf08211ec');
            expect(response.body.value[0].t_movie_name).toEqual('Whiplash');
            expect(response.body.value[0].t_movie_genre).toEqual('Drama');
            expect(response.body.value[0].t_movie_director).toEqual('Damien Chazelle');
            expect(response.status).toEqual(200);
        });
    });

    describe('PUT /api/movies', () => {
        it('should update existing movie', async () => {
            const mockMovie = {
                u_movie_id: '661362c9-8580-4a2b-8583-d9fd98424465',
                t_movie_name: 'test',
                t_movie_genre: 'test',
                t_movie_director: 'test'
            };

            const response = await request(app.callback()).put('/api/movies').send(mockMovie);
            expect(typeof response).toBe('object');
            expect(response.body.message).toEqual('success');
            expect(response.body.value).toEqual(1);
            expect(response.status).toEqual(200);
        });
    });

    describe('DELETE /api/movies', () => {
        it('should delete existing movie', async () => {
            const mockMovie = {
                u_movie_id: '661362c9-8580-4a2b-8583-d9fd98424465',
            };

            const response = await request(app.callback()).delete('/api/movies').send(mockMovie);
            expect(typeof response).toBe('object');
            expect(response.body.message).toEqual('success');
            expect(response.body.value).toEqual(1);
            expect(response.status).toEqual(200);
        });
    });
})