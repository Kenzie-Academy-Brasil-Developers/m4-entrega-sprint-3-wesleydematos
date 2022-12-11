import database from "../database";
import { AppError } from "../errors";

const ensureCategoryExistsMiddleware = async (req, res, next) => {
  if (!req.body.category_id) {
    return next();
  }

  const queryResponse = await database.query(
    `
      SELECT * FROM categories WHERE categories.id = ($1);
      `,
    [req.body.category_id]
  );

  if (!queryResponse.rowCount) {
    throw new AppError("category with this id doesn't exists", 404);
  }
  return next();
};

export default ensureCategoryExistsMiddleware;
