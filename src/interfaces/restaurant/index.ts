import { FeedbackInterface } from 'interfaces/feedback';
import { InventoryInterface } from 'interfaces/inventory';
import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';

export interface RestaurantInterface {
  id?: string;
  name: string;
  owner_id: string;
  feedback?: FeedbackInterface[];
  inventory?: InventoryInterface[];
  menu_item?: MenuItemInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
    inventory?: number;
    menu_item?: number;
    order?: number;
    reservation?: number;
  };
}
