import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plant } from '../plant.interface';

@Component({
  selector: 'app-catalog',
  standalone: true, // Marca el componente como standalone
  imports: [FormsModule], // Importa FormsModule directamente aquí
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  plant: Plant = { name: "", type: "Shrub", isFavorite: false };
  plantTypes: Plant['type'][] = ['Shrub', 'Tree'];
  @Output() addPlant = new EventEmitter<Plant>();

  // clearForm() {
  //   this.plant = { name: "", type: "Shrub", isFavorite: false };
  // }

  savePlant() {
    this.addPlant.emit({ ...this.plant });
    // this.clearForm();
  }
}
