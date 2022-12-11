import database from "../../database";
import { createProductSerializer } from "../../serializers/productsSerializers";

const createProductService = async (productData) => {
  const validated = await createProductSerializer.validate(productData, {
    stripUnknown: true,
    abortEarly: true,
  });

  const keys = Object.keys(validated);
  const values = Object.values(validated);

  let queryBody = "INSERT INTO products(";

  keys.forEach((key) => {
    queryBody += `${key}, `;
  });

  queryBody = queryBody.slice(0, -2) + ") VALUES(";

  values.forEach((value, index) => {
    keys[index] == "name"
      ? (queryBody += `'${value}', `)
      : (queryBody += `${value}, `);
  });

  queryBody = queryBody.slice(0, -2) + ") RETURNING id, name;";

  const queryResponse = await database.query(queryBody);

  return queryResponse.rows[0];
};

export default createProductService;
