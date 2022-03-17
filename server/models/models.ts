export { };
const API_KEY = require('./../config');

// API ENDPOINTS
const TECH_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
const BUSINESS_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
const WORLD_ENDPOINT: string = `https://newsapi.org/v2/everything?q=(ukraine OR china)&from=2022-02-28&sortBy=publishedAt&apiKey=${API_KEY}`;

module.exports = { TECH_ENDPOINT, BUSINESS_ENDPOINT, WORLD_ENDPOINT};

// Notes
// By isolating the API logic from the server
// in this MVC application, its possible
// to substitute this api to another
// and without breaking the application