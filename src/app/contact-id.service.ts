import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactIdService {
  previousId = 4; // TODO Find a better Id

  constructor() { }

  getNextId(): number {
    this.previousId++;
    return this.previousId;
  }
}
