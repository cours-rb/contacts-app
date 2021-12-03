import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactListComponent} from "./contact-list.component";
import {ContactDisplayComponent} from "./contact-display.component";
import {ContactEditComponent} from "./contact-edit.component";
import {ContactResolver} from "./contact.resolver";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/contacts' },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contacts/new', component: ContactEditComponent },
    {
        path: 'contacts/:contactId',
        component: ContactDisplayComponent,
        resolve: {
            contact: ContactResolver
        }
    },
    {
        path: 'contacts/:contactId/edit',
        component: ContactEditComponent,
        resolve: {
            contact: ContactResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
