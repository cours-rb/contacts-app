import {Component, Input, OnInit} from '@angular/core';
import { Contact } from "./contact.model";

@Component({
  selector: 'cnt-contact',
  template: `
    {{ contact?.firstName }}
    {{ contact?.lastName }}
    {{ contact?.email }}
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  @Input() contact?: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
