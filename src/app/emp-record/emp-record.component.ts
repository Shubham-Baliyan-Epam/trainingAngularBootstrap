import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { Emp } from '../interfaces';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-emp-record',
  templateUrl: './emp-record.component.html',
  styleUrls: ['./emp-record.component.css'],
})
export class EmpRecordComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    // this.userService.getUsers();

    console.log('hi');
  }
  addForm: boolean = true;
  edit: boolean = false;
  editName = '';
  login!: boolean;
  editLocation = '';
  editDesignation = '';
  editUsername!: string;
  editEmail!: string;
  editId: number = -1;
  emp!: Observable<User[]>;
  readme() {
    console.log(this.emp);
  }
  changeForm() {
    this.resetData();

    this.addForm = true;
  }
  deleteRecord(id: number) {
    // console.log(id);
    this.userService.deleteUser(id);
    // this.emp = this.emp.filter((item) => item.id !== id);
  }
  editRecord(id: number) {
    this.addForm = false;
    this.editId = id;
    this.userService.getUser(id).subscribe(
      (data) => {
        this.editName = data.name;
        this.editDesignation = data.designation;
        this.editEmail = data.email;
        this.editLocation = data.address;
        this.editUsername = data.username;
      },
      (err) => console.log('user not found')
    );
    //  let record =this.userService.
  }
  addProduct() {
    let id = Math.floor(Math.random() * 10 + 4);
    let data = {
      id,
      name: this.editName,
      email: this.editEmail,
      username: this.editUsername,
      address: this.editLocation,
      designation: this.editDesignation,
    };
    this.userService.createUser(data);
    this.resetData();
  }
  onEditSubmit() {
    let data: User = {
      name: this.editName,
      id: this.editId,
      username: this.editUsername,
      designation: this.editDesignation,
      address: this.editLocation,
      email: this.editEmail,
    };
    this.userService.updateUser(data);
    this.resetData();
  }
  resetData() {
    this.editId = -1;
    this.editUsername = '';
    this.editName = '';
    this.editEmail = '';
    this.editDesignation = '';
    this.editLocation = '';
  }
  ngOnInit(): void {
    this.emp = this.userService.users;
    this.userService.getUsers();
    this.route.params.subscribe((params) => {
      this.login = params['login'];
      if (typeof this.login !== 'boolean' && !this.login) {
        console.log('lol');
        this.router.navigate(['/login']);
      }
      // if (!this.login) {
      //   this.router.navigate(['/login']);
      // }
      console.log(this.login, params);
    });
  }
}
