import { Injectable } from '@angular/core';
import { Contact } from "./contact.model";
import { ContactIdService } from "./contact-id.service";
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [];
  contactApiUrl:string = environment.apiUrl + 'contacts/';

  constructor(private contactIdService: ContactIdService, private http: HttpClient) {
    this.http.get<Contact[]>(this.contactApiUrl)
        .subscribe((contacts) => {
          console.log(contacts);
          // IMPORTANT: Do not replace this.contacts with new data.
          // If this.contacts reference is replaced, change detection won't work
          this.contacts.push(...contacts);
        });
  }

  createContact(): Contact {
    return {
      id: this.contactIdService.getNextId(),
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  getList(): Contact[] {
    return this.contacts;
  }

  add(contact: Contact): void {
    this.http.post(this.contactApiUrl, contact)
        .subscribe((data) => {
          console.log(data);
          this.contacts.push(contact);
        });
  }

  modify(contact: Contact): void {
    const index = this.contacts.findIndex(c => (c.id === contact.id))
    this.contacts.splice(index, 1, contact);
  }

  delete(contact: Contact): void {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}
