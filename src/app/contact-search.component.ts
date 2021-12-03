import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ContactsService } from "./contacts.service";
import {debounceTime, distinctUntilChanged, map, tap} from "rxjs/operators";

@Component({
  selector: 'cnt-contact-search',
  template: `
    <div>
      <label for="contact-search">Recherche</label>
      <input id="contact-search" [formControl]="searchInputCtrl">
    </div>
  `,
  styles: [
  ]
})
export class ContactSearchComponent implements OnInit {
  searchInputCtrl = new FormControl();

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.searchInputCtrl.valueChanges
        .pipe(
            map(x => x.trim()),
            debounceTime(500),
            distinctUntilChanged()
        )
        .subscribe(
            value => {
              this.contactService.search(value)
            }
        )
  }
}
