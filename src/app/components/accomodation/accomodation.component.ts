import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery-row/gallery-row.component';
import { TilesComponent } from '../tiles/tiles.component';
import { TileModel } from '../tile/tile.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accomodation',
  standalone: true,
  imports: [GalleryComponent, TilesComponent, CommonModule],
  templateUrl: './accomodation.component.html',
  styleUrl: './accomodation.component.scss',
})
export class AccomodationComponent {
  gallerySections = [
    {
      background: 'assets/img/accomodation/01.jpg',
      text: 'Section 1 Text',
    },
    {
      background: 'assets/img/accomodation/02.jpg',
      text: 'Section 2 Text',
    },
    {
      background: 'assets/img/accomodation/03.jpg',
      text: 'Section 3 Text',
    },
    {
      background: 'assets/img/accomodation/04.jpg',
      text: 'Section 4 Text',
    },
  ];

  tiles: TileModel[] = [
    {
      title: 'Tile 1',
      text: 'Description for Tile 1',
      imagePath: 'assets/img/accomodation/01.jpg',
      routerLink: '/tile1',
    },
    {
      title: 'Tile 2',
      text: 'Description for Tile 2',
      imagePath: 'assets/img/accomodation/01.jpg',
      routerLink: '/tile2',
    },
    {
      title: 'Tile 3',
      text: 'Description for Tile 3',
      imagePath: 'assets/img/accomodation/01.jpg',
      routerLink: '/tile3',
    },
    {
      title: 'Tile 4',
      text: 'Description for Tile 4',
      imagePath: 'assets/img/accomodation/01.jpg',
      routerLink: '/tile4',
    },
  ];

  faqs: Faq[] = [
    {
      question: 'What is the check-in time?',
      answer: 'Check-in time is from 2:00 PM to 10:00 PM.',
      open: false,
    },
    {
      question: 'Is breakfast included?',
      answer: 'Yes, breakfast is included in the room rate.',
      open: false,
    },
    {
      question: 'Do you offer free Wi-Fi?',
      answer: 'Yes, we offer free Wi-Fi throughout the property.',
      open: false,
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, we have free parking available for our guests.',
      open: false,
    },
  ];

  toggleFaq(faq: Faq) {
    faq.open = !faq.open;
  }
}

interface Faq {
  question: string;
  answer: string;
  open: boolean;
}
