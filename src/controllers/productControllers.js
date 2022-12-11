import createProductService from "../services/products/createProductService";
import deleteProductService from "../services/products/deleteProductService";
import listProductByCategoryProductService from "../services/products/listProductByCategoryProductService";
import listProductService from "../services/products/listProductService";
import listProductsService from "../services/products/listProductsService";
import updateProductService from "../services/products/updateProductService";

const createProductController = async (req, res) => {
  const [status, data] = await createProductService(req.body);
  return res.status(status).json(data);
};

const listProductsController = async (req, res) => {
  const [status, data] = await listProductsService();
  return res.status(status).json(data);
};

const listProductController = async (req, res) => {
  const [status, data] = await listProductService(req);
  return res.status(status).json(data);
};

const updateProductController = async (req, res) => {
  const [status, data] = await updateProductService(req);
  return res.status(status).json(data);
};

const deleteProductController = async (req, res) => {
  const [status, data] = await deleteProductService(req);
  return res.status(status).json(data);
};

const listProductByCategoryController = async (req, res) => {
  const [status, data] = await listProductByCategoryProductService(req);
  return res.status(status).json(data);
};

export {
  createProductController,
  listProductController,
  listProductsController,
  updateProductController,
  deleteProductController,
  listProductByCategoryController,
};
