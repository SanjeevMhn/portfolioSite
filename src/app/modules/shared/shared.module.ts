import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { AccordianComponent } from './accordian/accordian.component';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    AccordianComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent,
    AccordianComponent,
  ]
})
export class SharedModule { }
