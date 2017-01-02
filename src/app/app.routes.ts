import {ModuleWithProviders} from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import {RecpiesComponent} from "./recpies/recpies.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {PostcarsComponent} from "./postcars/postcars.component";
import {PostmobilesComponent} from "./postmobiles/postmobiles.component";
import { SignupComponent } from "./unprotected/signup.component";
import { SigninComponent } from "./unprotected/signin.component";
import { ProtectedComponent } from "./protected/protected.component";
import { AuthGuard } from "./nav/auth.guard";

// const APP_ROUTES: Routes = [
//
//   {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
// ];
export const routes:Routes =[
  // {
  //   path: '',
  //   redirectTo: '/recipes',
  //   pathMatch: 'full'
  // },
  {path: '', redirectTo: '/signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  { path: 'recipes',
    component: RecpiesComponent,canActivate: [AuthGuard]
  },
  { path: 'shopping-list',
    component:ShoppingListComponent ,canActivate: [AuthGuard]
  },
  { path: 'postcars',
    component: PostcarsComponent ,canActivate: [AuthGuard]
  },
  { path: 'postmobiles',
    component:PostmobilesComponent,canActivate: [AuthGuard]
  },

];
export const routing :ModuleWithProviders = RouterModule.forRoot(routes);















