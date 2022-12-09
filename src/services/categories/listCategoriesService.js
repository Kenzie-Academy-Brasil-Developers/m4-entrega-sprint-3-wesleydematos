import database from "../../database";

const listCategoriesService = async () => {
  try {
    const queryResponse = await database.query(
      `SELECT 
        * 
      FROM 
        categories;`
    );
    return [200, queryResponse.rows];
  } catch (error) {
    console.log(error);

    return [400, { message: error }];
  }
};

export default listCategoriesService;
