import { UserViewItem } from './../models/user.model';
import { Injectable } from '@angular/core';

import * as data from '../models/users.json';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users!: UserViewItem[];

  constructor() {
    if (!this.users) {
      const userData = (data as any).default as User[];
      this.users = userData.map((u) => {
        return {
          name: u.name,
          age: u.age,
          registeredDateString:
            u.registered.slice(8, 10) +
            u.registered.slice(4, 7) +
            '-' +
            u.registered.slice(0, 4) +
            ' ' +
            u.registered.slice(11, 20),
          email: u.email,
          balance: parseFloat(u.balance.replace(/,/g, '')),
        };
      });
    }
  }

  getUsers(): UserViewItem[] {
    return this.sortUsers(this.users.slice());
  }

  resetBalance() {
    this.users.forEach((u) => (u.balance = 0));
  }

  searchUser(keyword: string): UserViewItem[] {
    console.log(this.users.filter((u) => u.name.indexOf(keyword) > -1));
    return this.sortUsers(
      this.users.filter((u) => u.name.indexOf(keyword) > -1)
    );
  }

  sortUsers(users: UserViewItem[]): UserViewItem[] {
    return users.sort((a, b) => this.compare(a.name, b.name, true));
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
