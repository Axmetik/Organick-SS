import OrderListModel from "../models/orderList.js";

export const addCart = async (req, res) => {
  const request = req.body;
  const id = request.id;
  Update(id);
  const obj = new OrderListModel({ ...request });
  await obj.save();
};

async function Update(id) {
  await OrderListModel.deleteMany({ id: id });
}
