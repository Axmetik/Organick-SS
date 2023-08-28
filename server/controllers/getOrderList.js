import OrderListModel from "../models/orderList.js";

export const getOrderList = async (req, res) => {
  await OrderListModel.find()
    .then((item) => res.json(item))
    .catch((err) => res.json(err));
};
