import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-wedding-tour',
  templateUrl: './wedding-tour.component.html',
  styleUrls: ['./wedding-tour.component.scss'],
  animations: [
    trigger('fadeInScale', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'scale(0.8)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'scale(1)',
        })
      ),
      transition('hidden => visible', [animate('1.5s ease-out')]),
    ]),
  ],
})
export class WeddingTourComponent implements AfterViewInit, OnDestroy {
  textStates = ['hidden', 'hidden', 'hidden'];
  observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute('data-index') || '0',
            10
          );
          this.textStates[index] = 'visible';
        }
      });
    });
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animated-text');
    elements.forEach((element, index) => {
      element.setAttribute('data-index', index.toString());
      this.observer.observe(element);
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
