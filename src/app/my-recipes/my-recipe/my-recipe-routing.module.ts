import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRecipePage } from './my-recipe.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecipePage,

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecipePageRoutingModule { }
