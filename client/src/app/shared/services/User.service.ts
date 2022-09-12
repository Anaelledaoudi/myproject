import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/Category.model';
import { Clothing } from '../models/Clothing.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(environment.serverUrl+'user/login?email='+email+'&password='+password)
  }
  register(user: User): Observable<boolean> {
    return this.http.post<boolean>(environment.serverUrl+'user/Register',user)
  }
}