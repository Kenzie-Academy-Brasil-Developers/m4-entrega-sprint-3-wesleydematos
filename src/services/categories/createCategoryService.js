import database from "../../database";
import { createCategorySerializer } from "../../serializers/categoriesSerializers";

const createCategoryService = async (categoryData) => {
  try {
    const validated = await createCategorySerializer.validate(categoryData, {
      stripUnknown: true,
    });

    const queryResponse = await database.query(
      `INSERT INTO
        categories(name)
      VALUES
        ($1)
      RETURNING *;`,
      [validated.name]
    );

    return [201, queryResponse.rows[0]];
  } catch (error) {
    console.log(error.errors);

    return [400, { message: error.errors }];
  }
};

export default createCategoryService;
