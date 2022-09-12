import { ClothingSeason } from './Clothing_Season.model';
import { ClothingStyle } from './clothing_style.model';
import { Season } from './Season.model';

export class Clothing {
  ClothingId: number = 0;
  User_Id: number = 0;
  Cat_Id: number = 0;
  ImageLink: string = '';
  Pattern: string = '';
  Favorite: string = '';
  Size: string = '';
  Color: string = '';
  ClothingStyles?: ClothingStyle[] = [];
  ClothingSeasons?: Season[] = [];
  style?:string;
  season?:string;
}
export class ClothingVM {
  ClothingId: number = 0;
  ImageLink: string = '';
  //   Pattern: string = '';
  //   Size: string = '';
  Favorite: string = 'false';
  Color: string = '';
  ClothingStyles: string ='';
  seasonWinter: boolean = false;
  seasonSummer: boolean = false;
  seasonWinterSummer: boolean = false;
  userId: number = 0;
  
}
