import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  additional: {
    type: String,
    required: true,
  },
  currentCost: {
    type: Number,
    required: true,
  },
  previousCost: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

const ItemModel = mongoose.model("Items", ItemSchema);
export default ItemModel;
