import formSchema from '../modles/form.js';

// POST: Create a new form submission
export const createFormPost = async (req, res) => {
  try {
    const { firstName, lastName, email, topic, message ,phone,orderNumber,salonName} = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !topic || !phone) {
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
     orderNumber,
     salonName
    });

    await newForm.save();

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
