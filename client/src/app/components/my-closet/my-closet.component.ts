import { Component, OnInit, Sanitizer, SecurityContext } from '@angular/core';
import { Clothing } from 'src/app/shared/models/Clothing.model';
import { ClothingService } from 'src/app/shared/services/Clothing.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HeaderRouteService } from '../../shared/services/header-route.service'
import { ImagesConvertService } from '../../shared/services/images-convert.service'

@Component({
  selector: 'app-my-closet',
  templateUrl: './my-closet.component.html',
  styleUrls: ['./my-closet.component.css'],
})
export class MyClosetComponent implements OnInit {
  clothing?: Clothing[] = [];

  sourceClothing?: Clothing[];
  i: number = 0;
  imageSrc: any;
  // isFavorite: boolean[] = [false];
  choosenWeatherSort?: string;
  chooseStyleSort?: string;
  public errorMessage?: string;

  constructor(
    private clothingService: ClothingService,
    private sanitizer: DomSanitizer,
    public headerRouteService: HeaderRouteService,
    public imagesConvertService: ImagesConvertService
  ) { }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute("My closet")
    this.sourceClothing = this.clothing;
    this.getClothing();
  }
  getClothing() {
    this.clothingService.getAllClothes().subscribe((res) => {
      console.log(res);
      if (res) {
        let url = "https://localhost:44347/Images/"
        this.clothing = res;
        this.sourceClothing = res;
        this.sourceClothing.forEach(element => {
          var n = element.ImageLink.split("\\");
          var sub = n[n.length - 1];
          element.ImageLink = url + sub;
        });
      }
      else this.errorMessage="There was a problem getting the cloth"
    });
  }
  // this.tyu("https://localhost:44347/Images/Redmichnass.jpg");
  // element.ImageLink=this.getImageFromService(element.ImageLink);
  // const file = element.ImageLink;
  // const reader = new FileReader();
  // reader.readAsDataURL(file);
  // reader.onload = (e) => (element.ImageLink= reader.result as string);
  //
  // tyu(url: string) {
  //   var request = new XMLHttpRequest();
  //   request.open('GET', url, true);
  //   request.responseType = 'blob';
  //   request.onload = function () {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(request.response);
  //     reader.onload = function (e) {
  //       console.log('DataURL:', e.target?.result);
  //     };
  //   };
  //   request.send();
  // }
  // public tempimagToShow: any;
  // getImageFromService(url: string): any {
  //   this.imagesConvertService.getImage(url).subscribe(data => {
  //     this.tempimagToShow = this.imagesConvertService.createImageFromBlob(data);
  //     return this.tempimagToShow;
  //   }, error => {
  //     console.log(error);
  //     return error;
  //   });
  // }

  isFavoritee(id: number) {
    // this.isFavorite[i] = !this.isFavorite[i];

    this.clothingService.favoriteCloth(id).subscribe(res => {
      console.log(res);
      this.getClothing();
    })
  }
  public Favorite:string="false";
  favoriteSort(){
    this.Favorite=this.Favorite=="true"?"false":"true";
    this.clothing = this.sourceClothing;
    this.clothing = this.clothing?.filter(x => x.Favorite?.trim() == this.Favorite)
  }
  deleteCloth(cloth: Clothing) {
    this.clothingService.deleteCloth(cloth.ClothingId).subscribe((res) => {
      console.log(res);
      this.getClothing();
    });
  }
  clear(){
    this.clothing = this.sourceClothing;
  }
  weatherSort(weather: string) {
    if (weather) {
      this.choosenWeatherSort = weather;
      this.clothing = this.sourceClothing;
      this.clothing = this.clothing?.filter(x => x.season == this.choosenWeatherSort)
      if (this.chooseStyleSort && this.chooseStyleSort != "")
        this.clothing = this.clothing?.filter(x => x.style == this.chooseStyleSort)
    }
  }
  styleSort(style: string) {
    if (style) {
      this.chooseStyleSort = style;
      this.clothing = this.sourceClothing;
      this.clothing = this.clothing?.filter(x => x.style == this.chooseStyleSort)
      if (this.choosenWeatherSort && this.choosenWeatherSort != "")
        this.clothing = this.clothing?.filter(x => x.season == this.choosenWeatherSort)
    }
  }
}
