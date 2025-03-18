import blogSchema from '../modles/blog.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

export const createBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    let imagePath = req.files?.image[0]?.path;
    let imageUrl = '';
    if (imagePath) {
      const uploadResponse = await uploadOnCloudinary(imagePath);
      imageUrl = uploadResponse.secure_url;
    }
    const newBlog = new blogSchema({
      title,
      author,
      content,
      image: imageUrl,
    });
    const savedBlog = await newBlog.save();
    return res.status(201).json({
      success: true,
      blog: savedBlog,
      message: 'Blog post successfully',
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to create blog post',
    });
  }
};








export const getBlogs = async (req, res) => {
  try {
    const blogs = await blogSchema.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      blogs,
      message: 'Blog posts fetched successfully',
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch blog posts',
    });
  }
};

