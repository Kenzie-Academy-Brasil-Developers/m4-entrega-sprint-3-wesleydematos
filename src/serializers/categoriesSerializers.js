import * as yup from "yup";

const createCategorySerializer = yup.object().shape({
  name: yup.string().max(200).required(),
});

export { createCategorySerializer };
