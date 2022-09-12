import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/User.service';
import { HeaderRouteService } from '../../shared/services/header-route.service';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    public userService: UserService,
    public route: Router,
    public headerRouteService: HeaderRouteService
  ) {}
  public email!: string;
  public password!: string;
  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute('Log in');
  }

  submitLogin(): void {
    if (
      this.email &&
      this.password &&
      this.email != '' &&
      this.password != ''
    ) {
      this.userService.login(this.email, this.password).subscribe((res) => {
        if (res) {
          console.log(res);
          this.headerRouteService.logedInUser = res;
          this.route.navigate(['/home']);
        }
      });
    }
    //////////////////    שגיעה צריך לבדוק  this.userService.checkUser(email, password);

    // IF the response is OK then set the cookie logged_in=true
    // ELSE error message red on the page
  }
}
