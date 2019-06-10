import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SliderComponent } from '../../slider/slider.component';
import { CardsComponent } from '../../cards/cards.component';
import { FooterComponent } from '../../footer/footer.component';

@NgModule({
  declarations: [InicioComponent, NavbarComponent, SliderComponent, CardsComponent, FooterComponent ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
