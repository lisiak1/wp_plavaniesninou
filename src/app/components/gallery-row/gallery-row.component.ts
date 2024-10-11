import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GalleryRowModel } from './gallery-row.model';

@Component({
  selector: 'app-gallery-row',
  templateUrl: './gallery-row.component.html',
  styleUrls: ['./gallery-row.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class GalleryComponent {
  @Input() sections: GalleryRowModel[] = [];

  currentIndex = 0;

  get currentSection() {
    return this.sections[this.currentIndex];
  }

  previousSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.sections.length) % this.sections.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.sections.length;
  }
}
