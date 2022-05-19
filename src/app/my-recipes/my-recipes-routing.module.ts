import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRecipePageModule } from './my-recipe/my-recipe.module';
import { MyRecipePage } from './my-recipe/my-recipe.page';
import { MyRecipesPage } from './my-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecipesPage

  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./add-recipe/add-recipe.module').then(m => m.AddRecipePageModule)
  },
  {
    path: ':id',
    children: [
      {

        path: '',
        loadChildren: () => import('../my-recipes/my-recipe/my-recipe.module').then(m => m.MyRecipePageModule)

      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecipesPageRoutingModule { }
