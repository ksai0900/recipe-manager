import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyIngredientsPage } from './my-ingredients.page';

import { MyIngredientsPageRoutingModule } from './my-ingredients-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyIngredientsPageRoutingModule
  ],
  declarations: [MyIngredientsPage]
})
export class MyIngredientsPageModule {}
