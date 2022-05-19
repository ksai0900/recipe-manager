import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyIngredientsPage } from './my-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: MyIngredientsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyIngredientsPageRoutingModule {}
