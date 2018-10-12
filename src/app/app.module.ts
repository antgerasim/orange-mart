import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
// User Modules
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
//import { ManagerModule } from "./manager/manager.module"; results in error Uncaught (in promise): TypeError: undefined is not a function
import { InventoryModule } from "./inventory/inventory.module";
import { PosModule } from "./pos/pos.module";
//import { UserModule } from "./user/user.module"; Error: Cannot find module 'app/user/user.module'
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    //ManagerModule,
    InventoryModule,
    PosModule,
    FlexLayoutModule
    //UserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// weiter mit 54%
