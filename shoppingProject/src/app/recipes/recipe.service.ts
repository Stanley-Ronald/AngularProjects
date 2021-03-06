import { Recipe } from "./recipe.model";
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    

    private recipes: Recipe[] = [
        new Recipe(
        'Chicken Recipe', 
        'Chicken and Lime', 
        'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
        [
            new Ingredient('Chicken', 4),
            new Ingredient('Lime', 3)
        ]),
        new Recipe(
            'Cheeseburger Recipe',
            'A tasty hot cheeseburger',
            'https://s3.amazonaws.com/pixtruder/original_images/9fbb73a7cba9b7b75c3d05484f6b6d087470641d',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      constructor(private shoppingListService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(id: number) {
          return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}