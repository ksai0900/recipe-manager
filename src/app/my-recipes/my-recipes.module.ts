import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyRecipesPage } from './my-recipes.page';


import { MyRecipesPageRoutingModule } from './my-recipes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    MyRecipesPageRoutingModule
  ],
  declarations: [MyRecipesPage]
})
export class MyRecipesPageModule {}
