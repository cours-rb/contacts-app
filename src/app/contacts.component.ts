import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cnt-contacts',
  template: `
    <router-outlet></router-outlet>
  `
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
