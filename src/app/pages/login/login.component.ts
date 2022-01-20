import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  profileForm: Profile;
  badRequestError = false;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.profileForm = this.loginForm.value;
    this.authService.login(this.profileForm.username, this.profileForm.password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        this.badRequestError = false;
        this.router.navigate(['/dashboard'])
      }
    })
    this.badRequestError = true;
    this.loginForm.reset();
  }
}
