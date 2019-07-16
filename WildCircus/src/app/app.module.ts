import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiServiceService } from './api-service.service';   // our custom service, see below

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
