import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoadBackground]',
  standalone: true,
})
export class LazyLoadBackgroundDirective implements OnInit {
  @Input('appLazyLoadBackground') backgroundImageUrl: string | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadBackgroundImage();
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }

  private loadBackgroundImage() {
    this.el.nativeElement.style.backgroundImage = `url(${this.backgroundImageUrl})`;
  }
}
