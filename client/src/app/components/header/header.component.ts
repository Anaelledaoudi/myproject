import { Component, OnInit } from '@angular/core';
import {HeaderRouteService} from '../../shared/services/header-route.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public headerRouteService:HeaderRouteService) { }

  ngOnInit(): void {
  }

}
