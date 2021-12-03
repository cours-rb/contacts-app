import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from "./contact-list.component";
import {ContactDisplayComponent} from "./contact-display.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/contacts' },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contacts/:contactId', component: ContactDisplayComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
