const { fetchTechNews, fetchWorldNews, fetchBusinessNews } = require('./../models/model');

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

module.exports = { getBusinessNews, getWorldNews, getTechNews};


// CONTROLLERS
// these consume API's exposed by the models
// and don't need to know what those api's do.
// As such, the API's can be modified and the application will still run unbroken