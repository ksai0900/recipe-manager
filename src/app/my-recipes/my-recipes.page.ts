import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../interfaces/Recipe';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: 'my-recipes.page.html',
  styleUrls: ['my-recipes.page.scss']
})

export class MyRecipesPage {
  recipes = [];
  recipesBackup = [];
  loading = false;
  searchVar: string;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.dataService.getRecipes().subscribe(data => {
      console.log(data);
      this.recipes = data;
      this.recipesBackup = data;
      this.loading = true;

    });
  }

  filter() {
    if (this.searchVar === '') {
      this.recipes = this.recipesBackup;
    }

    this.recipes = this.recipes.filter((f) => f.title.toLowerCase().includes(this.searchVar.toLowerCase()));
  }

  //navigates to
  navigateToSelectedRecipe(id: string) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  // opens a page to input new recipe data
  addRecipe() {
    this.router.navigate(['add-recipe'],  { relativeTo: this.route });
  }
}
