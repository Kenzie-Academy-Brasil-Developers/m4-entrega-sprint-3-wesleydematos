import database from "../../database";
import { updateProductSerializer } from "../../serializers/productsSerializers";

const updateProductService = async (productData, productId) => {
  try {
    const validated = await updateProductSerializer.validate(productData, {
      stripUnknown: true,
      abortEarly: false,
    });

    const queryResponse = await database.query(
      "UPDATE products SET name = $1 WHERE id = $2 RETURNING id, name",
      [validated.name, productId]
    );

    return [200, queryResponse.rows[0]];
  } catch (error) {
    console.log(error);
    return error.errors
      ? [400, { message: error.errors }]
      : [400, { message: error }];
  }
};

export default updateProductService;
