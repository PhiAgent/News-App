
//ENVIRONMENT
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, "./config.env") });


// SERVER
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const { getBusinessNews, getWorldNews, getTechNews, addFavorite, deleteFavorite, editUsername, addUser, getFavorites } = require('./controllers/controllers');

// SETUP
const app = express();
const PORT = process.env.PORT || 8080;


// MIDDLEWARE
app.use(morgan('dev'));
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));


// ROUTES
app.get('/business', getBusinessNews);
app.get('/world', getWorldNews);
app.get('/tech', getTechNews);
app.get('/favorite', getFavorites);
app.post('/user', addUser);
app.post('/favorite', addFavorite);
app.delete('/favorite', deleteFavorite);
app.put('/username', editUsername);


// CATCH ERROR URL ENTRY
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });


// LISTEN
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


// VIEWS
// The server exposes APIs that are consumed by
// the UI on the frontend to render information.
