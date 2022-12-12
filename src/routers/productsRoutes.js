import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  listProductByCategoryIdController,
  listProductController,
  listProductsController,
  updateProductController,
} from "../controllers/productControllers";
import ensureProductExistsMiddleware from "../middlewares/ensureProductExists";
import ensureSendNameAndPriceMiddleware from "../middlewares/ensureSendNameProduct";

const productsRoutes = Router();

productsRoutes.post(
  "",
  ensureSendNameAndPriceMiddleware,
  createProductController
);
productsRoutes.get("", listProductsController);
productsRoutes.get(
  "/:id",
  ensureProductExistsMiddleware,
  listProductController
);
productsRoutes.patch(
  "/:id",
  ensureProductExistsMiddleware,
  updateProductController
);
productsRoutes.delete(
  "/:id",
  ensureProductExistsMiddleware,
  deleteProductController
);
productsRoutes.get("/category/:categoryId", listProductByCategoryIdController);

export default productsRoutes;
