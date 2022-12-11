import createProductService from "../services/products/createProductService";
import deleteProductService from "../services/products/deleteProductService";
import listProductsByCategoryIdService from "../services/products/listProductByCategoryIdService";
import listProductService from "../services/products/listProductService";
import listProductsService from "../services/products/listProductsService";
import updateProductService from "../services/products/updateProductService";

const createProductController = async (req, res) => {
  const data = await createProductService(req.body);
  return res.status(201).json(data);
};

const listProductsController = async (req, res) => {
  const data = await listProductsService();
  return res.status(200).json(data);
};

const listProductController = async (req, res) => {
  const data = await listProductService(req.params.id);
  return res.status(200).json(data);
};

const updateProductController = async (req, res) => {
  const data = await updateProductService(req.body, req.params.id);
  return res.status(200).json(data);
};

const deleteProductController = async (req, res) => {
  const data = await deleteProductService(req.params.id);
  return res.status(204).json(data);
};

const listProductByCategoryIdController = async (req, res) => {
  const data = await listProductsByCategoryIdService(req.params.categoryId);
  return res.status(200).json(data);
};

export {
  createProductController,
  listProductController,
  listProductsController,
  updateProductController,
  deleteProductController,
  listProductByCategoryIdController,
};
