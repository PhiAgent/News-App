export { };
const API_KEY = require('./../config');

// API ENDPOINTS
export const TECH_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;
export const BUSINESS_ENDPOINT: string = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
export const WORLD_ENDPOINT: string = `https://newsapi.org/v2/everything?q=(ukraine OR china)&from=2022-02-28&sortBy=publishedAt&apiKey=${API_KEY}`;

// MODELS
// By isolating the API logic from the server
// in this MVC application, its possible
// to substitute this api to another
// and without breaking the application