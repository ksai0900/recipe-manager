import { Component } from '@angular/core';
import { Recipe } from '../interfaces/Recipe';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-shopping-list',
  templateUrl: 'my-shopping-list.page.html',
  styleUrls: ['my-shopping-list.page.scss']
})

export class MyShoppingListPage {
  shoppingList = [];


    constructor(private dataService: DataService) {
      this.dataService.getShoppingList().subscribe(data => {
        console.log(data);
        this.shoppingList = data;
      });
  }

  openRecipe(recipe){
  }
}
