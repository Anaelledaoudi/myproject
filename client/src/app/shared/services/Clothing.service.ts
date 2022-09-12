import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/Category.model';
import { Clothing, ClothingVM } from '../models/Clothing.model';
import { WebcamImage } from 'ngx-webcam';
import { UserService } from 'src/app/shared/services/User.service';
import { HeaderRouteService } from '../../shared/services/header-route.service';
import { LookClothVm } from '../models/Look.model';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {
  public choosenCloth: ClothingVM;
  public webcamImage: WebcamImage | null = null;
  public fileToUpload: File = new File([], '');
  public upload_image: string = '';
  public clothinkLookForClothinkComponent?: Clothing[];
  //clothnk component
  public style?: string;
  public weather?: string;

  public constructor(private http: HttpClient,
    public headerRouteService: HeaderRouteService
  ) {
    this.choosenCloth = new ClothingVM()
  }
  addImage(image: File): Observable<object> {
    let formData = new FormData();
    formData.append('image', image);
    debugger
    return this.http.post(environment.serverUrl + "PostFile", formData);
  }
  public uploadImage(image: File): Observable<object> {
    let formData = new FormData();
    formData.append('image', image);
    let temp = JSON.stringify(this.choosenCloth);
    formData.append('object', temp);

    // formData.append('imageProperty',imageProperty.toString());
    return this.http.post(environment.serverUrl + 'clothing/' + "PostFile", formData);
  }


  deleteCloth(cloth: number): Observable<any> {
    return this.http.get<any>(environment.serverUrl + 'clothing/Deletecloth?idCloth=' + cloth)
  }
  deleteLook(look: number): Observable<boolean> {
    return this.http.delete<boolean>(environment.serverUrl + 'clothing/Deletelook/?idLook=' + look)
  }
  favoriteLook(look: number): Observable<any> {
    return this.http.get<any>(environment.serverUrl + 'clothing/lookIsFavorite/?idLook=' + look)
  }
  favoriteCloth(cloth: number): Observable<any> {
    return this.http.get<any>(environment.serverUrl + 'clothing/clothIsFavorite/?idcloth=' + cloth)
  }
  getFavoriteLooks(): Observable<LookClothVm[]> {
    return this.http.get<LookClothVm[]>(environment.serverUrl + 'clothing/getFavoriteLooks?userId=' + this.headerRouteService.logedInUser.UserId)
  }

  getClothink(style?: string, weather?: string): Observable<Clothing[]> {
    return this.http.get<Clothing[]>(environment.serverUrl + 'clothink/clothink?style=' + style +
      '&season=' + weather + '&userId=' + this.headerRouteService.logedInUser.UserId)
  }
 
  getAllClothes(): Observable<Clothing[]> {
    return this.http.get<Clothing[]>(environment.serverUrl + 'clothing/GetAllClothing?idUser=' + this.headerRouteService.logedInUser.UserId
  )
  }
  getLooks(): Observable<LookClothVm[]> {
    return this.http.get<LookClothVm[]>(environment.serverUrl + 'clothing/getLooks?userId=' + this.headerRouteService.logedInUser.UserId)
  }
  saveOutfit(look:LookClothVm): Observable<any> {
    return this.http.post<any>(environment.serverUrl + 'clothing/saveOutfit',look)
  }
}