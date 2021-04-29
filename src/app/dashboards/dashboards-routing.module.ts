import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from '../common/category/category.component';
import { ManyMatchesComponent } from '../pages/many-matches/many-matches.component';
import { SignleMatchComponent } from '../pages/signle-match/signle-match.component';

const routes: Routes = [
  {
    path : '',
    component : CategoryComponent
  },
  {
    path: 'matches/:game',
    component : ManyMatchesComponent
  },
  {
    path: 'match/:teams',
    component : SignleMatchComponent
  },
  {
    path : '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
