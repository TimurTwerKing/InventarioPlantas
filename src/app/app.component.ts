import { Component } from '@angular/core';
import { Plant } from './plant.interface';
import { CatalogComponent } from './catalog/catalog.component';
import { PlantListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true, // Marca AppComponent como standalone
  imports: [CatalogComponent, PlantListComponent], // Importa los componentes aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  plants: Plant[] = [];

  addPlant(plant: Plant) {
    this.plants.push(plant);
    this.plants.sort((a, b) => a.name.localeCompare(b.name));
  }

  deletePlant(plant: Plant) {
    this.plants = this.plants.filter(p => p !== plant);
  }

  toggleFavorite(plant: Plant) {
    plant.isFavorite = !plant.isFavorite;
  }
}
