import createCategoryService from "../services/categories/createCategoryService";
import deleteCategoryService from "../services/categories/deleteCategoryService";
import listCategoriesService from "../services/categories/listCategoriesService";
import listCategoryService from "../services/categories/listCategoryService";
import updateCategoryService from "../services/categories/updateCategoryService";

const createCategoryController = async (req, res) => {
  const [status, data] = await createCategoryService(req.body);
  return res.status(status).json(data);
};

const listCategoriesController = async (req, res) => {
  const [status, data] = await listCategoriesService();
  return res.status(status).json(data);
};

const listCategoryController = async (req, res) => {
  const [status, data] = await listCategoryService(req.params.id);
  return res.status(status).json(data);
};

const updateCategoryController = async (req, res) => {
  const [status, data] = await updateCategoryService(req);
  return res.status(status).json(data);
};

const deleteCategoryController = async (req, res) => {
  const [status, data] = await deleteCategoryService(req);
  return res.status(status).json(data);
};

export {
  createCategoryController,
  listCategoriesController,
  listCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
