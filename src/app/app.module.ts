import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { NavLoginDropdownComponent } from './navigation/nav-login-dropdown/nav-login-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MenuComponent,
    NavbarComponent,
    NavLoginDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
