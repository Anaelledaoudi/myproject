import { Component, OnInit } from '@angular/core';
import { HeaderRouteService } from '../../shared/services/header-route.service'
import { ClothingService } from 'src/app/shared/services/Clothing.service';
import { LookClothVm, Look } from 'src/app/shared/models/Look.model';

@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.component.html',
  styleUrls: ['./outfit.component.css']
})
export class OutfitComponent implements OnInit {
  public errorMessage?: string;
  public looksList: LookClothVm[]=[];
    // = [
    //   {
    //     LookId: 0,
    //     User_Id: 0,
    //     LikeOrNot: true,
    //     clothingList: [
    //       {
    //         ClothingId: 0,
    //         User_Id: 0,
    //         Cat_Id: 0,
    //         ImageLink: 'http://localhost:4200/assets/5.jpg',
    //         Pattern: '',
    //         Size: '',
    //         Color: '',
    //         style: "casual",
    //         season: "sun",
    //       },
    //       {
    //         ClothingId: 1,
    //         User_Id: 0,
    //         Cat_Id: 0,
    //         ImageLink: 'http://localhost:4200/assets/4.jpg',
    //         Pattern: '',
    //         Size: '',
    //         Color: '',
    //         style: "casual",
    //         season: "sun",
    //       }]
    //   },
    //   {
    //     LookId: 2,
    //     User_Id: 0,
    //     LikeOrNot: true,
    //     clothingList: [
    //       {
    //         ClothingId: 0,
    //         User_Id: 0,
    //         Cat_Id: 0,
    //         ImageLink: 'http://localhost:4200/assets/5.jpg',
    //         Pattern: '',
    //         Size: '',
    //         Color: '',
    //         style: "casual",
    //         season: "sun",
    //       },
    //       {
    //         ClothingId: 1,
    //         User_Id: 0,
    //         Cat_Id: 0,
    //         ImageLink: 'http://localhost:4200/assets/4.jpg',
    //         Pattern: '',
    //         Size: '',
    //         Color: '',
    //         style: "casual",
    //         season: "sun",
    //       },
    //       {
    //         ClothingId: 0,
    //         User_Id: 0,
    //         Cat_Id: 0,
    //         ImageLink: 'http://localhost:4200/assets/5.jpg',
    //         Pattern: '',
    //         Size: '',
    //         Color: '',
    //         style: "casual",
    //         season: "sun",
    //       }]
    //   }
    // ];

  public isFavorite: boolean[] = [false];
  public isFavoriteLook: boolean[] = [false];

  constructor(public clothingService: ClothingService,
    public headerRouteService: HeaderRouteService
  ) { }

  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute("Outfit")
    this.getOutfits();
  }
  getOutfits() {
    this.clothingService.getLooks().subscribe(res => {
      if (res) {
        if (res.length > 0) {
          this.looksList = res;
          let url = "https://localhost:44347/Images/"
          this.looksList.forEach(look => {
            look.clothingList?.forEach(element => {
              var n = element.ImageLink.split("\\");
              var sub = n[n.length - 1];
              element.ImageLink = url + sub;
            });
          });
        }
        else {
          this.errorMessage = "No looks found"
        }
      }
      else {
        this.errorMessage = "There was a problem getting the looks, try again later"
      }
    })
  }
  deletecloth(id: number) {
    this.clothingService.deleteCloth(id).subscribe(res => {
      console.log(res);
      this.getOutfits();
    })

  }
  deleteLook(id: number) {
    this.clothingService.deleteLook(id).subscribe(res => {
      console.log(res);
      this.getOutfits();
    })
  }
  IsFavoriteLook(id: number) {
    // this.isFavoriteLook[i] = !this.isFavorite[i];

    this.clothingService.favoriteLook(id).subscribe(res => {
      console.log(res);
      this.getOutfits();

    })
  }
  IsFavorite(i:number,id: number) {
    this.isFavorite[i] = !this.isFavorite[i];

    this.clothingService.favoriteCloth(id).subscribe(res => {
      console.log(res);

    })
  }
}
