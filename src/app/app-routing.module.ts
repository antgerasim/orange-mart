import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
//import { ManagerHomeComponent } from "./manager/manager-home/manager-home.component";
//import { managerModuleRoutes } from "./manager/manager.module";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  /*   { path: 'manager', children: managerModuleRoutes },
  { path: "manager", component: ManagerHomeComponent }, */
  { path: "manager", loadChildren: "./manager/manager.module#ManagerModule" }, //lazy-load
  { path: "user", loadChildren: "./user/user.module#UserModule" }, //lazy-load
  { path: "pos", loadChildren: "./pos/pos.module#PosModule" }, // lazy-load
  { path: 'inventory', loadChildren: "./inventory/inventory.module#InventoryModule" },
  { path: "**", component: PageNotFoundComponent }, // This way, any route that is not matched will be directed to the PageNotFoundComponent. Ensure to be the last route
  { path: 'login', component: LoginComponent},
  {path: 'login/:redirectUrl', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
