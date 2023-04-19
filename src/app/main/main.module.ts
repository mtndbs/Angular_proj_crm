import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { BackgroundImgComponent } from './background-img/background-img.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalComponent } from './personal/personal.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    BackgroundImgComponent,
    PageNotFoundComponent,
    PersonalComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class MainModule {}
