import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import {HeaderRouteService} from '../../shared/services/header-route.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// public cookieService: CookieService
  constructor(public headerRouteService:HeaderRouteService) { }

  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute("Home")
    // if (!this.cookieService.get('logged_in')){
    //    window.open('/logIn', '_self');
    // }
  }

}
