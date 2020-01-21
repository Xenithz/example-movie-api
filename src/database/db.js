const knex = require('knex');
const knexfile = require('../../knexfile');
const env = process.env.NODE_ENV || 'test';
const configOptions = knexfile[env];

module.exports = knex(configOptions);