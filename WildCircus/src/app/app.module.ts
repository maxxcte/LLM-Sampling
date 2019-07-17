import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiServiceService } from './api-service.service';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AppRoutingModule } from './app-routing.module';
import { AllDatesComponent } from './all-dates/all-dates.component';
import { FormContactComponent } from './form-contact/form-contact.component';   // our custom service, see below
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminInterfaceComponent,
    AllDatesComponent,
    FormContactComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
   })

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
