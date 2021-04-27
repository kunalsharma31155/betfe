import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileTabComponent } from './profile-tab.component';



@NgModule({
  declarations: [ProfileTabComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileTabComponent
  ]
})
export class ProfileTabModule { }
