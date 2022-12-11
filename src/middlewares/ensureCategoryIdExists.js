import database from "../database";

const ensureCategoryIdExistsMiddleware = async (req, res, next) => {
  try {
    const queryResponse = await database.query(
      `
      SELECT * FROM categories WHERE id = ($1);
      `,
      [req.params.id]
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

export default ensureCategoryIdExistsMiddleware;
