import database from "../database";

const ensureCategoryExistsMiddleware = async (req, res, next) => {
  if (!req.body.category_id) {
    return next();
  }

  try {
    const queryResponse = await database.query(
      `
      SELECT * FROM categories WHERE categories.id = ($1);
      `,
      [req.body.category_id]
    );

    return queryResponse.rowCount
      ? next()
      : res
          .status(400)
          .json({ message: "category with this id doesn't exists" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

export default ensureCategoryExistsMiddleware;
