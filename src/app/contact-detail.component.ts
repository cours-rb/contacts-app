import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "./contact.model";

@Component({
  selector: 'cnt-contact-detail',
  template: `
    <div>
      <div>FirstName: {{ contact?.firstName }}</div>
      <div>LastName: {{ contact?.lastName }}</div>
      <div>Email: {{ contact?.email}}</div>
    </div>
  `,
  styles: [
  ]
})
export class ContactDetailComponent implements OnInit {
  @Input() contact?: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
