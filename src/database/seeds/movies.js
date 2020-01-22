exports.seed = async knex => {
    await knex.raw('TRUNCATE TABLE movies RESTART IDENTITY CASCADE');
    await knex('movies').insert([
      {id: 1, u_movie_id: '9b40b30b-99eb-4868-a75a-43dcf08211ec', t_movie_name: 'Whiplash', t_movie_genre: 'Drama', t_movie_director: 'Damien Chazelle'},
      {id: 2, u_movie_id: 'b02afaef-46a8-4524-b09c-6d7e98886b98', t_movie_name: 'Skyfall', t_movie_genre: 'Action', t_movie_director: 'Sam Mendes'},
      {id: 3, u_movie_id: '661362c9-8580-4a2b-8583-d9fd98424465', t_movie_name: 'Frozen', t_movie_genre: 'Adventure', t_movie_director: 'Jennifer Lee'}
    ]);
};
