import { Component, Input } from '@angular/core';
import { TileModel } from './tile.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input()
  tile!: TileModel;
}
