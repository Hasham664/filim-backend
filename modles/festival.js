import mongoose from 'mongoose';

const FestivalPageSchema = new mongoose.Schema({
  hero: {
    bgImage: { type: String },
    title: { type: String },
    alt: { type: String },
  },

  advance: {
    alt: { type: String },
    bgImage: { type: String },
    title: { type: String },
    title2: { type: String },
    description: { type: String },
  },
  toplist: {
    alt: { type: String },
    bgImage: { type: String },
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

const festivalSchema =
  mongoose.models.festival || mongoose.model('festival', FestivalPageSchema);
export default festivalSchema;
