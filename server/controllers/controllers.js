const { fetchTechNews, fetchWorldNews, fetchBusinessNews, newFavorite, removeFavorite, changeUsername, registerUser, fetchFavorites } = require('./../models/model');


const getFavorites = (req, res) => {
  const userID = req.query.userID;

  const cb = (err, response) =>
    err ? res.status(err.msg).end() : res.status(200).send(response);

  fetchFavorites(userID, cb);
};

const getBusinessNews = (req, res) => {

  const cb = (err, businessNews) =>
  err ? res.status(err.msg).end() : res.status(200).send(businessNews);

  fetchBusinessNews(cb);
};

const addUser = (req, res) => {
  const username = req.body.username;

  const cb = (err, user) =>
    err ? res.status(500).end(err) : res.status(200).send(user);

  registerUser(username, cb);
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
  const userID = req.query.userID,
        newsID = req.query.newsID;

  const cb = (err, response) =>
    err ? res.status(err.msg).end() : res.status(response.msg).end();

  removeFavorite(userID, newsID, cb);
};

const editUsername = (req, res) => {
  const oldUsername = req.body.oldUsername,
        newUsername = req.body.newUsername;

  const cb = (err, response) =>
    err ? res.status(err.msg).end() : res.status(response.msg).end();

  changeUsername(oldUsername, newUsername, cb);
};


module.exports = { getBusinessNews, getWorldNews, getTechNews, addFavorite, deleteFavorite, editUsername, addUser, getFavorites};


// CONTROLLERS
// The controllers consume API's exposed by the models
// and don't need to know what those api's do.
// As such, the API's can be modified and the application will still run unbroken