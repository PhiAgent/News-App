export { };
import axios from 'axios';
import { TECH_ENDPOINT, BUSINESS_ENDPOINT, WORLD_ENDPOINT } from './../models/models';
import {Request, Response} from 'express';
import { fetchBusinessNews } from './../../database/db';

interface News {
  id: number;
  category: string;
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedOn: string;
};

interface User {
  id: number;
  username: string;
  admin: boolean;
};

interface favorite {
  id: number;
  userID: number;
  newsID: number;
};

export const getBusinessNews = (req: Request, res: Response) => {

  const cb = (err: {msg: number}, news: News[]) =>
  err ? res.status(err.msg).end : res.status(200).send(news);

  fetchBusinessNews(cb);
};

export const getWorldNews = (req: Request, res: Response) => {

  axios
    .get(WORLD_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => res.status(400).end());

};

export const getTechNews = (req: Request, res: Response) => {

  axios
    .get(TECH_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => res.status(400).end());

};


// CONTROLLERS
// these consume API's exposed by the models
// and don't need to know what those api's do.
// As such, the API's can be modified and the application will still run unbroken