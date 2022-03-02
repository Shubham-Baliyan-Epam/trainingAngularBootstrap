import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private route: Router,

    private fb: FormBuilder,

    private authservice: AuthService,
    private activateRoute: ActivatedRoute
  ) {}
  // login = true;
  myForm!: FormGroup;

  show = false;

  string = '';

  closeAlert() {
    this.show = false;
  }

  onSubmit(form: FormGroup) {
    this.authservice.doLogin(form.value.email, form.value.password).subscribe(
      (data) => {
        this.authservice.setLogin(true);
        this.authservice.setlocalStorage({ loggedIn: true, ...data.data });
        this.route.navigate(['/']);
      },
      (err) => {
        this.string = 'Wrong Email or Password';
        this.show = true;
      }
    );
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    // this.checkLogged();
  }
  change() {
    // this.login = !this.login;
  }
}
