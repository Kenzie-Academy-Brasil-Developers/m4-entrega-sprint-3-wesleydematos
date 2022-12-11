import database from "../../database";

const deleteCategoryService = async (categoryId) => {
  try {
    await database.query(
      `DELETE FROM 
        categories  
      WHERE
        id = $1;`,
      [categoryId]
    );

    return [204, {}];
  } catch (error) {
    console.log(error);
    return [400, error];
  }
};

export default deleteCategoryService;
