import express from 'express';
import upload from '../middlewere/multer.js';
import { createGetService, createServicePage, updateServicePage } from '../controllers/serviceController.js';


const serviceRoute = express.Router();

serviceRoute.get('/getservice', createGetService);
serviceRoute.put(
  '/updateservice/:id',
  upload.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'advanceImage', maxCount: 1 },
    { name: 'toplistImage', maxCount: 1 },
    { name: 'robotImage', maxCount: 1 },
    { name: 'competateImage', maxCount: 1 },
    { name: 'runwayImage', maxCount: 1 },
  ]),
  updateServicePage
);

serviceRoute.post(
  '/serviceRoute',
  upload.fields([
    {
      name: 'heroImage',
      maxCount: 1,
    },
    {
      name: 'advanceImage',
      maxCount: 1,
    },
    {
      name: 'toplistImage',
      maxCount: 1,
    },
    {
      name: 'robotImage',
      maxCount: 1,
    },
    {
      name: 'competateImage',
      maxCount: 1,
    },
    {
      name: 'runwayImage',
      maxCount: 1,
    },
  ]),
  createServicePage
);

export default serviceRoute;
