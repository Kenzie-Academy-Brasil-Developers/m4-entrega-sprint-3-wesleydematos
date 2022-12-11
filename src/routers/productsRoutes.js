import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  listProductByCategoryController,
  listProductController,
  listProductsController,
  updateProductController,
} from "../controllers/productControllers";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists";

const productsRoutes = Router();

productsRoutes.post(
  "",
  ensureCategoryExistsMiddleware,
  createProductController
);
productsRoutes.get("", listProductsController);
productsRoutes.get("/:id", listProductController);
productsRoutes.patch("/:id", updateProductController);
productsRoutes.delete("/:id", deleteProductController);
productsRoutes.get("/category/:categoryId", listProductByCategoryController);

export default productsRoutes;
