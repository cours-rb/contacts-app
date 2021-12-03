import { Component, OnInit } from '@angular/core';
import { Contact } from "./contact.model";
import { ContactsService } from "./contacts.service";
import { Observable } from "rxjs";

@Component({
  selector: 'cnt-contacts',
  template: `
    <cnt-contact-search></cnt-contact-search>
    <p>Number of contacts: {{ (contacts$ | async)?.length }}</p>
    <ul>
      <li *ngFor="let contactElem of contacts$ | async">
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
    <input type="button" value="Add Contact" (click)="displayAddForm = true">
    <cnt-contact-form
        *ngIf="displayAddForm"
        (cancel)="displayAddForm = false"
        (save)="add($event)"
    >
    </cnt-contact-form>
  `,
  styles: ['.selected { background: lightcoral }'
  ]
})
export class ContactsComponent implements OnInit {
  editMode: boolean = false;
  displayAddForm:boolean = false;

  selectedContact?: Contact;
  contacts$: Observable<Contact[]> = this.contactsService.getList();

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {}

  select(contact: Contact) {
    this.editMode = false;
    if (this.selectedContact !== contact) {
      this.selectedContact = contact;
    } else {
      this.selectedContact = undefined;
    }
  }

  delete(contact: Contact) {
    this.contactsService.delete(contact);
  }

  edit(contact: Contact) {
    if (this.selectedContact !== contact) {
      this.select(contact);
    }
    this.editMode = !this.editMode;
  }

  modify(contact: Contact) {
    this.contactsService.modify(contact);
  }

  add(contact: Contact) {
    this.contactsService.add(contact);
    this.displayAddForm = false;
  }
}
