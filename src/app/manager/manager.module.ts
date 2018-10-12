import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { MaterialModule } from '../material.module';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';

/* export const managerModuleRoutes: Routes = [
  { path: '', component: ManagerHomeComponent }
]; */

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ManagerRoutingModule
  ],
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReceiptLookupComponent]
})
export class ManagerModule { }
