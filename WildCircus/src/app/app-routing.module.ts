import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { HomeComponent } from './home/home.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { AllDatesComponent } from './all-dates/all-dates.component';

export const appRouteList: Routes = [
    {
        path: 'admin',
        component: AdminInterfaceComponent
    },
    { path: '', component: HomeComponent },
    { path: 'contact', component: FormContactComponent },
    { path: 'show', component: AllDatesComponent }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})

export class AppRoutingModule { }
