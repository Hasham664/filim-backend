import express from 'express';
import { createGetHome, createHomePage } from '../controllers/HomeController.js';
import upload from '../middlewere/multer.js';


const homeRouter = express.Router();

homeRouter.get('/gethome', createGetHome)
homeRouter.post(
  '/homeRoute',
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
  createHomePage
);

export default homeRouter;
