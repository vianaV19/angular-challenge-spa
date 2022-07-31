import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';
import { User } from '../Model/User';

@Component({
  selector: 'challenge-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  _users!: User[];

  filter!: string;

  filteredList!: User[] ;

  constructor(userService: UserService) {
    this._users = userService.retrieveAll();
  }

  ngOnInit(): void {
    this.filteredList = this._users;
  }

  allUsersCheckbox() {
    let allUsers = document.getElementsByName('all-users')[0] as HTMLInputElement

    let usersChk = document.getElementsByName('user');

    if (allUsers.checked) {
      for (let i = 0; i < usersChk.length; i++) {
        let check = usersChk[i] as HTMLInputElement

        check.checked = true
      }
    } else {
      for (let i = 0; i < usersChk.length; i++) {
        let check = usersChk[i] as HTMLInputElement

        check.checked = false
      }
    }
  }

  set users(value: User[]) {
    this._users = value
  }

  get users() {
    return this._users;
  }

  search() {
    this.filteredList = this.users.filter(e => e.name.indexOf(this.filter) != -1)
  }

}


