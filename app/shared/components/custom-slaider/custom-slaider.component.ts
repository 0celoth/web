import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal, ViewChild } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-custom-slaider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-slaider.component.html',
  styleUrls: ['./custom-slaider.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSlaiderComponent  implements OnInit {

  swiperElement = signal<SwiperContainer | null>(null);
  ngOnInit():void {
    const swiperElementConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions ={
      slidesPerView: 1,
      pagination: true,
      // navigation: {
      //   enabled: true
      // },
      autoplay: true,
      breakpoints: {
        640:{
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 5,
        },
    },
  };
  Object.assign(swiperElementConstructor!, swiperOptions);
  this.swiperElement.set(swiperElementConstructor as SwiperContainer);
  this.swiperElement()?.initialize();
}
}
