import { AddItemAction, DeleteItemAction } from './shopping.action';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './appState.model';
import { ShoppingItem } from './shopping-item.model';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = {id: '', name: ''};
  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
   this.shoppingItems = this.store.select(store => store.shopping);
  }
  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id: '', name: ''};
  }
  deleteItem(id){
    this.store.dispatch(new DeleteItemAction(id));
  }
}
