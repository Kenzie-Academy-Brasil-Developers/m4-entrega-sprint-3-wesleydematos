import database from "../../database";

const deleteProductService = async (productId) => {
  await database.query(
    `DELETE FROM 
      products 
    WHERE 
      id = $1;`,
    [productId]
  );

  return {};
};

export default deleteProductService;
