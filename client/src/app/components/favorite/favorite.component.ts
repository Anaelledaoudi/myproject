import { Component, OnInit } from '@angular/core';
import { HeaderRouteService } from '../../shared/services/header-route.service'
import { ClothingService } from 'src/app/shared/services/Clothing.service';
import { LookClothVm, Look } from 'src/app/shared/models/Look.model';
import { Clothing } from 'src/app/shared/models/Clothing.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public isFavorite: boolean[] = [false];
  public isFavoriteLook: boolean[] = [false];
  public errorMessage?: string;
  public looksFavoriteList: LookClothVm[] = []

  constructor(public clothingService: ClothingService,
    public headerRouteService: HeaderRouteService
  ) { }
  clothing?: Clothing[] = [];

  sourceClothing?: Clothing[];

  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute("My favorite")
    // this.getFavoriteLooks();
     this.getClothing() ;
  }
  getClothing() {
    this.clothingService.getAllClothes().subscribe((res) => {
      console.log(res);
      if (res) {

        let url = "https://localhost:44347/Images/"
        this.clothing = res;
        this.clothing = this.clothing?.filter(x => x.Favorite?.trim() == "true")

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
  getFavoriteLooks() {
    this.clothingService.getFavoriteLooks().subscribe(res => {
      if (res) {
        if (res.length > 0) {
          this.looksFavoriteList = res;
          let url = "https://localhost:44347/Images/"
          this.looksFavoriteList.forEach(look => {
            look.clothingList?.forEach(element => {
              var n = element.ImageLink.split("\\");
              var sub = n[n.length - 1];
              element.ImageLink = url + sub;
            });
          });
        }
        else {
          this.errorMessage = "No favorite looks found"
        }
      }
      else {
        this.errorMessage = "There was a problem getting the favorit looks, try again later"
      }
    })
  }
  IsFavoriteLook(id: number) {
    this.isFavorite[id] = !this.isFavorite[id];

    this.clothingService.favoriteLook(id).subscribe(res => {
      console.log(res);

    })
  }
  IsFavorite(id: number) {
    this.isFavoriteLook[id] = !this.isFavorite[id];

    this.clothingService.favoriteCloth(id).subscribe(res => {
      console.log(res);

    })
  }

}
