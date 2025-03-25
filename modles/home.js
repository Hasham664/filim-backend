import mongoose from 'mongoose';

const HomePageSchema = new mongoose.Schema({
  hero: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },

  advance: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    title2: { type: String },
    description: { type: String },
  },
  toplist: {
    bgImage: { type: String },
    alt: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },
  robot: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },
  competate: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    description: { type: String },
    button: { type: String },
  },
  runway: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    button: { type: String },
  },
});

const homeSchema =
  mongoose.models.home || mongoose.model('home', HomePageSchema);
export default homeSchema;
