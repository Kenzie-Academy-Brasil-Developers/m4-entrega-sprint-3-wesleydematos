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
import ensureProductsExistsMiddleware from "../middlewares/ensureProductsExists";

const productsRoutes = Router();

productsRoutes.post(
  "",
  ensureCategoryExistsMiddleware,
  createProductController
);
productsRoutes.get("", listProductsController);
productsRoutes.get("/:id", listProductController);
productsRoutes.patch(
  "/:id",
  ensureProductsExistsMiddleware,
  updateProductController
);
productsRoutes.delete("/:id", deleteProductController);
productsRoutes.get("/category/:categoryId", listProductByCategoryController);

export default productsRoutes;
