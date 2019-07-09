const dummyPgConfig = {
  // placeholder since there is no pg locally
  host: '',
  database: '',
  user: '',
  password: ''
 };
 
 const prodDbConnection = process.env.DATABASE_URL || dummyPgConfig;


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipeBook.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
    production: {
      client: 'postgresql',
      connection: prodDbConnection,  
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds'
      },
    }
  };
