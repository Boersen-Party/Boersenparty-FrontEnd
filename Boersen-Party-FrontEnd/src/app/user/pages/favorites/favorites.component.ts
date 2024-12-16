import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {FavoriteItemComponent} from '../../components/favorite-item/favorite-item.component';

@Component({
  selector: 'app-favoites',
  standalone: true,
  imports: [
    ToolbarComponent, FavoriteItemComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

}
