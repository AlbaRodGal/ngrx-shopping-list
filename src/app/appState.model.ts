import { ShoppingState } from './shopping.reducer';
import { ShoppingItem } from "./shopping-item.model";

export interface AppState {
  readonly shopping: ShoppingState;
}
