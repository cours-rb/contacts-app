import { Component } from '@angular/core';

@Component({
  selector: 'cnt-root',
  template: `
      <h1>
        Welcome to {{title}}!
      </h1>
      <cnt-contacts></cnt-contacts>
  `,
  styles: []
})
export class AppComponent {
  title = 'Contacts';
}
