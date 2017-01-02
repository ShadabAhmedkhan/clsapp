import { Component } from '@angular/core';
import  {RouterOutlet} from  '@angular/router';
import { NavComponent } from './nav/nav.component';
import { RecpiesComponent } from './recpies/recpies.component';
// import { RecpiesListComponent } from './recpies/recpies-list/recpies-list.component';
import { RecipeDetailComponent } from './recpies/recipe-detail/recipe-detail.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {RecpieService} from "./recpies/recpie.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
 import { routing } from "./app.routes";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
// directives:[ROUTER_DIRECTIVES],
  providers:[RecpieService, ShoppingListService, ]
})
export class AppComponent {
}
