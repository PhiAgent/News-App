const { Pool } = require('pg');
// uncomment for Local
// const { localConfig, deploymentConfig } = require('./../../database/config');
require('dotenv').config();

// Environment
const isProduction = process.env.NODE_ENV === 'production';

// Production Config
const productionConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl:isProduction
};

// Config Details--uncomment for Local
// const connectionConfig = isProduction ? productionConfig : localConfig;

// Deployment Connection
const pool = new Pool(productionConfig);

// local Connection
// const pool = new Pool(localConfig);


/**
   * Checks if user already registered in database
   * if user not registered, adds user to database
   * @param {string} username - username of user
   * @returns {void} - returns nothing but supplies callback with object containing user information
  */
const registerUser = (username, cb) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  const addUser = 'INSERT INTO users(username) VALUES ($1)';

  pool
    .connect()
    .then(client =>
      client
        .query(query, [username])
        .then(users => {
          if(users.rows.length === 0){//no such user exists
            client
              .query(addUser, [username])
              .then(success => {
                client
                  .query(query, [username])
                  .then(user => {
                    client.release();
                    cb(null, user.rows);
                  } )
                  .catch(err => {
                    client.release();
                    cb(err);
                  })
              })
              .catch(err => {
                client.release();
                cb(err);
              })
          } else {
            client.release();
            cb(null, users.rows);
          }
        })
        .catch(err => {
          client.release();
          cb({ msg: 500});
        })
    )
    .catch(err => cb({ msg: 500 }))
};


/**
   * Fetches business news from the database below
   * @param {function} callback - a function that takes argument to the controller layer above
   * @returns {void} - returns nothing but provides callback with array of query results
  */
const fetchBusinessNews = cb => {
  const query = 'SELECT * FROM news WHERE category = $1 LIMIT 10';

  pool
    .connect()
    .then(client =>
        client
          .query(query, ['business'])
          .then( news => {
            client.release();
            cb(null, news.rows);
          })
          .catch( err => {
            client.release();
            cb({ msg: 500, err: err});
          })
      )
    .catch(err => cb({ msg: 500, err: err }))
};


/**
   * Fetches world news from the database below
   * @param {function} callback - a function that takes argument to the controller layer above
   * @returns {void} - returns nothing but provides callback with array of query results
  */
const fetchWorldNews = cb => {
  const query = 'SELECT * FROM news WHERE category = $1 LIMIT 10';

  pool
    .connect()
    .then(client =>
      client
        .query(query, ['world news'])
        .then(news => {
          client.release();
          cb(null, news.rows);
        })
        .catch(err => {
          client.release();
          cb({ msg: 500 });
        })
    )
    .catch(err => cb({ msg: 500 }))
};


/**
   * Fetches tech news from the database below
   * @param {function} callback - a function that takes argument to the controller layer above
   * @returns {void} - returns nothing but provides callback with array of query
  */
const fetchTechNews = cb => {
  const query = 'SELECT * FROM news WHERE category = $1 LIMIT 10';

  pool
    .connect()
    .then(client =>
      client
        .query(query, ['technology'])
        .then(news => {
          client.release();
          cb(null, news.rows);
        })
        .catch(err => {
          client.release();
          cb({ msg: 500 });
        })
    )
    .catch(err => cb({ msg: 500 }))
};


/**
   * Adds a new favorite to the favorites table
   * @param {number} userID - id of user
   * @param {number} newsID - id of news being unfavorited
   * @returns {void} - returns nothing but supplies callback with object with information on whether the transaction was successful
  */
const newFavorite = (userID, newsID, cb) => {
  const check = 'SELECT * FROM favorites WHERE userID = $1 AND newsID = $2';
  const query = 'INSERT INTO favorites(userID, newsID) VALUES ($1, $2)';

  pool
    .connect()
    .then(client =>
      client
        .query(check, [userID, newsID])//check to make sure user hasn't favorited already
        .then(success => {
          if(success.rows.length === 0) {//not favorited already
            client
              .query(query, [userID, newsID])//now insert
              .then(favorited => {
                client.release();
                cb(null, { msg: 200 });
              })
              .catch(err => {
                client.release();
                cb({ msg: 500 });
              })
          } else {//already favorited
            client.release();
            cb(null, { msg: 200 });
          }
        })
        .catch(err => {
          client.release();
          cb({ msg: 500 });
        })
    )
    .catch(err => cb({ msg: 500 }))
};


/**
   * Removes a favorite from the favorites table
   * @param {number} userID - id of user
   * @param {number} newsID - id of news being unfavorited
   * @returns {void} - returns nothing but supplies callback with object with information on whether the transaction was successful
  */
const removeFavorite = (userID, newsID, cb) => {
  const query = 'DELETE FROM favorites WHERE (userID = $1 AND newsID = $2)';

  pool
    .connect()
    .then(client =>
      client
        .query(query, [userID, newsID])
        .then(success => {
          client.release();
          cb(null, { msg: 200 });
        })
        .catch(err => {
          client.release();
          cb({ msg: 500 });
        })
    )
    .catch(err => cb({ msg: 500 }));
};


/**
   * Changes username of the given user
   * @param {string} oldUsername - old username of user
   * @param {string} newUsername - new username of user
   * @returns {void} - returns nothing but supplies callback with object with information on whether the transaction was successful
  */
const changeUsername = (oldUsername, newUsername, cb) => {
  const query = 'UPDATE users SET username = $1 WHERE (username = $2)';

  pool
    .connect()
    .then(client =>
      client
        .query(query, [newUsername, oldUsername])
        .then(success => {
          client.release();
          cb(null, { msg: 200 });
        })
        .catch(err => {
          client.release();
          cb({ msg: 500 });
        })
    )
    .catch(err => cb({ msg: 500 }))
};


/**
   * Fetches the favorite news of given user
   * @param {number} userId - userId of user
   * @returns {void} - returns nothing but supplies callback with object with favorite news of user
  */
const fetchFavorites = (userID, cb) => {
  const query = 'SELECT * FROM news WHERE id IN (SELECT newsID FROM favorites WHERE (userID = $1))';

  pool
    .connect()
    .then(client =>
      client
        .query(query, [userID])
        .then(favorites => {
          client.release();
          cb(null, favorites.rows);
        })
        .catch(err => {
          client.release();
          cb({ msg: 500 });
        })
    )
    .catch(err => cb({ msg: 500 }));
};

module.exports = { fetchTechNews, fetchWorldNews, fetchBusinessNews, newFavorite, removeFavorite, changeUsername, registerUser, fetchFavorites};


// MODELS
// The Model component sits directly on top
// of the database and doesn't need to know what
// information is coming from the database.
// By isolating the API logic from the server
// in this MVC application, the business logic
// is essentialy isolated, allowing the
// application to be amenable to business
// changes in the future. its possible
// to substitute this api to another
// and without breaking the application