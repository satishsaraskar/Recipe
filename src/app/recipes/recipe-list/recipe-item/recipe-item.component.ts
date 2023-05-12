import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe_m } from '../../recipe_m.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
 @Input() recipe! : Recipe_m;


 @Output() recipeIteSelected =  new EventEmitter<void>();


onSelectedItem() {
      this.recipeIteSelected.emit()
  }
}
