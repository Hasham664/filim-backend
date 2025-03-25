import mongoose from "mongoose";

const StudioPageSchema = new mongoose.Schema({
  hero: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
  },

  advance: {
    title: { type: String },
    title2: { type: String },
    description: { type: String },
  },
  toplist: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    genre: { type: String },
    line: { type: String },
    description: { type: String },
    description2: { type: String },
    button: { type: String },
  },

  competate: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    genre: { type: String },
    description: { type: String },
    description2: { type: String },
    button: { type: String },
  },
  toplist2: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    genre: { type: String },
    line: { type: String },
    description: { type: String },
    description2: { type: String },
    button: { type: String },
  },
  competate2: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    genre: { type: String },
    description: { type: String },
    description2: { type: String },
    button: { type: String },
  },
});

const studioSchema =
  mongoose.models.studio || mongoose.model('studio', StudioPageSchema);
export default studioSchema;
