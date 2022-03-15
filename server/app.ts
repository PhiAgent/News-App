
//ENVIRONMENT
import * as dotenv from 'dotenv';
import * as path from 'path';


// SERVER
import * as express from 'express';
import * as url from 'url';
import * as cors from 'cors';
import * as morgan from 'morgan';
import axios from 'axios';
import API_KEY from './config';
const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;


// API ENDPOINTS
const TECH_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
const BUSINESS_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
const WORLD_ENDPOINT: string = `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;
const auth = {
  headers: { 'Authorization': `${API_KEY}` }
};


// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));


// ROUTES

app.get('/business', (req, res) => {

  axios
    .get(`${BUSINESS_ENDPOINT}${path}`, auth)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(400).end());
});

app.get('/world', (req, res) => {

  axios
    .get(`${WORLD_ENDPOINT}${path}`, auth)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(400).end());
});

app.get('/tech', (req, res) => {

  axios
    .get(`${TECH_ENDPOINT}${path}`, auth)
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(400).end());
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

dotenv.config;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));