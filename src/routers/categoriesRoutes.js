import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  listCategoriesController,
  listCategoryController,
  updateCategoryController,
} from "../controllers/categoriesController";
import ensureCategoryIdExistsMiddleware from "../middlewares/ensureCategoryIdExists";

const categoriesRoutes = Router();

categoriesRoutes.post("", createCategoryController);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id", listCategoryController);
categoriesRoutes.patch("/:id", updateCategoryController);
categoriesRoutes.delete(
  "/:id",
  ensureCategoryIdExistsMiddleware,
  deleteCategoryController
);

export default categoriesRoutes;
