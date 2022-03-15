
//ENVIRONMENT
const dotenv = require('dotenv');
const path = require('path');


// SERVER
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const API_KEY = require('./config');
const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;


// API ENDPOINTS
const TECH_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
const BUSINESS_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
const WORLD_ENDPOINT: string = `https://newsapi.org/v2/everything?q=(ukraine OR china)&from=2022-02-28&sortBy=publishedAt&apiKey=${API_KEY}`;


// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));


// ROUTES

// Get Business News
app.get('/business', (req: any, res: any) => {

  axios
    .get(BUSINESS_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => {
      console.log(err);
      res.status(400).end();
    });
});

// Get World News
app.get('/world', (req: any, res: any) => {

  axios
    .get(WORLD_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => res.status(400).end());
});

// Get Tech News
app.get('/tech', (req: any, res: any) => {

  axios
    .get(TECH_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => res.status(400).end());
});

app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

dotenv.config;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));