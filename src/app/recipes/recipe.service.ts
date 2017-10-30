import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Pizzas',
      'Great',
      'https://www.cicis.com/media/1138/pizza_trad_pepperoni.png',
      [
          new Ingredient('Meat', 1),
          new Ingredient('Tomatoes', 10)
        ]),
    new Recipe(
      'Apple Pie',
      'Yummy',
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545039107.jpeg',
      [
        new Ingredient('Apple', 10),
        new Ingredient('Milk', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredietsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
