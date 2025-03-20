// controllers/newsController.js

import newsSchema from '../modles/news.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

export const createNewsPage = async (req, res) => {
  try {
    const { title } = req.body;

    let videoPath = req.files?.heroImage?.[0]?.path;
    console.log(req.files?.heroImage, 'heroImage');

    let secureUrl = '';
    if (videoPath) {
      const uploadResult = await uploadOnCloudinary(videoPath, {
        resource_type: 'video',
      });
      secureUrl = uploadResult?.secure_url;
    }

    const newNews = new newsSchema({
      bgImage: secureUrl,
      title: title,
    });

    const news = await newNews.save();

    res.status(200).json({
      success: true,
      news,
      message: 'News page uploaded successfully',
    });
  } catch (error) {
    console.error('Error uploading news page:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to upload news page',
    });
  }
};

export const getNewsPage = async (req, res) => {
  try {
    const news = await newsSchema.find({});
    console.log(news, 'news');

    res.status(200).json({
      success: true,
      news,
      message: 'News page retrieved successfully',
    });
  } catch (error) {
    console.error('Error fetching news page:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch news page',
    });
  }
};
