import contactSchema from '../modles/contact.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
export const createContactPage = async (req, res) => {
  try {
    const { hero, advance } = req.body;
    const hero1 = JSON.parse(hero);
    const advance1 = JSON.parse(advance);

    let heroVideoPath = req.files?.heroImage[0]?.path;

    console.log(req.files.heroImage, 'heroImage');

    if (heroVideoPath) {
      heroVideoPath = await uploadOnCloudinary(heroVideoPath, {
        resource_type: 'video',
      });
    }

    const newContact = new contactSchema({
      hero: {
        bgImage: heroVideoPath?.secure_url,
        title: hero1.title,
      },
      advance: {
        title: advance1.title,
        description: advance1.description,
      },
    });
    const contact = await newContact.save();

    res.status(200).json({
      success: true,
      contact,
      message: 'contact page uploaded successfully',
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to fetch contact' });
  }
};

export const createGetContact = async (req, res) => {
  try {
    const contact = await contactSchema.find({});
    console.log(contact, 'contact');

    res.status(200).json({
      success: true,
      contact,
      message: 'contact page get successfully',
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to fetch contact' });
  }
};
