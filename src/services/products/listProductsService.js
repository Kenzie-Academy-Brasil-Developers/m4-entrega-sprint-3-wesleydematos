import database from "../../database";

const listProductsService = async () => {
  const queryResponse = await database.query(
    `SELECT 
        * 
      FROM 
        products;`
  );
  return queryResponse.rows;
};

export default listProductsService;
