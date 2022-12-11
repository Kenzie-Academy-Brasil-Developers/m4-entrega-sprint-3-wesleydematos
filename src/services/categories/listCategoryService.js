import database from "../../database";

const listCategoryService = async (categoryId) => {
  const queryResponse = await database.query(
    `SELECT 
        * 
      FROM 
        categories 
      WHERE 
        categories.id = ($1);`,
    [categoryId]
  );

  return queryResponse.rows[0];
};

export default listCategoryService;
