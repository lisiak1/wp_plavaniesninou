import { ViewportScroller } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        }, 0);
      }
    });
  }

  scrollToTop() {
    console.info('scroll to top');
    this.viewportScroller.scrollToPosition([0, 0]);
    window.scrollTo(0, 0);
  }
}
