const { Pool } = require('pg');
const config = require('./../../database/config');

const pool = new Pool(config);

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

const newFavorite = (userID, newsID, cb) => {
  const query = 'INSERT INTO favorites(userId, newsID) VALUES ($1, $2)';

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

module.exports = { fetchTechNews, fetchWorldNews, fetchBusinessNews, newFavorite};