import { Component, ViewChild } from '@angular/core';

import { UserService } from './services/user.service';
import { UserViewItem } from './models/user.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  displayedColumns: string[] = [
    'name',
    'age',
    'registeredDateString',
    'email',
    'balance',
  ];
  dataSource!: MatTableDataSource<UserViewItem>;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource(this.userService.getUsers());
  }

  onSearch(keyword: string) {
    this.dataSource = keyword
      ? new MatTableDataSource(this.userService.searchUser(keyword))
      : new MatTableDataSource(this.userService.getUsers());
  }
}
