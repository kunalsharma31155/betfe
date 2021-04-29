import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signle-match',
  templateUrl: './signle-match.component.html',
  styleUrls: ['./signle-match.component.scss']
})
export class SignleMatchComponent implements OnInit {
  teams;
  team1;
  team2;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getTeams();
  }
  tt;
  getTeams(){
    this.teams = this.router.url.split("/").pop();
    this.tt = this.teams.replace(/%20/g, " ");
    this.team1 =this.tt.split(",")[0];
    this.team2 = this.tt.split(',').pop();
  }

}
