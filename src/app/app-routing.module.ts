import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from "./contact-list.component";
import {ContactDisplayComponent} from "./contact-display.component";
import {ContactEditComponent} from "./contact-edit.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/contacts' },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contacts/new', component: ContactEditComponent },
    { path: 'contacts/:contactId', component: ContactDisplayComponent },
    { path: 'contacts/:contactId/edit', component: ContactEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
