import homeSchema from '../modles/home.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

export const createHomePage = async (req, res) => {
  try {
    const { hero, advance, toplist, robot, competate, runway } = req.body;
    const hero1 = JSON.parse(hero);
    const advance1 = JSON.parse(advance);
    const topList1 = JSON.parse(toplist);
    const robot1 = JSON.parse(robot);
    const competate1 = JSON.parse(competate);
    const runway1 = JSON.parse(runway);

    let heroVideoPath = req.files?.heroImage[0]?.path;
    let advanceImage = req.files?.advanceImage[0]?.path;
    let toplistImage = req.files?.toplistImage[0]?.path;
    let robotImage = req.files?.robotImage[0]?.path;
    let competateImage = req.files?.competateImage[0]?.path;
    let runwayImage = req.files?.runwayImage[0]?.path;

    // if(!hero||!advance||!toplist||!robot||!competate||!runway){
    // return res.status(404).json({ success: false, message:'some section is missing'});
    // }
    console.log(req.files.heroImage, 'heroImage');

    if (heroVideoPath) {
      heroVideoPath = await uploadOnCloudinary(heroVideoPath, {
        resource_type: 'video',
      });
    }
    console.log(heroVideoPath, 'cloud hero');

    if (advanceImage) {
      advanceImage = await uploadOnCloudinary(advanceImage);
    }

    if (toplistImage) {
      toplistImage = await uploadOnCloudinary(toplistImage);
    }

    if (robotImage) {
      robotImage = await uploadOnCloudinary(robotImage);
    }

    if (competateImage) {
      competateImage = await uploadOnCloudinary(competateImage);
    }

    if (runwayImage) {
      runwayImage = await uploadOnCloudinary(runwayImage);
    }

    const newHome = new homeSchema({
      hero: {
        bgImage: heroVideoPath?.secure_url,
        title: hero1.title,
        description: hero1.description,
        button: hero1.buttonText,
      },
      advance: {
        bgImage: advanceImage?.secure_url,
        title: advance1.title,
        title2: advance1.title2,
        description: advance1.description,
      },
      toplist: {
        bgImage: toplistImage?.secure_url,
        title: topList1.title,
        description: topList1.description,
        button: topList1.button,
      },
      robot: {
        bgImage: robotImage?.secure_url,
        title: robot1.title,
        description: robot1.description,
        button: robot1.button,
      },
      competate: {
        bgImage: competateImage?.secure_url,
        title: competate1.title,
        description: competate1.description,
        button: competate1.button,
      },
      runway: {
        bgImage: runwayImage?.secure_url,
        title: runway1.title,
        button: runway1.button,
      },
    });
    const home = await newHome.save();
    res.status(200).json({
      success: true,
      home,
      message: 'home page uploaded successfully',
    });
  } catch (error) {
    console.error('Error fetching HomePage:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to fetch HomePage' });
  }
};

export const createGetHome = async (req, res) => {
  try {
    const home = await homeSchema.find({});
    console.log(home, "home");

    res.status(200).json({
      success: true,
      home,
      message: 'home page get successfully',
    });
  } catch (error) {
    console.error('Error fetching HomePage:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to fetch HomePage' });
  }
};
