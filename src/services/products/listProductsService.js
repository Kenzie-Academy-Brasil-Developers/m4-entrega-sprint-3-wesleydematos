import database from "../../database";

const listProductsService = async () => {
  try {
    const queryResponse = await database.query(
      `SELECT 
        * 
      FROM 
        products;`
    );
    return [200, queryResponse.rows];
  } catch (error) {
    console.log(error);

    return [400, { message: error }];
  }
};

export default listProductsService;
