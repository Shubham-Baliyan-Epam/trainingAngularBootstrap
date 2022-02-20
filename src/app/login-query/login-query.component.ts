import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-query',
  templateUrl: './login-query.component.html',
  styleUrls: ['./login-query.component.css'],
})
export class LoginQueryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      let { uid, pass } = param;
      console.log('LOl');
      this.auth.login(uid, pass);
      if (this.auth.checkIfUserLoggedIn()) {
        alert('valid user');
        this.router.navigate(['']);
        return;
      }
      alert('Invalid User');
      this.router.navigate(['/login']);
    });
  }
}
