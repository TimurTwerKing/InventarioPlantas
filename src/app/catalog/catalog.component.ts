import { Component, EventEmitter, Output } from '@angular/core';
import { Plant } from '../plant.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  imports: [FormsModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  plant: Plant = { name: "", type: "Shrub", isFavorite: false };
  plantTypes: Plant['type'][] = ['Shrub', 'Tree'];
  @Output() addPlant = new EventEmitter<Plant>();

  clearForm() {
    this.plant = { name: "", type: "Shrub", isFavorite: false };
  }
  savePlant() {
    this.addPlant.emit({ ...this.plant });
    this.clearForm();
  };
}

