import blogSchema from '../modles/blog.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

export const createBlog = async (req, res) => {
  try {
    const { title, author, content, alt } = req.body;

    // Check if an image file is provided
    if (!req.files || !req.files.image || req.files.image.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Image file is required',
      });
    }

    // Safely access the image file path
    const imagePath = req.files.image[0].path;
    let imageUrl = '';

    if (imagePath) {
      const uploadResponse = await uploadOnCloudinary(imagePath);
      imageUrl = uploadResponse.secure_url;
    }

    const newBlog = new blogSchema({
      title,
      alt,
      author,
      content,
      image: imageUrl,
    });

    const savedBlog = await newBlog.save();

    return res.status(201).json({
      success: true,
      blog: savedBlog,
      message: 'Blog post created successfully',
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


//  Update an existing blog post.

export const updateBlog = async (req, res) => {
  try {
    // Extract blog id from URL parameters and updated data from the request body.
    const { id } = req.params;
    const { title, author, content,alt } = req.body;

    // Retrieve the blog post to update.
    const blogToUpdate = await blogSchema.findById(id);
    if (!blogToUpdate) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    // If a new image file is uploaded, handle the file upload.
    if (req.files?.image) {
      const imagePath = req.files.image[0].path;
      const uploadResponse = await uploadOnCloudinary(imagePath);
      blogToUpdate.image = uploadResponse.secure_url;
    }

    // Update the blog post with new data, if provided.
    blogToUpdate.title = title || blogToUpdate.title;
    blogToUpdate.author = author || blogToUpdate.author;
    blogToUpdate.content = content || blogToUpdate.content;
    blogToUpdate.alt = alt || blogToUpdate.alt;

    // Save the updated blog post.
    const updatedBlog = await blogToUpdate.save();

    return res.status(200).json({
      success: true,
      blog: updatedBlog,
      message: 'Blog post updated successfully',
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to update blog post',
    });
  }
};

/**
 * Delete a blog post by id.
 */
export const deleteBlog = async (req, res) => {
  try {
    // Extract blog id from URL parameters.
    const { id } = req.params;

    // Find and delete the blog post.
    const deletedBlog = await blogSchema.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to delete blog post',
    });
  }
};