import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slidesStore : {src:string, id: string, alt: string}[] = [];
  constructor() { }

  ngOnInit(): void {
    this.slidesStore = [
      {src:'../../../../assets/Layer 27.png', id: 'firstimg', alt: 'firstImg'},
      {src:'../../../../assets/Layer -7.png', id: 'secondimg', alt: 'secondimg'},
      {src:'../../../../assets/Layer -5.png', id: 'thirdimg', alt: 'thirdimg'}]
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoHeight: false,
    autoWidth: true,
    navText: ['<i class="fas fa-chevron-left carousel-icon"></i>', '<i class="fas fa-chevron-right carousel-icon"></i>'],
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

}
