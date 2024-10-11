import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery-row/gallery-row.component';

@Component({
  selector: 'app-covered-terrace',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './covered-terrace.component.html',
  styleUrl: './covered-terrace.component.scss',
})
export class CoveredTerraceComponent {
  gallerySections = [
    {
      background: 'assets/img/kryta_terasa/01.jpg',
      text: 'Section 1 Text',
    },
    {
      background: 'assets/img/kryta_terasa/02.jpg',
      text: 'Section 2 Text',
    },
    {
      background: 'assets/img/kryta_terasa/03.jpg',
      text: 'Section 3 Text',
    },
  ];
}
