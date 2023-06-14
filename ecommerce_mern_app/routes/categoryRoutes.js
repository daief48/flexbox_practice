import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import { createCategoryController,updateCategoryController,categoryController, singleCategoryController,deleteCategoryController ,productCategoryController} from "../controllers/categoryController.js";

const router = express.Router();

// routes
// create category
router.post('/create-category',requireSignIn, isAdmin, createCategoryController);

// update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);

// getAll category
router.get('/get-category',categoryController)

// single category
router.get('/single-category/:slug',singleCategoryController)

// delete category
router.delete('/delete-category/:id',deleteCategoryController);
// category wise product
router.get('/product-category/:slug', productCategoryController);
export default router;