import mongoose, { isObjectIdOrHexString } from "mongoose";

const FinalOrderSchema = new mongoose.Schema({
  products: Object,
  customer: Object,
  total: Number,
  date: String,
});

const FinalOrderModel = mongoose.model("FinalOrders", FinalOrderSchema);
export default FinalOrderModel;
