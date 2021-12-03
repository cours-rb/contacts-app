import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, ParamMap, Router} from "@angular/router";
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.model";

@Component({
  selector: 'cnt-contact-edit',
  template: `
    <cnt-contact-form [contact]="contact" (cancel)="backToList()" (save)="save($event)">
    </cnt-contact-form>
  `,
  styles: [
  ]
})
export class ContactEditComponent implements OnInit {
  contact?: Contact;
  private createMode: boolean = false;

  constructor(route: ActivatedRoute, private contactService: ContactsService, private router: Router) {
    route.data.subscribe(
        (data: Data) => {
          if (data.contact) {
            this.contact = data.contact;
          } else {
            this.createMode = true;
          }
        }
    );
  }

  ngOnInit(): void {
  }

  backToList() {
    this.router.navigate(['/contacts']);
  }

  save(contact: Contact) {
    if (this.createMode) {
      this.contactService.add(contact)
    } else {
      this.contactService.modify(contact);
    }

    this.backToList();
  }
}
