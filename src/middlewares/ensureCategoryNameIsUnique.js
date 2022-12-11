import database from "../database";
import { AppError } from "../errors";

const ensureCategoryNameIsUniqueMiddleware = async (req, res, next) => {
  const queryResponse = await database.query(
    `SELECT 
            * 
        FROM 
            categories 
        WHERE 
            name = $1;`,
    [req.body.name]
  );

  if (!queryResponse.rowCount) {
    return next();
  }

  throw new AppError("category already exists");
};

export default ensureCategoryNameIsUniqueMiddleware;
