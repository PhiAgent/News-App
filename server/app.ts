
//ENVIRONMENT
import dotenv from 'dotenv';
import path from 'path';


// SERVER
import express, {Request, Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { getBusinessNews, getWorldNews, getTechNews } from './controllers/controllers';

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
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

dotenv.config;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));