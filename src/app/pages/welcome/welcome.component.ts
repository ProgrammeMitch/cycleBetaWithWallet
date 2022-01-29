import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  userForm1: FormGroup;
  userForm2: FormGroup;
  userForm3: FormGroup;
  userForm4: FormGroup;
  userProfile: Profile;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {

    this.userForm1 = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })

    this.userForm2 = this.fb.group({
      phoneNumber: [null, Validators.required],
      bvn: ['', Validators.required],
      nin: ['', Validators.required],
    })

    this.userForm3 = this.fb.group({
      occupation: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required],
    })
  }

  updateUser(str: any) {
    this.profileService.updateUserDetails(this.authService.getUserId(), str.value).subscribe(() => {
      this.profileService.getUserDetails(this.authService.getUserId()).subscribe((user: Profile) => {
        this.userProfile = user
        console.log(user)
      })
    })
  }

  login() {
    this.router.navigate(['/login'])
  }


  get onlyNumbersPhone() {
    if (this.userForm2.value.phoneNumber) {
      let zero = this.userForm2.value.phoneNumber * 0
      if (zero !== 0) {
        return true
      }
    }
  }
  get onlyNumbersBvn() {
    if (this.userForm2.value.bvn) {
      let zero = this.userForm2.value.bvn * 0
      if (zero !== 0) {
        return true
      }
    }
  }
  get onlyNumbersNin() {
    if (this.userForm2.value.nin) {
      let zero = this.userForm2.value.nin * 0
      if (zero !== 0) {
        return true
      }
    }
  }
  get onlyNumbersAge() {
    if (this.userForm3.value.age) {
      let zero = this.userForm3.value.age * 0
      if (zero !== 0) {
        return true
      }
    }
  }
}
