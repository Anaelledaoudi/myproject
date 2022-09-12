import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Clothing } from 'src/app/shared/models/Clothing.model';
import { ClothingStyle } from 'src/app/shared/models/clothing_style.model';
import { Style } from 'src/app/shared/models/Style.model';
import { StyleService } from 'src/app/shared/services/Style.service';
import { SeasonService } from 'src/app/shared/services/Season.service';
import { CategoryService } from 'src/app/shared/services/Category.service';
import { ClothingService } from 'src/app/shared/services/Clothing.service';
import { Category } from 'src/app/shared/models/Category.model';
import { Season } from 'src/app/shared/models/Season.model';
import { Event, Router } from '@angular/router';
import { HeaderRouteService } from '../../shared/services/header-route.service';

@Component({
  selector: 'app-add-cloth',
  templateUrl: './add-cloth.component.html',
  styleUrls: ['./add-cloth.component.css'],
})
export class AddClothComponent implements OnInit {
  clothing: Clothing = new Clothing();
  styles: { [StyleTypeName: string]: Style[] } = {};
  seasons: Season[] = [];
  categories: Category[] = [];
  showCamera: boolean = false;
  isCoosenOrTookAPic: boolean = false;
  // selectedImage:WebcamImage|null=null;
  public imageSrc: any;
  // public fileToUpload: File = new File([], '');
  // public upload_image: string = '';
  public seasonselected = '';
  public categoryselected = '';
  public styleSelected = '';
  public imageProperty = [''];
  // clothForm = this.formBuilder.group({
  //   seasonChosen: '',
  //   styleChoses: '',
  //   colorChosen: '',
  // });
  choosenPicMessage: string = '';
  successMessage: any;
  constructor(
    private styleService: StyleService,
    private seasonService: SeasonService,
    private categoryService: CategoryService,
    public clothingService: ClothingService,
    private formBuilder: FormBuilder,
    public route: Router,
    public headerRouteService: HeaderRouteService
  ) {}

  ngOnInit(): void {
    this.headerRouteService.setCurrentRoute("New cloth")
    this.clothingService.choosenCloth.seasonWinter = false;
    this.clothingService.choosenCloth.seasonSummer =false;
    this.clothingService.choosenCloth.seasonWinterSummer = false;
    if (this.clothingService.webcamImage != null) {
      this.isCoosenOrTookAPic = true;
      this.choosenPicMessage = 'Photo taken successfully';
    }
  }
  onchangeColor(newValue: any) {
    if (newValue.value) {
      this.clothingService.choosenCloth.Color = newValue.value;
    }
  }
  onchangeStyle(newValue: any) {
    if (newValue.value) {
      this.clothingService.choosenCloth.ClothingStyles = newValue.value;
    }
  }
  onChooseColor(element: any, value: string) {
    switch (value) {
      case 'rain': {
        this.clothingService.choosenCloth.seasonWinter == false
          ? (this.clothingService.choosenCloth.seasonWinter = true)
          : (this.clothingService.choosenCloth.seasonWinter = false);
          this.clothingService.choosenCloth.seasonSummer = false
          this.clothingService.choosenCloth.seasonWinterSummer = false

        break;
      }
      case 'sun': {
        this.clothingService.choosenCloth.seasonSummer == false
          ? (this.clothingService.choosenCloth.seasonSummer = true)
          : (this.clothingService.choosenCloth.seasonSummer = false);
          this.clothingService.choosenCloth.seasonWinterSummer = false;
          this.clothingService.choosenCloth.seasonWinter =false;

        break;
      }
      case 'cloudsun': {
        this.clothingService.choosenCloth.seasonWinterSummer == false
          ? (this.clothingService.choosenCloth.seasonWinterSummer = true)
          : (this.clothingService.choosenCloth.seasonWinterSummer = false);
          this.clothingService.choosenCloth.seasonWinter = false;
          this.clothingService.choosenCloth.seasonSummer = false;

        break;
      }
    }
  }
  // onchangeCat(newValue: any) {
  //   if (newValue.value) {
  //     this.clothingService.choosenCloth.Cat_Id=newValue.key;
  //   }
  // }

  saveImage(image: WebcamImage) {
    this.clothingService.webcamImage = image;
    this.choosenPicMessage = 'Photo taken successfully';
    this.isCoosenOrTookAPic = true;
  }
  openFiles() {
    document.getElementById('file')?.click();
  }
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(file);
    }
  }
  async upload(imageInput: any, event: any) {
    this.readURL(event);
    this.clothingService.fileToUpload = imageInput.files[0];
    this.clothingService.upload_image = imageInput.files[0].name;
    this.choosenPicMessage = 'Image uploaded successfully';
    this.isCoosenOrTookAPic = true;

    // this.clothingService.uploadImage(imageInput.files[0]).subscribe(res=>{
    //   console.log(" this.clothingService.uploadImage(imageInput.files[0]).subscribe res="+res)
    // });
  }
  saveCloth() {
    this.clothingService.choosenCloth.userId =
      this.headerRouteService.logedInUser.UserId;
    this.clothingService
      .uploadImage(this.clothingService.fileToUpload)
      .subscribe((res) => {
        console.log(
          ' this.clothingService.uploadImage(imageInput.files[0]).subscribe res=' +
            res
        );
        if (res){
          this.successMessage = 'The cloth was added successfully!';
        } 
        else this.successMessage = 'There was a problem adding the cloth!';
      });
  }

  // saveCloth()
  // {

  //debugger;
  // this.clothForm.setValue({ seasonChosen: this.seasonselected,//עונות
  // styleChoses: this.styleSelected,//סגנון-חול שבת חתונה
  // catergoryChosen: this.categoryselected})//קטגוריה-חצאית חולצה...
  //   console.log(this.clothForm);

  // }
  // saveSeason(event:any)
  // {

  //   this.seasonselected = event.target.value;
  // }
  // saveCategory(event:any)
  // {
  //   this.categoryselected = event.target.value;
  // }
  // saveStyle(event:any)
  // { debugger;
  //   event.target.setValue(this.styleSelected+event.target.value)
  //   this.styleSelected =event.target.value;
  // }
}
