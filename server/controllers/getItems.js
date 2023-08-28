import ItemModel from "../models/Item.js";

export const getItems = async (req, res) => {
  await ItemModel.find()
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
};
