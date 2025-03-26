import express from 'express';
import { createGetterm, createtermPage, updateTermPage }
 from '../controllers/termController.js';

const termRoute = express.Router();

termRoute.get('/getterm', createGetterm);
termRoute.post(
  '/postterm',
  createtermPage
);
termRoute.put(
  '/updateterm/:id',
  updateTermPage
);

export default termRoute;
