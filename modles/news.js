import mongoose from "mongoose";

const NewsPageSchema = new mongoose.Schema({
    bgImage: { type: String },
    title: { type: String },
});

const newsSchema =
  mongoose.models.news || mongoose.model('news', NewsPageSchema);
export default newsSchema;
