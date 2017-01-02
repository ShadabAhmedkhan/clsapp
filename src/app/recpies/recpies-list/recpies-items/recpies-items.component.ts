import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../../recipe';
@Component({
  selector: 'app-recpies-items',
  templateUrl: './recpies-items.component.html'
})
export class RecpiesItemsComponent implements OnInit {
@Input() recipe:Recipe;
recipeId:number;
  constructor() { }

  ngOnInit() { 
  }

}
