import {Component, OnInit, Directive} from '@angular/core';
import {DropdownDirective} from "../dropdown.directive";
import  {RouterOutlet} from  '@angular/router';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
   // directives:[DropdownDirective,ROUTER_DIRECTIVES]
})

export class NavComponent  {

  constructor(private authService: AuthService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }



}
