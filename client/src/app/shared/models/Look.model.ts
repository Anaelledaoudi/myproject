import { Clothing } from "./Clothing.model";

export class Look
{
     LookId : number = 0 ;
     User_Id : number = 0 ;
     Date: Date=new Date();
     LikeOrNot! : boolean;
     Wore : boolean = false;
}
export class LookClothVm
{
     LookId : number = 0 ;
     User_Id : number = 0 ;
     LikeOrNot : boolean=false;
     clothingList?: Clothing[]=[];
}