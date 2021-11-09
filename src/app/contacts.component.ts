import { Component, OnInit } from '@angular/core';
import { Contact } from "./contact.model";

@Component({
  selector: 'cnt-contacts',
  template: `
    <p>Number of contacts: {{ contactCounter }}</p>
    <ul>
      <li *ngFor="let contactElem of contacts">
        <cnt-contact [contact]="contactElem"></cnt-contact>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ContactsComponent implements OnInit {
  contactCounter: number = 3;

  contacts = [{
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

}
