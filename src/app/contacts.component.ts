import { Component, OnInit } from '@angular/core';
import { Contact } from "./contact.model";

@Component({
  selector: 'cnt-contacts',
  template: `
    <p>Number of contacts: {{ contactCounter }}</p>
    <ul>
      <li>
        {{ contact1.firstName }}
        {{ contact1.lastName }}
        {{ contact1.email }}
      </li>
      <li>
        {{ contact2.firstName }}
        {{ contact2.lastName }}
        {{ contact2.email }}
      </li>
      <li>
        {{ contact3.firstName }}
        {{ contact3.lastName }}
        {{ contact3.email }}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {
  contactCounter = 3;

  contact1: Contact = {
    email: "contact1@test.com",
    firstName: "contact1",
    id: 1,
    lastName: "contact1"
  }
  contact2: Contact = {
    email: "contact2@test.com",
    firstName: "contact2",
    id: 2,
    lastName: "contact2"
  }
  contact3: Contact = {
    email: "contact3@test.com",
    firstName: "contact3",
    id: 3,
    lastName: "contact3"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
