const uuidv4 = require('uuid/v4');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, u_movie_id: uuidv4(), t_movie_name: 'Whiplash', t_movie_genre: 'Drama', t_movie_director: 'Damien Chazelle'},
        {id: 2, u_movie_id: uuidv4(), t_movie_name: 'Skyfall', t_movie_genre: 'Action', t_movie_director: 'Sam Mendes'},
        {id: 3, u_movie_id: uuidv4(), t_movie_name: 'Frozen', t_movie_genre: 'Adventure', t_movie_director: 'Jennifer Lee'}
      ]);
    });
};
