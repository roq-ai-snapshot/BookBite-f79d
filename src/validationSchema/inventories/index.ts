import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  ingredient_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  unit: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
