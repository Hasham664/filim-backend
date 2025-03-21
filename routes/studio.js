// routes/studioRoute.js

import express from 'express';
import upload from '../middlewere/multer.js';
import {
  createGetStudio,
  createStudioPage,
  updateStudioPage,
} from '../controllers/studioController.js';

const studioRoute = express.Router();

studioRoute.get('/getstudio', createGetStudio);
studioRoute.post(
  '/studioRoute',
  upload.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'toplistImage', maxCount: 1 },
    { name: 'toplistImage2', maxCount: 1 },
    { name: 'competateImage', maxCount: 1 },
    { name: 'competateImage2', maxCount: 1 },
  ]),
  createStudioPage
);

// New update route
studioRoute.put(
  '/updateStudio/:id',
  upload.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'toplistImage', maxCount: 1 },
    { name: 'toplistImage2', maxCount: 1 },
    { name: 'competateImage', maxCount: 1 },
    { name: 'competateImage2', maxCount: 1 },
  ]),
  updateStudioPage
);

export default studioRoute;
