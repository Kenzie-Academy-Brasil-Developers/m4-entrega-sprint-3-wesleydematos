import database from "../database";

const ensureCategoryIdExistsMiddleware = async (req, res, next) => {
  const queryResponse = await database.query(
    `
      SELECT * FROM categories WHERE id = ($1);
      `,
    [req.params.id]
  );

  if (!queryResponse.rowCount) {
    throw new AppError("category with this id doesn't exists", 404);
  }
  return next();
};

export default ensureCategoryIdExistsMiddleware;
