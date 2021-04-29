import { Component, OnInit } from '@angular/core';

import { GetsportsService } from '../../services/getsports.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  bmatches;
  smatches;

  constructor(private getSports : GetsportsService) { }

  ngOnInit() {
    this.getBMatchesData();
    this.getSMatchesData();
  }
  getBMatchesData(){
    this.getSports.getMatchList('basketball_nba').subscribe((data:any)=>{
      this.bmatches = data.matches.data;
      console.log(this.bmatches);
    },err=>{
      console.log(err);
    })
  }

  getSMatchesData(){
    this.getSports.getMatchList('soccer_epl').subscribe((data:any)=>{
      this.smatches = data.matches.data;
      console.log(this.smatches);
    },err=>{
      console.log(err);
    })
  }
}
