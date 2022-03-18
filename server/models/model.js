const { Pool } = require('pg');
const config = require('./../../database/config');

const pool = new Pool(config);


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
            cb({ msg: 500 });
          })
      )
    .catch(err => cb({ msg: 500 }))
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
  const query = 'INSERT INTO favorites(userID, newsID) VALUES ($1, $2)';

  pool
    .connect()
    .then(client =>
      client
        .query(query, [userID, newsID])
        .then(success => {
          client.release();
          cb(null, {msg: 200});
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

module.exports = { fetchTechNews, fetchWorldNews, fetchBusinessNews, newFavorite, removeFavorite, changeUsername};