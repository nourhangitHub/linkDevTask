import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { HelpComponent } from './help/help.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'News',
    component: NewsComponent,
  },
  {
    path: 'News/:id',
    component: NewsDetailsComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    NewsComponent,
    HelpComponent,
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AnymounsModule { }
