import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { TinyNavComponent } from './tiny-nav/tiny-nav.component';
import { RouterModule } from '@angular/router';
import { PopListComponent } from './pop-list/pop-list.component';
import { UserBtnComponent } from './user-btn/user-btn.component';
import { BackBtnComponent } from './back-btn/back-btn.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InterfacesComponent,
    ModalComponent,
    DropdownsComponent,
    TinyNavComponent,
    PopListComponent,
    UserBtnComponent,
    BackBtnComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    TinyNavComponent,
    DropdownsComponent,
    InterfacesComponent,
    UserBtnComponent,
    BackBtnComponent,
  ],
})
export class SharedModule {}
