import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../plant.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class PlantListComponent {
  @Input() plants: Plant[] = [];
  @Output() deletePlant = new EventEmitter<Plant>();
  @Output() toggleFavorite = new EventEmitter<Plant>();

  onDelete(plant: Plant) {
    this.deletePlant.emit(plant);
  }

  onToggleFavorite(plant: Plant) {
    this.toggleFavorite.emit(plant);
  }
}
