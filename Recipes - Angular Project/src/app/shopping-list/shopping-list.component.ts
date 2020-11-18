import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangerSub: Subscription;
  
  constructor(private shoppingListService : ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit() {
this.ingredients = this.shoppingListService.getIngredients();
 this.igChangerSub = this.shoppingListService.ingredientsChanged
.subscribe(
  (ingredients: Ingredient[]) => {

  }
);

this.loggingService.printLog('Hello from shoppinglistcopommennt ngonint')
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);

  // }  

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

ngOnDestroy(): void {
  this.igChangerSub.unsubscribe();
 }

}
