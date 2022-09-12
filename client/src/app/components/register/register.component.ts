import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';
import { HeaderRouteService } from '../../shared/services/header-route.service';
import { UserService } from 'src/app/shared/services/User.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(    public route: Router,
    public userService: UserService,
    public headerRouteService: HeaderRouteService
  ) {}
  registeredUser: User = new User();
  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute('Sign in');
  }
  submitUser() {
    if (
      this.registeredUser.Gmail &&
      this.registeredUser.Name &&
      this.registeredUser.Password
    ) {
      if (
        this.registeredUser.Gmail != '' &&
        this.registeredUser.Name != '' &&
        this.registeredUser.Password != ''
      ) {
        this.userService.register(this.registeredUser).subscribe((res) => {
          console.log(res);
          if (res != null && res == true) {
            this.route.navigate(['/login']);
          }
        });
      }
    }
  }
}
