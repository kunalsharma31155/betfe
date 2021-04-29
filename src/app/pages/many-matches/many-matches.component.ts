import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { GetsportsService } from '../../services/getsports.service';

@Component({
  selector: 'app-many-matches',
  templateUrl: './many-matches.component.html',
  styleUrls: ['./many-matches.component.scss']
})
export class ManyMatchesComponent implements OnInit {
  matches;
  sport;
  game;
  constructor(private getSports : GetsportsService,
    private router: Router) { }

  ngOnInit() {
    this.getMatchesData();
  }

  getMatchesData(){
    this.sport = this.router.url.split("/").pop();
    this.getSports.getMatchList(this.sport).subscribe((data:any)=>{
      this.matches = data.matches.data;
    },err=>{
      console.log(err);
    })
  }

  changeRoute(url){
    console.log(url);
    this.router.navigate([url]);
    if(url == "/matches/soccer_epl"){
      this.sport = "soccer_epl";
    }else{
      this.sport = "basketball_nba";
    }
    this.getSports.getMatchList(this.sport).subscribe((data:any)=>{
      this.matches = data.matches.data;
    },err=>{
      console.log(err);
    })
  }
}
