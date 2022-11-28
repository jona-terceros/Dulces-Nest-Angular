import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DulcesComponent} from "./dulces/dulces.component";
import {DulcesDetailComponent} from "./dulce-detail/dulces-detail.component";
import {DulceSearchComponent} from "./dulce-search/dulce-search.component";

const routes: Routes = [
  {path: 'dulces',component: DulcesComponent},
  {path: 'detail/:id', component: DulcesDetailComponent },
  {path: 'search', component: DulceSearchComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
