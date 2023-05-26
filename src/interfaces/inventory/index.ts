import { RestaurantInterface } from 'interfaces/restaurant';

export interface InventoryInterface {
  id?: string;
  ingredient_name: string;
  quantity: number;
  unit: string;
  restaurant_id: string;

  restaurant?: RestaurantInterface;
  _count?: {};
}
