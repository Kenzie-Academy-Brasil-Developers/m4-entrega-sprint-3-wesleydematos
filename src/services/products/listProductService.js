import database from "../../database";

const listProductService = async (productId) => {
  try {
    const queryResponse = await database.query(
      `SELECT 
        * 
      FROM 
        products 
      WHERE 
        products.id = ($1);`,
      [productId]
    );

    return [200, queryResponse.rows[0]];
  } catch (error) {
    console.log(error);
    return [400, error];
  }
};

export default listProductService;
