import express from 'express';
import upload from '../middlewere/multer.js';
import { createGetStudio,createStudioPage } from '../controllers/studioController.js';

const studioRoute = express.Router();

studioRoute.get('/getstudio', createGetStudio);
studioRoute.post(
  '/studioRoute',
  upload.fields([
    {
      name: 'heroImage',
      maxCount: 1,
    },

    {
      name: 'toplistImage',
      maxCount: 1,
    },
    {
      name: 'toplistImage2',
      maxCount: 1,
    },
    {
      name: 'competateImage',
      maxCount: 1,
    },
    {
      name: 'competateImage2',
      maxCount: 1,
    },
  ]),
  createStudioPage
);

export default studioRoute;
