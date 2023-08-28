import FinalOrderModel from "../models/FinalOrder.js";

export const getOrders = async (req, res) => {
  await FinalOrderModel.find()
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
};
