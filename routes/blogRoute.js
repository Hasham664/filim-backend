import express from 'express';
import upload from '../middlewere/multer.js';
import { createBlog, getBlogs } from '../controllers/blogController.js';

const blogRoute = express.Router();

blogRoute.get('/getblog', getBlogs);
blogRoute.post(
  '/blogroute',
  upload.fields([
    {
      name: 'image',
      maxCount: 1,
    },
  ]),
  createBlog
);

export default blogRoute;
