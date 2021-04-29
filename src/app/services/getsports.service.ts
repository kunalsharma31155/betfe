import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetsportsService {
  constructor(private http: HttpClient,
    private router: Router) { }


    getMatchList(sport){
      console.log(sport);
      return this.http.post(`${environment.apiBaseUrl}/sports/get-matches`,{
        params: {
          apiKey: '3c3cbdc1878087db167a56ad748abcec',
          sport: sport,
          region:'us'
        }
      });
    }
}
