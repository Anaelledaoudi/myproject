import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClothComponent } from './components/add-cloth/add-cloth.component';
import { ClothinkComponent } from './components/clothink/clothink.component';
import { Clothink2Component } from './components/clothink2/clothink2.component';
import { DonateComponent } from './components/donate/donate.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/logIn/logIn.component';
import { MyClosetComponent } from './components/my-closet/my-closet.component';
import { RegisterComponent } from './components/register/register.component';
import { CameraComponent } from './components/camera/camera.component';
import { OutfitComponent } from './components/outfit/outfit.component';

// import { CookieService } from 'ngx-cookie-service';

const routes: Routes = [
  {path:'', component:LogInComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LogInComponent},
  {path:'add-cloth', component:AddClothComponent},
  {path:'my-closet', component:MyClosetComponent},
  {path:'favorite', component:FavoriteComponent},
  {path:'clothink', component:ClothinkComponent},
  {path:'clothink2', component:Clothink2Component},
  {path:'donate', component:DonateComponent},
  {path:'register', component:RegisterComponent},
  {path:'camera', component:CameraComponent},
  {path:'outfit', component:OutfitComponent},

  // {path:'add-cloth', component:AddClothComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []//CookieService
})
export class AppRoutingModule { }
