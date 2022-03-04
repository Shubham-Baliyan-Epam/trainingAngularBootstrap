import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  user: any;
  name!: string;
  password: string = '';
  email!: string;

  show = false;

  string = '';

  closeAlert() {
    this.show = false;
  }
  ngOnInit(): void {
    this.user = this.authService.getUser();
    console.log(this.user);
    this.name = this.user.name;
    this.email = this.user.email;
  }
  submitForm(e: Event) {
    e.preventDefault();

    let data: { name: string; password?: string } = {
      name: this.name,
    };
    if (this.password.length) {
      data['password'] = this.password;
    }
    this.authService.updateUser(this.user.id, data).subscribe(
      (res) => {
        console.log(res);
        this.show = true;

        this.string = 'User Updated Successfully';
        this.authService.logout();
        this.authService.setLogin(false);
        this.router.navigate(['/login']);
      },
      (err) => {
        this.show = true;
        console.log(err);
        this.string = 'Something went wrong.Try again later!!';
      }
    );
  }
}
