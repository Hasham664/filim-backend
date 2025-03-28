import { uploadOnCloudinary } from '../utils/cloudinary.js';
import studioSchema from '../modles/studio.js';
export const createStudioPage = async (req, res) => {
  try {
    const { hero, advance, toplist, toplist2, competate, competate2 } =
      req.body;
    console.log(req.body, 'REQ.BODY');

    if (!hero || !advance || !toplist || !competate) {
      console.error('One or more required fields are missing:', {
        hero,
        advance,
        toplist,
        competate,
      });
      return res
        .status(400)
        .json({ success: false, message: 'Missing required fields' });
    }

    const hero1 = hero ? JSON.parse(hero) : null;
    const advance1 = advance ? JSON.parse(advance) : null;
    const topList1 = toplist ? JSON.parse(toplist) : null;
    const toplisted = toplist2 ? JSON.parse(toplist2) : null;
    const competate1 = competate ? JSON.parse(competate) : null;
    const competated = competate2 ? JSON.parse(competate2) : null;

    let heroVideoPath = req.files?.heroImage[0]?.path;
    let toplistImage = req.files?.toplistImage[0]?.path;
    let toplistImage2 = req.files?.toplistImage2[0]?.path;
    let competateImage = req.files?.competateImage[0]?.path;
    let competateImage2 = req.files?.competateImage2[0]?.path;

    console.log(req.files, 'heroImage');
    console.log(req.files.heroImage, 'heroImage');

    if (heroVideoPath) {
      heroVideoPath = await uploadOnCloudinary(heroVideoPath, {
        resource_type: 'video',
      });
    }
    console.log(heroVideoPath, 'cloud hero');

    if (toplistImage) {
      toplistImage = await uploadOnCloudinary(toplistImage);
    }

    if (toplistImage2) {
      toplistImage2 = await uploadOnCloudinary(toplistImage2);
    }

    if (competateImage) {
      competateImage = await uploadOnCloudinary(competateImage);
    }

    if (competateImage2) {
      competateImage2 = await uploadOnCloudinary(competateImage2);
    }

    const newStudio = new studioSchema({
      hero: {
        bgImage: heroVideoPath?.secure_url,
        title: hero1.title,
        alt: hero1.alt
      },
      advance: {
        title: advance1.title,
        title2: advance1.title2,
        description: advance1.description,
      },
      toplist: {
        alt: topList1.alt,
        bgImage: toplistImage?.secure_url,
        title: topList1.title,
        genre: topList1.genre,
        line: topList1.line,
        description: topList1.description,
        description2: topList1.description2,
        button: topList1.button,
        link: topList1.link,
      },
      toplist2: {
        alt: toplisted.alt,
        bgImage: toplistImage2?.secure_url,
        title: toplisted.title,
        genre: toplisted.genre,
        line: toplisted.line,
        description: toplisted.description,
        description2: toplisted.description2,
        button: toplisted.button,
        link: toplisted.link,
      },
      competate: {
        alt: competate1.alt,
        bgImage: competateImage?.secure_url,
        title: competate1.title,
        genre: competate1.genre,
        description: competate1.description,
        description2: competate1.description2,
        button: competate1.button,
        link: competate1.link,
      },
      competate2: {
        alt: competated.alt,
        bgImage: competateImage2?.secure_url,
        title: competated.title,
        genre: competated.genre,
        description: competated.description,
        description2: competated.description2,
        button: competated.button,
        link: competated.link,
      },
    });
    const studio = await newStudio.save();

    res.status(200).json({
      success: true,
      studio,
      message: 'studio page uploaded successfully',
    });
  } catch (error) {
    console.error('Error fetching studio:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to fetch studio' });
  }
};

export const createGetStudio = async (req, res) => {
  try {
    const studio = await studioSchema.find({});
    console.log(studio, 'studio');

    res.status(200).json({
      success: true,
      studio,
      message: 'studio page get successfully',
    });
  } catch (error) {
    console.error('Error fetching studio:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to fetch studio' });
  }
};


// UPDATE API 


