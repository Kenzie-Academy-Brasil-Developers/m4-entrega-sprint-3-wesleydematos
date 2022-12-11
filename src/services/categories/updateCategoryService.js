import database from "../../database";
import { createAndUpdateCategorySerializer } from "../../serializers/categoriesSerializers";

const updateCategoryService = async (categoryData, categoryId) => {
  const validated = await createAndUpdateCategorySerializer.validate(
    categoryData,
    {
      stripUnknown: true,
    }
  );

  const queryResponse = await database.query(
    `UPDATE 
        categories
      SET
        name = ($1)
      WHERE 
        id = ($2)
      RETURNING *;`,
    [validated.name, categoryId]
  );

  return queryResponse.rows[0];
};

export default updateCategoryService;
