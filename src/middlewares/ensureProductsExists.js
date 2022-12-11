import database from "../database";

const ensureProductsExistsMiddleware = async (req, res, next) => {
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  const productId = req.params.id;
  const isUuid = regexExp.test(productId);

  if (!isUuid) {
    return res
      .status(400)
      .json({ message: "invalid input syntax for type uuid" });
  }

  try {
    const queryResponse = await database.query(
      `
    SELECT * FROM products WHERE id = ($1);
    `,
      [productId]
    );

    return queryResponse.rowCount
      ? next()
      : res
          .status(400)
          .json({ message: "product with this id doesn't exists" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export default ensureProductsExistsMiddleware;
