import database from "../../database";

const deleteProductService = async (productId) => {
  try {
    await database.query(
      `DELETE FROM 
        products 
      WHERE 
        id = $1;`,
      [productId]
    );

    return [204, {}];
  } catch (error) {
    console.log(error);
    return [400, error];
  }
};

export default deleteProductService;
