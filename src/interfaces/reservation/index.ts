import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface ReservationInterface {
  id?: string;
  date: Date;
  time: Date;
  number_of_guests: number;
  customer_id: string;
  restaurant_id: string;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}
