import OrderListModel from "../models/orderList.js";

export const deleteItem = async (req, res) => {
  const id = req.body.id;
  await OrderListModel.deleteMany({ id: id });
};
