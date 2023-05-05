import { Component } from '@angular/core';
import { ingredient_m } from '../shared/ingredient_m.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {


  ingredients_A :ingredient_m [] = [
    new ingredient_m('apples', 5),
    new ingredient_m('apples', 5),
  ];
}
