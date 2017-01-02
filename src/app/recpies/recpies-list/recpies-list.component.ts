import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe';
import {RecpiesItemsComponent} from './recpies-items/recpies-items.component';
import {RecpieService} from "../recpie.service";
@Component({
  selector: 'app-recpies-list',
  templateUrl: './recpies-list.component.html'
})
export class RecpiesListComponent implements OnInit {
// recipes:Recipe[] =[];
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecpieService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
onSelected(recipe: Recipe){
  this.recipeSelected.emit(recipe);
}
}











