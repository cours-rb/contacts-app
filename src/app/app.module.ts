import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactFormComponent } from './contact-form.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactSearchComponent } from './contact-search.component';
import { ContactListComponent } from './contact-list.component';
import { AppRoutingModule } from "./app-routing.module";
import { ContactDisplayComponent } from './contact-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactFormComponent,
    ContactSearchComponent,
    ContactListComponent,
    ContactDisplayComponent
  ],
    imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
