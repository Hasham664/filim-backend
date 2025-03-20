import express from 'express';
import upload from '../middlewere/multer.js';
import { createNewsPage, getNewsPage } from '../controllers/newsController.js';

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

export default newRoute;
