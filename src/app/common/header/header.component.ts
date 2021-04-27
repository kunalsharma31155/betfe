import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data;
  constructor(public user : UserService) { }

  ngOnInit() {
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails(){
    this.data = this.user.getLoggedInUser();
  }

  logout(){
    this.user.logout();
  }
}
