import database from "../../database";
import { updateProductSerializer } from "../../serializers/productsSerializers";

const updateProductService = async (productData, productId) => {
  const validated = await updateProductSerializer.validate(productData, {
    stripUnknown: true,
    abortEarly: false,
  });

  const queryResponse = await database.query(
    "UPDATE products SET name = $1 WHERE id = $2 RETURNING id, name",
    [validated.name, productId]
  );

  return queryResponse.rows[0];
};

export default updateProductService;
