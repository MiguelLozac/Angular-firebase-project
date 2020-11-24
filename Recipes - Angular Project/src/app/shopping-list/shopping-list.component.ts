import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredient.module';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

import * as fromApp from '../store/app.reducer'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient[] }> ;
  private igChangerSub: Subscription;
  
  constructor( 
              private loggingService: LoggingService,
              private store: Store<fromApp.AppState>
              ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
// this.ingredients = this.shoppingListService.getIngredients();
//  this.igChangerSub = this.shoppingListService.ingredientsChanged
// .subscribe(
//   (ingredients: Ingredient[]) => {

//   }
// );

this.loggingService.printLog('Hello from shoppinglistcopommennt ngonint')
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);

  // }  

  onEditItem(index: number) {
  //  this.shoppingListService.startedEditing.next(index);
  this.store.dispatch(new ShoppingListActions.StartEdit(index));  
  }

ngOnDestroy(): void {
  // this.igChangerSub.unsubscribe();
 }

}
