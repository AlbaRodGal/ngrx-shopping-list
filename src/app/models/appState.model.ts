import { ShoppingState } from '../state/shopping.reducer';

export interface AppState {
  readonly shopping: ShoppingState;
}
