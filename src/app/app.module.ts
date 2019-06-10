import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './views/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CardsComponent,
    PlantillaComponent,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
