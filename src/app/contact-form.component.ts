import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from "./contact.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ContactsService } from "./contacts.service";
import {ContactIdService} from "./contact-id.service";

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
      <input type="submit" [disabled]="contactForm.invalid" value="Save">
      <input type="button" (click)="cancelForm()" value="Cancel">
    </form>
  `,
  styles: ['input.ng-invalid { background: lightcoral }']
})
export class ContactFormComponent implements OnInit {
  @Input() contact?: Contact;
  @Output() save = new EventEmitter<Contact>();
  @Output() cancel = new EventEmitter();
  contactForm: FormGroup;

  constructor(private contactIdService: ContactIdService) {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.contactForm.get('firstName')?.setValue(this.contact?.firstName);
    this.contactForm.get('lastName')?.setValue(this.contact?.lastName);
    this.contactForm.get('email')?.setValue(this.contact?.email);
  }

  submit() {
    const id = this.contact?.id || this.contactIdService.getNextId();

    const contactToSave: Contact = {
      id: id, ...this.contactForm.value
    };

    this.save.emit(contactToSave);
  }

  cancelForm() {
    this.cancel.emit();
  }
}
