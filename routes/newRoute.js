// routes/newsRoutes.js

import express from 'express';
import upload from '../middlewere/multer.js';
import {
  createNewsPage,
  getNewsPage,
  updateNewsPage,
} from '../controllers/newsController.js';

const newRoute = express.Router();

newRoute.get('/getnews', getNewsPage);
newRoute.post(
  '/newsRoute',
  upload.fields([
    {
      name: 'heroImage',
      maxCount: 1,
    },
  ]),
  createNewsPage
);

// New update route to update a news page by its ID
newRoute.put(
  '/update/:id',
  upload.fields([
    {
      name: 'heroImage',
      maxCount: 1,
    },
  ]),
  updateNewsPage
);

export default newRoute;
