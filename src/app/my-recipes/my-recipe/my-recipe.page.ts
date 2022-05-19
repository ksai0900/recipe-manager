import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/interfaces/Recipe';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-my-recipe',
  templateUrl: 'my-recipe.page.html',
  styleUrls: ['my-recipe.page.scss']
})

export class MyRecipePage implements OnInit{
  recipe: Recipe;
  loading = false;

    constructor(private route: ActivatedRoute, private dataService: DataService) {

      this.dataService.getRecipes().subscribe(data => {
        console.log(data);
        this.convertData(data);
      });
  }
  ngOnInit(): void {

  }

  //gets the right recipe from the recipes array by using the id from the url path
  convertData(data){
    data.forEach(element => {
      if(element.id === this.route.snapshot.paramMap.get('id')){
        this.recipe = element;
      }
    });
    this.loading = true;
    console.log(this.recipe);
  }

}
