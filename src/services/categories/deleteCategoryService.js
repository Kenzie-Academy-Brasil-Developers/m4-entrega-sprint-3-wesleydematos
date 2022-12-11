import database from "../../database";

const deleteCategoryService = async (categoryId) => {
  await database.query(
    `DELETE FROM 
        categories  
      WHERE
        id = $1;`,
    [categoryId]
  );

  return {};
};

export default deleteCategoryService;
