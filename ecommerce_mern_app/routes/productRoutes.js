import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import formidable from "express-formidable";
import {braintreeTokenController,relatedProductController,searchProductController,productListController,productCountController,productFiltersController, deleteProductController,updateProductController,createProductController,getProductController,getsingleProductController,productPhotoController, brainTreePaymentController } from "../controllers/productController.js";
const router = express.Router();

// routes
// create products
router.post('/create-product',requireSignIn,isAdmin,formidable(), createProductController);
//routes
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
  );
// get products
router.get('/get-product', getProductController);

// get single products
router.get('/get-product/:slug', getsingleProductController);

// get photo
router.get('/product-photo/:pid', productPhotoController)
//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post('/product-filters',productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);
// search product
router.get('/search/:keyword',searchProductController);
//similar product
router.get('/related-product/:pid/:cid',relatedProductController)
//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
