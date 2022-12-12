import { AppError } from "../errors";

const ensureSendNameAndPriceMiddleware = (req, res, next) => {
  const { name, price } = req.body;

  if (!name) {
    throw new AppError("Name is required!");
  }

  if (!price) {
    throw new AppError("Price is required!");
  }

  return next();
};

export default ensureSendNameAndPriceMiddleware;
