import FinalOrderModel from "../models/FinalOrder.js";
import OrderListModel from "../models/orderList.js";

export const saveOrder = async (req, res) => {
  //console.log(req.body);
  const obj = new FinalOrderModel({
    customer: req.body.customer,
    products: req.body.products,
    total: req.body.totalValue,
    date: req.body.date,
  });

  await obj.save();
  clearList();
};

async function clearList() {
  await OrderListModel.deleteMany({});
}
