export { };
const axios = require('axios');
const { TECH_ENDPOINT, BUSINESS_ENDPOINT, WORLD_ENDPOINT } = require('./../models/models');

const getBusinessNews = (req: any, res: any) => {

  axios
    .get(BUSINESS_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => {
      console.log(err);
      res.status(400).end();
    });

};

const getWorldNews = (req: any, res: any) => {

  axios
    .get(WORLD_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => res.status(400).end());

};

const getTechNews = (req: any, res: any) => {

  axios
    .get(TECH_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => res.status(400).end());

};

module.exports = { getBusinessNews, getWorldNews, getTechNews};

// Controller
// these consume API's exposed by the models
// and don't need to know what those api's do.
// As such, the API's can be modified and the application will still run unbroken