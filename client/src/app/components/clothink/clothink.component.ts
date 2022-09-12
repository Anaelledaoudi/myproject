import { Component, OnInit } from '@angular/core';
import { HeaderRouteService } from '../../shared/services/header-route.service'
import { ClothingService } from 'src/app/shared/services/Clothing.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clothink',
  templateUrl: './clothink.component.html',
  styleUrls: ['./clothink.component.css']
})
export class ClothinkComponent implements OnInit {
  constructor(private clothingService: ClothingService,
    public headerRouteService: HeaderRouteService, private router: Router
  ) { }
  public errorMessage?: string;

  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute("Clothink")
  }
  chooseStyle(style: string) {
    this.clothingService.style = style;
  }
  chooseWeather(weather: string) {
    this.clothingService.weather = weather;
  }
  showClothink2() {
    if (this.clothingService.style && this.clothingService.style != "") {
      if (this.clothingService.weather && this.clothingService.weather != "") {
        this.errorMessage ="";
        let url = "https://localhost:44347/Images/"
        this.clothingService.getClothink(this.clothingService.style,this.clothingService.weather).subscribe(res => {
          if (res) {
            if(res.length>0){
            this.clothingService.clothinkLookForClothinkComponent = res;
            this.clothingService.clothinkLookForClothinkComponent.forEach(element => {
              var n = element.ImageLink.split("\\");
              var sub = n[n.length - 1];
              element.ImageLink = url + sub;
            });
            this.router.navigate(['/clothink2']);
            }
            else
            this.errorMessage = "No matching clothes found, try another search"

          }
          else {
            this.errorMessage = "there was a problem getting the look, try again later"
          }
        })
      }
      else {
        this.errorMessage = "choose style and weather and then press ok"
      }
    }
    else {
      this.errorMessage = "choose style and weather and then press ok"

    }
  }
}
