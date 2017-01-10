import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./firebase.config";
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecpiesListComponent } from './recpies/recpies-list/recpies-list.component';
import { RecpiesItemsComponent } from './recpies/recpies-list/recpies-items/recpies-items.component';
import { RecipeDetailComponent } from './recpies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import {RecpieService} from "./recpies/recpie.service";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {routing} from "./app.routes";
import { PostcarsComponent } from './postcars/postcars.component';
import { PostmobilesComponent } from './postmobiles/postmobiles.component';
import { ProtectedComponent } from './protected/protected.component';
import { UnprotectedComponent } from './unprotected/unprotected.component';
import { HeaderComponent } from "./shared/header.component";
import { AuthGuard } from "./nav/auth.guard";
import { AuthService } from "./nav/auth.service";
import { SignupComponent } from './unprotected/signup.component';
import { SigninComponent } from './unprotected/signin.component';
import {DataService} from './data.service';
import { ForgetpasswordComponent } from './unprotected/forgetpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecpiesComponent,
    RecpiesListComponent,
    RecpiesItemsComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    PostcarsComponent,
    PostmobilesComponent,
    ProtectedComponent,
    UnprotectedComponent,
    SignupComponent,
    SigninComponent,
    ForgetpasswordComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecpieService ,AuthService,AuthGuard,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
