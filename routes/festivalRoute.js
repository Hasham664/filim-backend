import express from 'express';
import upload from '../middlewere/multer.js';
import { createGetFestival, createFestivalPage, updatedFestival } from '../controllers/festivalController.js';

const festivalRoute = express.Router();

festivalRoute.get('/getfestival', createGetFestival);
festivalRoute.post(
  '/festivalRoute',
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
  createFestivalPage
);

festivalRoute.put(
  '/updatefestival/:id',
  upload.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'advanceImage', maxCount: 1 },
    { name: 'toplistImage', maxCount: 1 },
    { name: 'robotImage', maxCount: 1 },
    { name: 'competateImage', maxCount: 1 },
    { name: 'runwayImage', maxCount: 1 },
  ]),
  updatedFestival
);

export default festivalRoute;
