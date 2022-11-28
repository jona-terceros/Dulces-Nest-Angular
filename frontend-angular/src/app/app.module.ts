import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DulcesComponent } from './dulces/dulces.component';
import { DulcesDetailComponent } from './dulce-detail/dulces-detail.component';
import { DulceSearchComponent } from './dulce-search/dulce-search.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DulcesComponent,
    DulcesDetailComponent,
    DulceSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
