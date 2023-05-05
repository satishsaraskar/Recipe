import { Component } from '@angular/core';
import { Recipe_m } from '../recipe_m.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes_A : Recipe_m[] =[
    new Recipe_m('A Test recipe name', 'this is simple test desc', 'https://www.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg')
  ,  new Recipe_m('A Test recipe name', 'this is simple test desc', 'https://www.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg')
   , new Recipe_m('A Test recipe name', 'this is simple test desc', 'https://www.shutterstock.com/image-photo/pumpkin-soup-food-photography-recipe-260nw-1117916249.jpg')
  ];


}
