import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`

  <a [routerLink]="['/']">Home</a>

  <a [routerLink]="['course']">Course</a>

  <router-outlet></router-outlet>
  `,

})
export class AppComponent {
  title = 'erontEnd';
}
