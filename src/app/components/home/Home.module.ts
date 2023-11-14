import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BtnPrimaryComponent } from 'src/app/shared/btn-primary/btn-primary.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainAnimationComponent,
    MainSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  exports:[
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent
  ]

})
export class HomeModule { }
