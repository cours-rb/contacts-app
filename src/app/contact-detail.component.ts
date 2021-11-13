import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "./contact.model";

@Component({
  selector: 'cnt-contact-detail',
  template: `
    <div>
      <div>FirstName: {{ contact?.firstName }}</div>
      <div>LastName: {{ contact?.lastName }}</div>
      <div>Email: {{ contact?.email}}</div>
    </div>
    <button (click)="deleteContact()">Delete</button>
  `,
  styles: [
  ]
})
export class ContactDetailComponent implements OnInit {
  @Input() contact?: Contact;
  @Output() delete = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteContact() {
    this.delete.emit(this.contact);
  }
}
