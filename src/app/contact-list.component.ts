import { Component, OnInit } from '@angular/core';
import { Contact } from "./contact.model";
import { Observable } from "rxjs";
import { ContactsService } from "./contacts.service";

@Component({
  selector: 'cnt-contact-list',
  template: `
    <cnt-contact-search></cnt-contact-search>
    <p>Number of contacts: {{ (contacts$ | async)?.length }}</p>
    <ul>
      <li *ngFor="let contactElem of contacts$ | async">
        <cnt-contact
            [routerLink]="['/contacts', contactElem.id]"
            [contact]="contactElem">
        </cnt-contact>
        <button (click)="edit(contactElem)">Edit</button>
        <button (click)="delete(contactElem)">Delete</button>
      </li>
    </ul>
  `,
  styles: ['.selected { background: lightcoral }']
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Contact[]> = this.contactsService.getList();

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
  }

  delete(contact: Contact) {
    this.contactsService.delete(contact);
  }

  edit(contact: Contact) {
  }
}
