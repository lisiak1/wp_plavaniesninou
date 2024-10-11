import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { LazyLoadBackgroundDirective } from 'src/app/directives/lazy-load-background-directive.directive';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SectionModel } from './section.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, LazyLoadBackgroundDirective, RouterLink],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  animations: [
    trigger('titleAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter', [
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('textAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter', [
        animate(
          '700ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('buttonAnimation', [
      state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
      transition(':enter', [
        animate('900ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class SectionComponent implements OnInit {
  @Input() model!: SectionModel;

  titleVisible = false;
  textVisible = false;
  buttonVisible: unknown;

  backgroundImage: string | undefined;

  isDesktop = false;
  isMobileSmall = false;
  isMobileMedium = false;

  @HostBinding('class.section-aaa') sectionClass = true;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setBackgroundImage();
  }

  ngOnInit() {
    this.setBackgroundImage();
  }

  // todo create service for this
  setBackgroundImage() {
    const width = window.innerWidth;
    if (width <= 480) {
      this.backgroundImage = this.model.imageMobileSmall;
    } else if (width <= 768) {
      this.backgroundImage = this.model.imageMobileMedium;
    } else {
      this.backgroundImage = this.model.imageDesktop;
    }
  }
}
