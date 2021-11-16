import { Injectable } from '@angular/core';
import { Contact } from "./contact.model";
import {ContactIdService} from "./contact-id.service";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
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

  constructor(private contactIdService: ContactIdService) { }

  createContact(): Contact {
    return {
      id: this.contactIdService.getNextId(), // TODO Improve this
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  getList(): Contact[] {
    return this.contacts;
  }

  add(contact: Contact): void {
    this.contacts.push(contact);
  }

  modify(contact: Contact): void {
    const index = this.contacts.findIndex(c => (c.id === contact.id))
    this.contacts.splice(index, 1, contact);
  }

  delete(contact: Contact): void {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}
