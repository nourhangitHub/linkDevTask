import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '../core/customPipe/date.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatMenuModule} from '@angular/material/menu';
import { NgxSpinnerModule } from "ngx-spinner";  
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BaseComponent,
    DatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    MatMenuModule,
    NgxSpinnerModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    BaseComponent,
    NgbModule,
    DatePipe,
    CarouselModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    MatMenuModule,
    NgxSpinnerModule
  ],
  
})
export class SharedModule { }
