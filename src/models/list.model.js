import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("List", listSchema);
