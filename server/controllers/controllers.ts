export { };
import axios from 'axios';
import { TECH_ENDPOINT, BUSINESS_ENDPOINT, WORLD_ENDPOINT } from './../models/models';
import {Request, Response} from 'express';


export const getBusinessNews = (req: Request, res: Response) => {

  axios
    .get(BUSINESS_ENDPOINT)
    .then((response: any) => res.status(200).send(response.data))
    .catch((err: any) => {
      console.log(err);
      res.status(400).end();
    });

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