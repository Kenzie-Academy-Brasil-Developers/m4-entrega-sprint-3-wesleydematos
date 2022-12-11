import database from "../../database";
// import { AppError } from "../../errors";

const listProductService = async (productId) => {
  // if (isNaN(productId))
  //   throw new AppError("Invalid input, is must be a number", 404);

  const queryResponse = await database.query(
    `SELECT 
        * 
      FROM 
        products 
      WHERE 
        products.id = ($1);`,
    [productId]
  );

  return queryResponse.rows[0];
};

export default listProductService;
