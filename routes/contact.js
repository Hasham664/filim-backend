import express from 'express';
import upload from '../middlewere/multer.js';
import { createContactPage, createGetContact } from '../controllers/contactController.js';

const contatcRoute = express.Router();

contatcRoute.get('/getcontact', createGetContact);
contatcRoute.post(
  '/contatcRoute',
  upload.fields([
    {
      name: 'heroImage',
      maxCount: 1,
    },
    
  ]),
  createContactPage
);

export default contatcRoute;
