import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component/';
import {Ingredients} from "../ingredients";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
items : Ingredients[] =[];
  constructor(private sls : ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();

  }

}
