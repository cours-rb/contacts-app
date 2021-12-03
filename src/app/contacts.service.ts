import { Injectable } from '@angular/core';
import { Contact } from "./contact.model";
import { ContactIdService } from "./contact-id.service";
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);
  contactApiUrl:string = environment.apiUrl + 'contacts/';

  constructor(private contactIdService: ContactIdService, private http: HttpClient) {
    this.http.get<Contact[]>(this.contactApiUrl)
        .subscribe((contacts) => {
          console.log(contacts);
          this.contacts$.next(contacts);
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

  get(id: string): Observable<Contact> {
      return this.http.get<Contact>(this.contactApiUrl + id);
  }

  getList(): Observable<Contact[]> {
    return this.contacts$;
  }

  add(contact: Contact): void {
    this.http.post(this.contactApiUrl, contact)
        .subscribe((data) => {
          console.log(data);
          const contacts = this.contacts$.getValue();

          contacts.push(contact)
          this.contacts$.next(contacts);
        });
  }

  modify(contact: Contact): void {
    this.http.put(this.contactApiUrl + contact.id, contact)
        .subscribe(data => {
          console.log(data);
          const contacts = this.contacts$.getValue();

          const index = contacts.findIndex(c => (c.id === contact.id))
          contacts.splice(index, 1, contact);

          this.contacts$.next(contacts);
        })
  }

  delete(contact: Contact): void {
    this.http.delete(this.contactApiUrl + contact.id)
        .subscribe(data => {
          console.log(data);
            const contacts = this.contacts$.getValue();

            contacts.splice(contacts.indexOf(contact), 1);
            this.contacts$.next(contacts);
        })
  }

  search(query: string) {
      this.http.get<Contact[]>(
          this.contactApiUrl,
          { params: { q: query }}
      ).subscribe(
          contacts => {
              this.contacts$.next(contacts);
          }
      )
  }
}
