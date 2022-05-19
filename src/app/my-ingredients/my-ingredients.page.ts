import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-ingredients',
  templateUrl: 'my-ingredients.page.html',
  styleUrls: ['my-ingredients.page.scss']
})

export class MyIngredientsPage {
  ingredients = [];


    constructor(private dataService: DataService) {
      this.dataService.getIngredients().subscribe(data => {
        console.log(data);
        this.ingredients = data;
      });
  }

  openRecipe(recipe){
  }
}
