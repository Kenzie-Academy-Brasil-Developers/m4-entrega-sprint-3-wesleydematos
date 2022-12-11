import database from "../../database";

const listProductsByCategoryIdService = async (categoryId) => {
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

  return queryResponse.rows;
};

export default listProductsByCategoryIdService;
