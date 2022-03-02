import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthService } from '../auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  myForm!: FormGroup;
  msg!: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngDoCheck() {}
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid, form.value); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    let id = Math.floor(Math.random() * 100 + 1);
    console.log('password', form.value.password);
    this.authService.doRegister({ id, ...form.value }).subscribe(
      (data) => {
        console.log('hi,==============');
        this.msg = 'Successfully Registered ';
        this.emailService
          .sendEmail(
            data.data.email,
            'Registered successfully',
            'Welcome to Quick Deal'
          )
          .subscribe(() => {
            console.log('email sent');
          });
        this.authService.setLogin(true);
        this.authService.setlocalStorage({ loggedIn: true, ...data.data });
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.msg = err.message;
      }
    );
  }
}
