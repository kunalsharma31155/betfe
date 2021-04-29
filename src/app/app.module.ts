import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { AppComponent } from './app.component';

const modules = [
  HttpClientModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot({
    positionClass: 'toast-top-right'
  }),
  DashboardsModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...modules
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }