import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { HeaderModule } from '../common/header/header.module';
import { ProfileTabModule } from '../common/profile-tab/profile-tab.module';

import { DashComponent } from './dash/dash.component';
import { UpcomingEventsModule } from '../common/upcoming-events/upcoming-events.module';
import { CategoryComponent } from '../common/category/category.component';
import { ManyMatchesComponent } from '../pages/many-matches/many-matches.component';
import { SignleMatchComponent } from '../pages/signle-match/signle-match.component';

@NgModule({
  declarations: [SignleMatchComponent,ManyMatchesComponent ,DashComponent,CategoryComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    HeaderModule,
    ProfileTabModule,
    UpcomingEventsModule,
  ],
  exports:[
    DashComponent
  ]
})
export class DashboardsModule { }
