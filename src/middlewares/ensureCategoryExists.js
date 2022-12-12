import { AppError } from "../errors";

const ensureCategoryExistsMiddleWare = (req, res, next) => {
  const categoryId = req.params.id;

  if (isNaN(categoryId))
    throw new AppError("Invalid input, id must be a number!", 404);

  return next();
};

export default ensureCategoryExistsMiddleWare;
