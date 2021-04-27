import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashComponent } from './dash/dash.component';
import { HeaderModule } from '../common/header/header.module';
import { ProfileTabModule } from '../common/profile-tab/profile-tab.module';
import { UpcomingEventsModule } from '../common/upcoming-events/upcoming-events.module';
import { CategoryModule } from '../common/category/category.module';

@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    HeaderModule,
    ProfileTabModule,
    UpcomingEventsModule,
    CategoryModule
  ]
})
export class DashboardsModule { }
