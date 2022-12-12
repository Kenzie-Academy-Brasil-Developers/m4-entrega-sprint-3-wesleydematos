import { AppError } from "../errors";

const ensureProductExistsMiddleware = (req, res, next) => {
  const productId = req.params.id;
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  const isUuid = regexExp.test(productId);

  if (!isUuid) {
    throw new AppError("invalid input syntax for type uuid", 404);
  }

  return next();
};

export default ensureProductExistsMiddleware;
