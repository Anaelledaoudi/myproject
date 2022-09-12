import { Component, OnInit } from '@angular/core';
import { Clothing } from 'src/app/shared/models/Clothing.model';
import { ClothingService } from 'src/app/shared/services/Clothing.service';
import { HeaderRouteService } from '../../shared/services/header-route.service'

@Component({
  selector: 'app-clothink2',
  templateUrl: './clothink2.component.html',
  styleUrls: ['./clothink2.component.css']
})
export class Clothink2Component implements OnInit {

  constructor(public clothingService: ClothingService,
    public headerRouteService: HeaderRouteService
  ) { }
  clothing: Clothing[]=[];
  //  =
  //   [{
  //     ClothingId: 0,
  //     User_Id: 10,
  //     Cat_Id: 120,
  //     ImageLink: 'http://localhost:4200/assets/2.png',
  //     Pattern: '',
  //     Size: '',
  //     Color: '',
  //     ClothingStyles: [],
  //     ClothingSeasons: [],
  //     style: "sport",
  //     season: "cloudsun"
  //   },
  //   {
  //     ClothingId: 0,
  //     User_Id: 10,
  //     Cat_Id: 120,
  //     ImageLink: 'http://localhost:4200/assets/5.jpg',
  //     Pattern: '',
  //     Size: '',
  //     Color: '',
  //     ClothingStyles: [],
  //     ClothingSeasons: [],
  //     style: "sport",
  //     season: "cloudsun"
  //   },
  //   {
  //     ClothingId: 0,
  //     User_Id: 10,
  //     Cat_Id: 120,
  //     ImageLink: 'http://localhost:4200/assets/3.jpg',
  //     Pattern: '',
  //     Size: '',
  //     Color: '',
  //     ClothingStyles: [],
  //     ClothingSeasons: [],
  //     style: "casual",
  //     season: "sun"
  //   },]
  public errorMessage?: string;

  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute("My outfit of the day")
  }
  deleteCloth() {
  }
  newOutfit() {
    let url = "https://localhost:44347/Images/"
    this.clothingService.getClothink(this.clothingService.style, this.clothingService.weather).subscribe(res => {
      if (res) {
        if (res.length > 0) {
          this.clothingService.clothinkLookForClothinkComponent = res;
          this.clothingService.clothinkLookForClothinkComponent.forEach(element => {
            var n = element.ImageLink.split("\\");
            var sub = n[n.length - 1];
            element.ImageLink = url + sub;
          });
        }
        else
          this.errorMessage = "No matching clothes found, try another search"

      }
      else {
        this.errorMessage = "There was a problem getting the look, try again later"
      }
    })
  }
  // saveOutfit(){
  //   this.clothingService.saveOutfit().subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
