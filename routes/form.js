import express from 'express';
import { createFormPost, createFormGet } from '../controllers/formController.js';

const formRoute = express.Router();

formRoute.get('/getform', createFormGet);
formRoute.post('/formRoute', createFormPost);

export default formRoute;
