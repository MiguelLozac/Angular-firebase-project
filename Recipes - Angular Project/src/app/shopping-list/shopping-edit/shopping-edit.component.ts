import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.module';
import * as ShoppinglistActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor( 
              private store: Store<fromApp.AppState>
              ) { }

  ngOnInit()  {

    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true; 
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });
   
  }

  onSubmit(form: NgForm) {
   const value = form.value;
   const newIngredient = new Ingredient(value.name, value.amount);
   if (this.editMode) {
   //  this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
        this.store.dispatch(new ShoppinglistActions.UpdateIngredient(newIngredient)
      );
  } else {
    // this.shoppingListService.addIngredient(newIngredient);
    this.store.dispatch(new ShoppinglistActions.AddIngredient(newIngredient));
  }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
   // this.shoppingListService.deleteIngredient(this.editedItemIndex);
   this.store.dispatch(new ShoppinglistActions.DeleteIngredient()
   );
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppinglistActions.StopEdit());
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppinglistActions.StopEdit());
  }

}
