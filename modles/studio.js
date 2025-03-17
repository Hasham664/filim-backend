import mongoose from "mongoose";

const StudioPageSchema = new mongoose.Schema({
  hero: {
    bgImage: { type: String },
    title: { type: String },
  },

  advance: {
    title: { type: String },
    title2: { type: String },
    description: { type: String },
  },
  toplist: {
    bgImage: { type: String },
    title: { type: String },
    genre: { type: String },
    line: { type: String },
    description: { type: String },
    description2: { type: String },
    button: { type: String },
  },

  competate: {
    bgImage: { type: String },
    title: { type: String },
    genre: { type: String },
    description: { type: String },
    description2: { type: String },
    button: { type: String },
  },
  toplist2: {
    bgImage: { type: String },
    title: { type: String },
    genre: { type: String },
    line: { type: String },
    description: { type: String },
    description2: { type: String },
    button: { type: String },
  },
  competate2: {
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
