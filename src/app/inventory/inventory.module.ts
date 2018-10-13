import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';


@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule
  ],
  declarations: [InventoryComponent, InventoryHomeComponent, CategoriesComponent, ProductsComponent, StockEntryComponent]
})
export class InventoryModule { }
