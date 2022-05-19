import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'my-recipes',
        loadChildren: () => import('../my-recipes/my-recipes.module').then(m => m.MyRecipesPageModule)
      },
      {
        path: 'my-ingredients',
        loadChildren: () => import('../my-ingredients/my-ingredients.module').then(m => m.MyIngredientsPageModule)
      },
      {
        path: 'my-shopping-list',
        loadChildren: () => import('../my-shopping-list/my-shopping-list.module').then(m => m.MyShoppingListPageModule)
      },
      {
        path: '',
        redirectTo: '/my-recipes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/my-recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
