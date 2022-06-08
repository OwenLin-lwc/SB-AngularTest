import { Component } from '@angular/core';

import * as data from './models/users.json';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  users: User[] = (data as any).default;

  constructor() {
    console.log(this.users)
  }
}
