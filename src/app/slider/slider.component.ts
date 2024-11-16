import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var $: any; // Declares jQuery globally

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class MySliderComponent implements AfterViewInit {
  // Array of images
  slides = [
    { img: 'https://placehold.co/600x400' },
    { img: 'https://placehold.co/600x400' },
    { img: 'https://placehold.co/600x400' }
  ];


  ngAfterViewInit(): void {
    // Ensure that jQuery is loaded before initializing Slick Slider
    setTimeout(() => {
      if (typeof $ !== 'undefined') {
        $('.slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          arrows: true
        });
      } else {
        console.error("jQuery is not defined.");
      }
    }, 1000);
  }
}
