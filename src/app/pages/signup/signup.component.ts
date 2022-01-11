import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Profile } from 'src/app/models/profile.model';
import { Wallet } from 'src/app/models/wallet.model';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  profileForm: Profile;
  newAccountBalance: Number = 0;

  constructor(private walletService: WalletService, private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signup() {
    this.profileForm = this.signupForm.value;
    this.authService.signup(this.profileForm.username, this.profileForm.password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        this.router.navigate(['/welcome'])
      }
      console.log(res)
    } , (err: ErrorHandler) => {
      console.log(err + ' = This')
    })
  }

}