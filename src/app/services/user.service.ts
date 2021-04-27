import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  helper = new JwtHelperService();
  constructor(private http: HttpClient,
    private router: Router) { }

  userLogin(data) {
    return this.http.post(`${environment.apiBaseUrl}/user/login`, data);
  }

  logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['/user']);
  }

  registerUser(data){
    return this.http.post(`${environment.apiBaseUrl}/user/register`, data);
  }

  getLoggedInUser(){
    let token = localStorage.getItem('Token');
    const decodedToken = this.helper.decodeToken(token);
    return decodedToken;
  }
}
