import database from "../../database";
import { AppError } from "../../errors";
import { createAndUpdateCategorySerializer } from "../../serializers/categoriesSerializers";

const createCategoryService = async (categoryData) => {
  const validated = await createAndUpdateCategorySerializer.validate(
    categoryData,
    {
      stripUnknown: true,
      abortEarly: false,
    }
  );

  const queryResponse = await database.query(
    `INSERT INTO
        categories(name)
      VALUES
        ($1)
      RETURNING *;`,
    [validated.name]
  );

  return queryResponse.rows[0];
};

export default createCategoryService;
