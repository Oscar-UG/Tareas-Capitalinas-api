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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

export default mongoose.model("List", listSchema);
