import * as yup from "yup";
import createError from "http-errors";

const assetSchema = yup.object().shape({
  name: yup.string().required("Asset name is required"),
});

export default async (data: any) => {
  try {
    const validation = await assetSchema.validate(data, { abortEarly: false });
    return validation;
  } catch (err) {
    throw createError(
      400,
      JSON.stringify({ type: err.name, errors: err.errors })
    );
  }
};
