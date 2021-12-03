import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Contact } from "./contact.model";
import {ContactsService} from "./contacts.service";

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact> {
  constructor(private contactService: ContactsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    const id = route.paramMap.get('contactId');

    if (id) {
      return this.contactService.get(id);
    } else {
      return EMPTY;
    }
  }
}
