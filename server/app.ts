
//ENVIRONMENT
const dotenv = require('dotenv');
const path = require('path');


// SERVER
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { getBusinessNews, getWorldNews, getTechNews } = require('./controllers/controllers');

// SETUP
const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;


// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));


// ROUTES
app.get('/business', getBusinessNews);
app.get('/world', getWorldNews);
app.get('/tech', getTechNews);

// Catch Error URL Entry
app.get('*', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

dotenv.config;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));