import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyRecipePage } from './my-recipe.page';
import { MyRecipePageRoutingModule } from './my-recipe-routing.module';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    MyRecipePageRoutingModule
  ],
  declarations: [MyRecipePage]
})
export class MyRecipePageModule {}
