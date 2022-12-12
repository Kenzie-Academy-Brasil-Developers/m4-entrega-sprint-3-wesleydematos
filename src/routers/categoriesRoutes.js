import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  listCategoriesController,
  listCategoryController,
  updateCategoryController,
} from "../controllers/categoriesController";
import ensureCategoryExistsMiddleWare from "../middlewares/ensureCategoryExists";
import ensureCategoryNameIsUniqueMiddleware from "../middlewares/ensureCategoryNameIsUnique";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureCategoryNameIsUniqueMiddleware,
  createCategoryController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get(
  "/:id",
  ensureCategoryExistsMiddleWare,
  listCategoryController
);
categoriesRoutes.patch(
  "/:id",
  ensureCategoryExistsMiddleWare,
  updateCategoryController
);
categoriesRoutes.delete(
  "/:id",
  ensureCategoryExistsMiddleWare,
  deleteCategoryController
);

export default categoriesRoutes;
