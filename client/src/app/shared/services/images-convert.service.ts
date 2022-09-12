import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesConvertService {
  imageToShow: any;

  constructor(private http: HttpClient) { }

  getImage(imageUrl: string): Observable<Blob> {//File
    return this.http
      .get(imageUrl, { responseType: 'blob' })
       // .map((res: Response) => res.blob());
  }
  createImageFromBlob(image: Blob) :any{
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
    return this.imageToShow;
  }
}


