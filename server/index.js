import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { getItems } from "./controllers/getItems.js";
import { getOrderList } from "./controllers/getOrderList.js";
import { saveOrder } from "./controllers/saveOrder.js";
import { addCart } from "./controllers/addCart.js";
import { deleteItem } from "./controllers/deleteItem.js";
import { getOrders } from "./controllers/getOrders.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
const USER = process.env.USER;
const NAME = process.env.NAME;
const PASSWORD = process.env.PASSWORD;

// access from different ip
app.use(cors());
app.use(express.json());

// Routing
app.get("/getItems", getItems);
app.get("/getOrderList", getOrderList);
app.post("/saveOrder", saveOrder);
app.post("/addCart", addCart);
app.post("/deleteItem", deleteItem);

app.get("/getOrders", getOrders);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${USER}:${PASSWORD}@cluster0.kbl3byl.mongodb.net/${NAME}?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
