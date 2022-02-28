import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: Router,
    private authservice: AuthService,
    private activateRoute: ActivatedRoute
  ) {}
  // login = true;
  show = false;
  users = [
    {
      usid: 'shubham',
      pass: '12345',
    },
  ];
  string = '';

  email = '';
  pass = '';
  closeAlert() {
    this.show = false;
  }
  addToUsers() {
    console.log(this.email, this.pass);
    this.show = true;
    this.users.push({ usid: this.email, pass: this.pass });
    // this.login = true;
    this.email = '';
    this.pass = '';
    this.string = 'User registerd successfully';
    console.log(this.users);
  }
  checkLogin() {
    // let data = this.users.find((item) => item.usid === this.email);
    // this.route.navigate(['/loginQuery'], {
    //   queryParams: { uid: this.email, pass: this.pass },
    // });
    // this.checkLogged();
    this.authservice.doLogin(this.email, this.pass).subscribe(
      (data) => {
        // if (data.length) {
        //   let item = data[0];
        //   if (item.password === this.pass) {
        this.authservice.setLogin(true);
        this.authservice.setlocalStorage({ loggedIn: true, ...data[0] });
        this.route.navigate(['/']);
        // }
        // }
      },
      (err) => {}
    );
    // if (this.authservice.checkIfUserLoggedIn()) {
    //   this.route.navigate(['/empTable/true']);
    //   return;
    // }

    // this.string = 'Email or password is wrong';
    // this.show = true;
    // this.email = '';
    // this.pass = '';
  }
  checkLogged() {
    this.activateRoute.params.subscribe((params) => {
      let { uid, pass } = params;
      console.log(uid, pass, 'HJJJJJJJJJJJJJjjj', params);
      // this.authservice.login(uid, pass);
      // if (this.authservice.checkIfUserLoggedIn()) {
      //   this.route.navigate(['/empTable/true']);
      //   return;
      // }
    });
  }
  ngOnInit(): void {
    // this.checkLogged();
  }
  change() {
    // this.login = !this.login;
  }
}
