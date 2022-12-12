import database from "../../database";

const listProductService = async (productId) => {
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
