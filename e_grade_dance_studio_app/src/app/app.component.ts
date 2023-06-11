import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e_grade_dance_studio_app';
  isClasses: boolean = true;
  listOfClasses = [
    '../assets/images/class_1.png',
    '../assets/images/class_2.png',
    '../assets/images/class_3.png',
    '../assets/images/class_4.png',
    '../assets/images/class_5.png',
    '../assets/images/class_6.png',
    '../assets/images/class_7.png',
  ];
  listOfEvents = [
    '../assets/images/event_1.png',
    '../assets/images/event_2.png',
    '../assets/images/event_3.png',
    '../assets/images/event_4.png',
    '../assets/images/event_5.png',
    '../assets/images/event_6.png',
    '../assets/images/event_7.png',
  ];
  listOfTestimonials = [
    '../assets/images/testimonial_1.png',
    '../assets/images/testimonial_2.png',
    '../assets/images/testimonial_3.png',
    '../assets/images/testimonial_4.png',
    '../assets/images/testimonial_5.png',
    '../assets/images/testimonial_6.png',
    '../assets/images/testimonial_7.png',
    '../assets/images/testimonial_8.png',
    '../assets/images/testimonial_9.png',
    '../assets/images/testimonial_10.png',
    '../assets/images/testimonial_11.png',
    '../assets/images/testimonial_12.png',
  ];
  listOfBrands = [
    {
      src: '../assets/images/brand_1.png',
      name: 'Sony Music South',
      description: 'Song Promotions',
    },
    {
      src: '../assets/images/brand_2.png',
      name: 'U1 Records',
      description: 'Song Dance Team',
    },
    {
      src: '../assets/images/brand_3.png',
      name: 'Think Music',
      description: 'Song Dance Team',
    },
    {
      src: '../assets/images/brand_4.png',
      name: 'Star Vijay Television',
      description: 'Guest Performance',
    },
    {
      src: '../assets/images/brand_5.png',
      name: 'Sandy’s Dance Studio',
      description: 'Song Dance Team',
    },
    {
      src: '../assets/images/brand_6.png',
      name: 'Zee Tamizh Television',
      description: 'Show Choreography',
    },
  ];

  footerLogoSrc: string = '../assets/images/footer_logo.png';

  toggleService(serviceType: boolean) {
    this.isClasses = serviceType;
  }
}
