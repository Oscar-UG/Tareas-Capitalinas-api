import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
    required: true,
  },
});

export default mongoose.model("Task", taskSchema);
