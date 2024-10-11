import { Component, Input } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { TileModel } from '../tile/tile.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [TileComponent, CommonModule],
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss'],
})
export class TilesComponent {
  @Input()
  tiles: TileModel[] = [];
}
