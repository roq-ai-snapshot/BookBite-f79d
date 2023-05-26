import * as yup from 'yup';
import { feedbackValidationSchema } from 'validationSchema/feedbacks';
import { inventoryValidationSchema } from 'validationSchema/inventories';
import { menuItemValidationSchema } from 'validationSchema/menu-items';
import { orderValidationSchema } from 'validationSchema/orders';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  feedback: yup.array().of(feedbackValidationSchema),
  inventory: yup.array().of(inventoryValidationSchema),
  menu_item: yup.array().of(menuItemValidationSchema),
  order: yup.array().of(orderValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
});
