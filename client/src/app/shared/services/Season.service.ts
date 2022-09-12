import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Season } from '../models/Season.model';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http:HttpClient) { }

  getAllSeasons():Observable<Season[]>
  {
    return this.http.get<Season[]>(environment.serverUrl+'season')

  }
}