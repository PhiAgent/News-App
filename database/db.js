import {Pool} from 'pg';
import { config } from './config';

const pool = new Pool(config);

export const fetchBusinessNews = cb => {
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