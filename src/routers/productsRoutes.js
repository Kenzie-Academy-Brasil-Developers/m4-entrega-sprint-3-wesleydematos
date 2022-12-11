import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  listProductByCategoryIdController,
  listProductController,
  listProductsController,
  updateProductController,
} from "../controllers/productControllers";
import ensureCategoryExistsMiddleware from "../middlewares/ensureCategoryExists";
import ensureProductsExistsMiddleware from "../middlewares/ensureProductsExists";
import ensureSendNameAndPriceMiddleware from "../middlewares/ensureSendNameProduct";

const productsRoutes = Router();

productsRoutes.post(
  "",
  ensureSendNameAndPriceMiddleware,
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
productsRoutes.delete(
  "/:id",
  ensureProductsExistsMiddleware,
  deleteProductController
);
productsRoutes.get("/category/:categoryId", listProductByCategoryIdController);

export default productsRoutes;
