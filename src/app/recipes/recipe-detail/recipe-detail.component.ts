import { Component, Input } from '@angular/core';
import { Recipe_m } from '../recipe_m.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {

  @Input() recipe! : Recipe_m;
}
