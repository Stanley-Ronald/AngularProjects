import { Recipe } from "./recipe.model";
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'A Test Recipe', 
        'This is a test description', 
        'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
        [
            new Ingredient('Chicken', 4),
            new Ingredient('Lime', 3)
        ]),
        new Recipe(
            'A Second Recipe',
            'A second is a test description',
            'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}