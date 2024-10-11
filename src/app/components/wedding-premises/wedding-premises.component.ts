import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery-row/gallery-row.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wedding-premises',
  standalone: true,
  imports: [GalleryComponent, CommonModule, RouterLink],
  templateUrl: './wedding-premises.component.html',
  styleUrl: './wedding-premises.component.scss',
})
export class WeddingPremisesComponent {}
