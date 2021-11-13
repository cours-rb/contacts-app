import { Component, OnInit } from '@angular/core';
import { Contact } from "./contact.model";

@Component({
  selector: 'cnt-contacts',
  template: `
    <p>Number of contacts: {{ contacts.length }}</p>
    <ul>
      <li *ngFor="let contactElem of contacts">
        <cnt-contact
            [class.selected]="contactElem === selectedContact"
            (click)="select(contactElem)"
            [contact]="contactElem">
        </cnt-contact>
        <cnt-contact-detail
            *ngIf="contactElem === selectedContact"
            [contact]="contactElem"
            (delete)="deleteContact(contactElem)">
        </cnt-contact-detail>
      </li>
    </ul>
  `,
  styles: ['.selected { background: red }'
  ]
})
export class ContactsComponent implements OnInit {
  contactCounter: number = 3;

  selectedContact?: Contact;

  contacts: Contact[] = [{
    email: "contact1@test.com",
    firstName: "contact1",
    id: 1,
    lastName: "contact1"
  }, {
    email: "contact2@test.com",
    firstName: "contact2",
    id: 2,
    lastName: "contact2"
  }, {
    email: "contact3@test.com",
    firstName: "contact3",
    id: 3,
    lastName: "contact3"
  }];

  constructor() { }

  ngOnInit(): void {
  }

  select(contact: Contact) {
    if (this.selectedContact !== contact) {
      this.selectedContact = contact;
    } else {
      this.selectedContact = undefined;
    }
  }

  deleteContact(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}
