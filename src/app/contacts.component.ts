import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-contacts',
  template: `
    <cnt-contact-list></cnt-contact-list>
  `
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
