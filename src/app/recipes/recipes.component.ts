import { Component } from '@angular/core';
import { Recipe_m } from './recipe_m.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  selectedRecipe!: Recipe_m;
}
