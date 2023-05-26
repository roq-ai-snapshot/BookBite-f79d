import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface FeedbackInterface {
  id?: string;
  rating: number;
  comment?: string;
  customer_id: string;
  restaurant_id: string;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}
