import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ContactsService} from "./contacts.service";
import {Contact} from "./contact.model";

@Component({
  selector: 'cnt-contact-edit',
  template: `
    <cnt-contact-form [contact]="contact" *ngIf="contact" (cancel)="backToList()" (save)="save($event)">
    </cnt-contact-form>
  `,
  styles: [
  ]
})
export class ContactEditComponent implements OnInit {
  contact?: Contact;

  constructor(route: ActivatedRoute, private contactService: ContactsService, private router: Router) {
    route.paramMap.subscribe(
        (paramMap: ParamMap) => {
          const contactId = paramMap.get('contactId');

          if (contactId) {
            contactService.get(contactId)
                .subscribe(
                    contact => this.contact = contact,
                    () => router.navigate(['/contacts'])
                )
          }
        }
    )
  }

  ngOnInit(): void {
  }

  backToList() {
    this.router.navigate(['/contacts']);
  }

  save(contact: Contact) {
    this.contactService.modify(contact);

    this.backToList();
  }
}
