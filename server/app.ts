
//ENVIRONMENT
import * as dotenv from 'dotenv';
import path from 'path';

// SERVER
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 8080;

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

dotenv.config;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));