import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    AccordianComponent
  ]
})
export class SharedModule { }
