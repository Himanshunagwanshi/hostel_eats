const express = require("express");
const customerRouter = express.Router();
const { searchItem, addItemToCart, getItemFromCart, removeItemFromCart, searchItemByCanteen, resetCartItem, getOrderDetails ,addFavouriteItem, getFavouriteItems, removeFavouriteItem, getOrderHistory} = require("../controllers/customer");
const { getCanteenDetails } = require("../controllers/customer");
const {customerCheck}=require("../middlewares/customer");
//Customer Routes
//Routes for Search Item
customerRouter.post("/searchItem",searchItem);
customerRouter.get("/getCanteenDetails",getCanteenDetails);
customerRouter.post("/searchItemByCanteen",searchItemByCanteen);
customerRouter.post("/addCartItem",customerCheck,addItemToCart);
customerRouter.get("/getCartItems",customerCheck,getItemFromCart);
customerRouter.post("/removeCartItem",customerCheck,removeItemFromCart);
customerRouter.get("/resetCartItem",customerCheck,resetCartItem);
customerRouter.get("/getOrderHistory",customerCheck,getOrderDetails);

customerRouter.post("/addFavouriteItem",customerCheck,addFavouriteItem);
customerRouter.get("/getFavouriteItems",customerCheck,getFavouriteItems);
customerRouter.post("/removeFavouriteItem",customerCheck,removeFavouriteItem);

module.exports=customerRouter;