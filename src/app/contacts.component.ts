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
        <button (click)="edit(contactElem)">Edit</button>
        <button (click)="delete(contactElem)">Delete</button>
        <cnt-contact-form
            *ngIf="contactElem === selectedContact && editMode"
            (save)="modify($event)"
            (cancel)="editMode = false"
            [contact]="contactElem">
        </cnt-contact-form>
        <cnt-contact-detail
            *ngIf="contactElem === selectedContact && !editMode"
            [contact]="contactElem">
        </cnt-contact-detail>
      </li>
    </ul>
  `,
  styles: ['.selected { background: lightcoral }'
  ]
})
export class ContactsComponent implements OnInit {
  contactCounter: number = 3;
  editMode: boolean = false;

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
    this.editMode = false;
    if (this.selectedContact !== contact) {
      this.selectedContact = contact;
    } else {
      this.selectedContact = undefined;
    }
  }

  delete(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }

  edit(contact: Contact) {
    if (this.selectedContact !== contact) {
      this.select(contact);
    }
    this.editMode = !this.editMode;
  }

  modify(contact: Contact) {
    const index = this.contacts.findIndex(c => (c.id === contact.id))
    this.contacts.splice(index, 1, contact);
  }
}
