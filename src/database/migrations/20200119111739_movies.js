
exports.up = (knex) => {
    return knex.schema.createTable('movies', (table) => {
        table.increments('id')
        table.uuid('u_movie_id')
        table.text('t_movie_name')
        table.text('t_movie_genre')
        table.text('t_movie_director')
        table.unique('t_movie_name')
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
