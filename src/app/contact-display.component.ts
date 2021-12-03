import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Contact } from "./contact.model";
import { ContactsService } from "./contacts.service";

@Component({
  selector: 'cnt-contact-display',
  template: `
    <cnt-contact-detail [contact]="contact"></cnt-contact-detail>
    <button (click)="backToList()">Back</button>
  `,
  styles: [
  ]
})
export class ContactDisplayComponent implements OnInit {
  contact?: Contact;

  constructor(route: ActivatedRoute, contactService: ContactsService, private router: Router) {
    route.paramMap.subscribe(
        (paramMap: ParamMap) => {
          const contactId = paramMap.get('contactId');

          if (contactId) {
              contactService.get(contactId)
                  .subscribe(contact => this.contact = contact)
          }
        }
    )
  }

  ngOnInit(): void {
  }

  backToList() {
      this.router.navigate(['/contacts']);
  }
}
