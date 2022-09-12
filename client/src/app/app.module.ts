import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClothComponent } from './components/add-cloth/add-cloth.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/logIn/logIn.component';
import { MyClosetComponent } from './components/my-closet/my-closet.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ClothinkComponent } from './components/clothink/clothink.component';
import { DonateComponent } from './components/donate/donate.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './components/camera/camera.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { OutfitComponent } from './components/outfit/outfit.component';
import { Clothink2Component } from './components/clothink2/clothink2.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClothComponent,
    HomeComponent,
    LogInComponent,
    MyClosetComponent,
    FavoriteComponent,
    ClothinkComponent,
    DonateComponent,
    CameraComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    OutfitComponent,
    Clothink2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
