import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  listCategoriesController,
  listCategoryController,
  updateCategoryController,
} from "../controllers/categoriesController";

const categoriesRoutes = Router();

categoriesRoutes.post("", createCategoryController);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id", listCategoryController);
categoriesRoutes.patch("/:id", updateCategoryController);
categoriesRoutes.delete("/:id", deleteCategoryController);

export default categoriesRoutes;
