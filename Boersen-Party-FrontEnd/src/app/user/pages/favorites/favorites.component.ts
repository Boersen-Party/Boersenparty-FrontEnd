import { Component } from '@angular/core';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';
import {FavoriteItemComponent} from '../../components/favorite-item/favorite-item.component';
import { FavoriteItemAllComponent } from '../../components/favorite-item/favorite-item-all/favorite-item-all.component';

@Component({
  selector: 'app-favoites',
  standalone: true,
  imports: [
    ToolbarComponent, FavoriteItemComponent, FavoriteItemAllComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

}
