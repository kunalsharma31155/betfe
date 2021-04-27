import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.scss']
})
export class ProfileTabComponent implements OnInit {
  data;
  constructor(public user : UserService) { }

  ngOnInit() {
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails(){
    this.data = this.user.getLoggedInUser();
  }

}
