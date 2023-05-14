import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoComponent } from './casino/casino.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: 'category/:name', component: CategoryComponent },
  { path: '**', component: CasinoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
