import { RecipeService } from './../../recipe.service';
import { Recipe } from '../../recipe.model';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServive: RecipeService) { }

  ngOnInit() {
  }
  onSelected() {
    this.recipeServive.recipeSelected.emit(this.recipe);
  }

}
