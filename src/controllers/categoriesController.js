import createCategoryService from "../services/categories/createCategoryService";
import deleteCategoryService from "../services/categories/deleteCategoryService";
import listCategoriesService from "../services/categories/listCategoriesService";
import listCategoryService from "../services/categories/listCategoryService";
import updateCategoryService from "../services/categories/updateCategoryService";

const createCategoryController = async (req, res) => {
  const data = await createCategoryService(req.body);
  return res.status(201).json(data);
};

const listCategoriesController = async (req, res) => {
  const data = await listCategoriesService();
  return res.status(200).json(data);
};

const listCategoryController = async (req, res) => {
  const data = await listCategoryService(req.params.id);
  return res.status(200).json(data);
};

const updateCategoryController = async (req, res) => {
  const data = await updateCategoryService(req.body, req.params.id);
  return res.status(200).json(data);
};

const deleteCategoryController = async (req, res) => {
  const data = await deleteCategoryService(req.params.id);
  return res.status(204).json(data);
};

export {
  createCategoryController,
  listCategoriesController,
  listCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
