import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventsComponent } from './upcoming-events.component';



@NgModule({
  declarations: [UpcomingEventsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UpcomingEventsComponent
  ]
})
export class UpcomingEventsModule { }
