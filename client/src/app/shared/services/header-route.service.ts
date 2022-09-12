import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderRouteService {
  public currentRoute: string = 'Home';
  public logedInUser!: User;

  constructor() {
    this.logedInUser=new User;

  }

  setCurrentRoute(currentRoute: string) {
    this.currentRoute = currentRoute;
  }
}
