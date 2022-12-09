import * as yup from "yup";

const createAndUpdateCategorySerializer = yup.object().shape({
  name: yup.string().max(200).required(),
});

export { createAndUpdateCategorySerializer };
