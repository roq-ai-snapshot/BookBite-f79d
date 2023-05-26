import { FeedbackInterface } from 'interfaces/feedback';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface UserInterface {
  id?: string;
  roq_user_id: string;
  tenant_id: string;
  role: string;
  feedback?: FeedbackInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface[];

  _count?: {
    feedback?: number;
    order?: number;
    reservation?: number;
    restaurant?: number;
  };
}
