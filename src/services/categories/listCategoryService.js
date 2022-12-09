import database from "../../database";

const listCategoryService = async (categoryId) => {
  try {
    const queryResponse = await database.query(
      `SELECT 
        * 
      FROM 
        categories 
      WHERE 
        categories.id = ($1);`,
      [categoryId]
    );

    return [200, queryResponse.rows[0]];
  } catch (error) {
    console.log(error);
    return [400, error];
  }
};

export default listCategoryService;
