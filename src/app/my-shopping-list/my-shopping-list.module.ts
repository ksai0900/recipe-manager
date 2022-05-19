import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyShoppingListPage } from './my-shopping-list.page';
import { MyShoppingListPageRoutingModule } from './my-shopping-list-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyShoppingListPageRoutingModule
  ],
  declarations: [MyShoppingListPage]
})
export class MyShoppingListPageModule {}