export const updateStudioPage = async (req, res) => {
  try {
    const { id } = req.params;
    const { hero, advance, toplist, toplist2, competate, competate2 } =
      req.body;

    // Parse JSON data from request
    const hero1 = hero ? JSON.parse(hero) : {};
    const advance1 = advance ? JSON.parse(advance) : {};
    const topList1 = toplist ? JSON.parse(toplist) : {};
    const toplisted = toplist2 ? JSON.parse(toplist2) : {};
    const competate1 = competate ? JSON.parse(competate) : {};
    const competated = competate2 ? JSON.parse(competate2) : {};

    // Get file paths if provided
    let heroVideoPath = req.files?.heroImage?.[0]?.path;
    let toplistImage = req.files?.toplistImage?.[0]?.path;
    let toplistImage2 = req.files?.toplistImage2?.[0]?.path;
    let competateImage = req.files?.competateImage?.[0]?.path;
    let competateImage2 = req.files?.competateImage2?.[0]?.path;

    // Upload new files if available
    if (heroVideoPath) {
      heroVideoPath = await uploadOnCloudinary(heroVideoPath, {
        resource_type: 'video',
      });
    }
    if (toplistImage) {
      toplistImage = await uploadOnCloudinary(toplistImage);
    }
    if (toplistImage2) {
      toplistImage2 = await uploadOnCloudinary(toplistImage2);
    }
    if (competateImage) {
      competateImage = await uploadOnCloudinary(competateImage);
    }
    if (competateImage2) {
      competateImage2 = await uploadOnCloudinary(competateImage2);
    }

    // Retrieve the current studio document
    const currentStudio = await studioSchema.findById(id);
    if (!currentStudio) {
      return res
        .status(404)
        .json({ success: false, message: 'Studio page not found' });
    }

    // Merge the current values with the new ones
    const updatedHero = {
      title: hero1.title,
      bgImage: heroVideoPath?.secure_url || currentStudio.hero.bgImage,
      alt: hero1.alt ,
    };

    const updatedAdvance = {
      title: advance1.title ,
      title2: advance1.title2,
      description: advance1.description || currentStudio.advance.description ,
    };

    const updatedToplist = {
      alt: topList1.alt ,
      title: topList1.title ,
      genre: topList1.genre ,
      line: topList1.line ,
      description: topList1.description ,
      description2: topList1.description2 ,
      button: topList1.button ,
      bgImage: toplistImage?.secure_url || currentStudio.toplist.bgImage,
      link: topList1.link,
    };

    const updatedToplist2 = {
      alt: toplisted.alt ,
      title: toplisted.title ,
      genre: toplisted.genre ,
      line: toplisted.line ,
      description: toplisted.description ,
      description2:
        toplisted.description2 ,
      button: toplisted.button ,
      bgImage: toplistImage2?.secure_url || currentStudio.toplist2.bgImage,
      link: toplisted.link,
    };

    const updatedCompetate = {
      alt: competate1.alt ,
      title: competate1.title ,
      genre: competate1.genre ,
      description:
        competate1.description ,
      description2:
        competate1.description2 ,
      button: competate1.button ,
      bgImage: competateImage?.secure_url || currentStudio.competate.bgImage,
      link:competate1.link
    };

    const updatedCompetate2 = {
      alt: competated.alt ,
      title: competated.title ,
      genre: competated.genre ,
      description:
        competated.description ,
      description2:
        competated.description2 ,
      button: competated.button ,
      bgImage: competateImage2?.secure_url || currentStudio.competate2.bgImage,
      link:competated.link
    };

    const updateData = {
      hero: updatedHero,
      advance: updatedAdvance,
      toplist: updatedToplist,
      toplist2: updatedToplist2,
      competate: updatedCompetate,
      competate2: updatedCompetate2,
    };

    // Update the document with merged data
    const updatedStudio = await studioSchema.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      studio: updatedStudio,
      message: 'Studio page updated successfully',
    });
  } catch (error) {
    console.error('Error updating studio:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to update studio' });
  }
};

