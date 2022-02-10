import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from '../interfaces';

@Component({
  selector: 'app-emp-record',
  templateUrl: './emp-record.component.html',
  styleUrls: ['./emp-record.component.css'],
})
export class EmpRecordComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('hi');
  }
  edit: boolean = false;
  editName = '';
  login!: boolean;
  editLocation = '';
  editDesignation = '';
  editId: number = -1;
  emp: Emp[] = [
    { name: 'shubham', location: 'Up', designation: 'Junior', id: 1 },
    { name: 'Vivek', location: 'Up', designation: 'Lawyer', id: 2 },
    { name: 'Ravi', location: 'Up', designation: 'Govt Employee', id: 3 },
    { name: 'Piyush', location: 'Up', designation: '.net Developer', id: 4 },
  ];

  deleteRecord(id: number) {
    console.log(id);
    this.emp = this.emp.filter((item) => item.id !== id);
  }
  editRecord(id: number) {
    let record = this.emp.find((item) => item.id === id);
    if (record) {
      this.editName = record.name;
      this.editLocation = record.location;
      this.editDesignation = record.designation;
      this.editId = record.id;
      this.edit = true;
    }
  }
  editRecordDone() {
    if (this.editId !== -1) {
      let index = this.emp.findIndex((item) => item.id === this.editId);
      this.emp[index] = {
        id: this.editId,
        name: this.editName,
        designation: this.editDesignation,
        location: this.editLocation,
      };
    }
    this.editId = -1;
    this.edit = false;
    this.editDesignation = '';
    this.editLocation = '';
    this.editName = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.login = params['login'];
      if (typeof this.login === 'boolean' && this.login) {
        console.log('lol');
        this.router.navigate(['/login']);
      }
      console.log(this.login, params);
    });
  }
}
