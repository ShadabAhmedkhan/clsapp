
import {Ingredients} from "../ingredients";
export class ShoppingListService {
private items : Ingredients [] =[];
  constructor() { }
  getItems(){
    return this.items;
  }
  addItems(items: Ingredients[]){
    Array.prototype.push.apply(this.items, items)
  }
}
