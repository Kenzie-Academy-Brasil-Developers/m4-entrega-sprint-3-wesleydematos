import database from "../../database";

const listProductsByCategoryIdService = async (categoryId) => {
  try {
    const queryResponse = await database.query(
      `SELECT 
        products.name, products.price, categories.name as category 
      FROM 
        products 
      JOIN 
        categories 
      ON 
        products.category_id = $1;`,
      [categoryId]
    );

    return [200, queryResponse.rows];
  } catch (error) {
    console.log(error);
    return [400, error];
  }
};

export default listProductsByCategoryIdService;
