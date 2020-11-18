import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>(); 
    
    // private recipes: Recipe[] = [
    //     new Recipe('A test recipe', 
    //     'this is a test', 
    //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    //     [
            
    //         new Ingredient('Meat', 1),
    //         new Ingredient('french fries', 20)
    //     ]),
    
    //     new Recipe('Another test recipe', 'this is a test', 
    //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    //     [
            
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Meat', 1)
    //     ]),
        

    //   ];

    private recipes: Recipe[] = []; 

      constructor(private shoppingListService: ShoppingListService) {}

    
      setRecipes(recipes: Recipe[]) {
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}