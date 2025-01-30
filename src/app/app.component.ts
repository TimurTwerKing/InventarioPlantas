import { Component } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { PlantListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  imports: [CatalogComponent, PlantListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'InventarioPlantas';
}
