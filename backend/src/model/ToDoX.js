import mongoose from "mongoose";

const todoxSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["active", "complete"],
    default: "active",
  },
});

//tao model
const ToDoX = new mongoose.model("ToDoX", todoxSchema);

export default ToDoX;
