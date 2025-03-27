import formSchema from '../modles/form.js';
import sendEmail from '../utils/sendEmail.js';
// POST: Create a new form submission
export const createFormPost = async (req, res) => {
  try {
    const { firstName, lastName, email, topic, message, phone } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !topic || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please fill all the required fields',
      });
    }

    // Create a new form submission document
    const newForm = new formSchema({
      firstName,
      lastName,
      email,
      topic,
      message,
      phone,
    });

    await newForm.save();

    // Send email with user details
    await sendEmail(
      'm.hasham3222@gmail.com',
      'New Form Submission',
      firstName,
      lastName,
      email,
      topic,
      message,
      phone
    );

    res.status(201).json({
      success: true,
      form: newForm,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Error creating form submission:', error);
    res
      .status(500)
      .json({ success: false, error: 'Failed to create form submission' });
  }
};


// GET: Retrieve all form submissions
export const createFormGet = async (req, res) => {
  try {
    const forms = await formSchema.find({});
    res.status(200).json({
      success: true,
      forms,
      message: 'Form submissions fetched successfully',
    });
  } catch (error) {
    console.error('Error fetching forms:', error);
    res
      .status(500)
      .json({ success: false, error: 'Failed to fetch form submissions' });
  }
};
