import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Style } from '../models/Style.model';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor(private http:HttpClient) { }

  getAllStyles():Observable<{ [StyleTypeName: string]: Style[] }>
  {
    return this.http.get<{ [StyleTypeName: string]: Style[]}>(environment.serverUrl+'style')

  }
}