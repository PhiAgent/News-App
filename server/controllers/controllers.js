const { fetchTechNews, fetchWorldNews, fetchBusinessNews, newFavorite, removeFavorite, changeUsername } = require('./../models/model');

const getBusinessNews = (req, res) => {

  const cb = (err, businessNews) =>
    err ? res.status(err.msg).end() : res.status(200).send(businessNews);

  fetchBusinessNews(cb);
};

const getWorldNews = (req, res) => {

  const cb = (err, worldNews) =>
    err ? res.status(err.msg).end() : res.status(200).send(worldNews);

  fetchWorldNews(cb);

};

const getTechNews = (req, res) => {

  const cb = (err, techNews) =>
    err ? res.status(err.msg).end() : res.status(200).send(techNews);

  fetchTechNews(cb);

};

const addFavorite = (req, res) => {
  const userID = req.body.userID,
        newsID = req.body.newsID;

  const cb = (err, response) =>
    err ? res.status(err.msg).end() : res.status(response.msg).end();

  newFavorite(userID, newsID, cb);
};

const deleteFavorite = (req, res) => {
  const userID = req.body.userID,
        newsID = req.body.newsID;

  const cb = (err, response) =>
    err ? res.status(err.msg).end() : res.status(response.msg).end();

  removeFavorite(userID, newsID, cb);
};

const editUsername = (req, res) => {
  const oldUsername = req.body.oldUsername,
        newUsername = req.body.newUsername;

  const cb = (err, response) =>
    err ? res.status(err.msg).end() : res.status(response.msg).end();

  removeFavorite(oldUsername, newUsername, cb);
};


module.exports = { getBusinessNews, getWorldNews, getTechNews, addFavorite, deleteFavorite, editUsername};


// CONTROLLERS
// these consume API's exposed by the models
// and don't need to know what those api's do.
// As such, the API's can be modified and the application will still run unbroken