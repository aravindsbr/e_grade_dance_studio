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

  toggleService(serviceType: boolean) {
    this.isClasses = serviceType;
  }
}
