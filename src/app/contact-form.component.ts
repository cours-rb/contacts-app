import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from "./contact.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'cnt-contact-form',
  template: `
    <form (ngSubmit)="submit()" [formGroup]="contactForm">
      <div>
        <label>First Name: </label><input formControlName="firstName">
      </div>
      <div>
        <label>Last Name: </label><input formControlName="lastName">
      </div>
      <div>
        <label>Email: </label><input formControlName="email">
      </div>
      <input type="submit" value="Save">
      <input type="button" value="Cancel">
    </form>
  `,
  styles: []
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
  };
  @Output() save = new EventEmitter<Contact>();
  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl()
    });
  }

  ngOnInit(): void {
    this.contactForm.get('firstName')?.setValue(this.contact?.firstName);
    this.contactForm.get('lastName')?.setValue(this.contact?.lastName);
    this.contactForm.get('email')?.setValue(this.contact?.email);
  }

  submit() {
    const contactToSave: Contact = {
      id: this.contact.id, ...this.contactForm.value
    };

    this.save.emit(contactToSave);
  }
}
