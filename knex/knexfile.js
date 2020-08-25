// Update with your config settings.
require('ts-node/register');

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: '3336',
      database: 'employees',
      user: 'employees',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10,
      propagateCreateError: false

    }
  }
};
