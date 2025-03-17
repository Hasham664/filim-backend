import mongoose from "mongoose";

const HomePageSchema = new mongoose.Schema({
  hero: {
    bgImage: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },

  advance: {
    bgImage: { type: String },
    title: { type: String },
    title2: { type: String },
    description: { type: String },
  },
  toplist: {
    bgImage: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },
  robot: {
    bgImage: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },
  competate: {
    bgImage: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },
  runway: {
    bgImage: { type: String },
    title: { type: String },
    button: { type: String },
  },
});

const homeSchema = mongoose.models.home || mongoose.model('home', HomePageSchema)
export default homeSchema;
