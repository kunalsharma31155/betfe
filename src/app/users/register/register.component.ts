import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // "phoneNo": "7206725926",
    //   "firstName": "Kunal",
    //   "lastName":"Mishra",
    //   "dateOfBirth": "18-08-1996",
    //   "email": "kunal@bidme.com",
    //   "profilePicUrl": "https://graph.facebook.com/1677939195696596/picture?type=large",
    //   "latitude": 30.37926,
    //   "longitude": 76.7713428,
    //   "countryCode": "+91",
    //   "appVersion": "4",
    //   "deviceType": "ANDROID",
    //   "deviceToken": "thisisdevicetoken",
    //   "content-language": "en",
    //   "password":"allowkunal"
    userForm: FormGroup;
    formSubmitted = false;
    showPassword: boolean = false;
    showConfirmPassword: boolean = false;
    lat;
    long;
  constructor(private formBuilder: FormBuilder,
    private User: UserService,
    private router: Router,
    private notifyService: NotificationService) { }

  ngOnInit() {
    this.createForm();
    this.getLocation();
  }
  
  createForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      countryCode:['',Validators.required],
      phoneNo:['',Validators.required],
      userLoginId: [''],
      password: ['', [Validators.required]],
      confirmPassword: ['',Validators.required],
      latitude:[this.lat],
      longitude:[this.long],
      activeStatus:[false]
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
  }
  MustLocation(lat,long){

  }
  get f() { return this.userForm.controls; }
  
  registerUser() {
    this.formSubmitted = true;
    if(this.userForm.invalid){ return; }
    this.User.registerUser(this.userForm.value).subscribe(
      (data: any) => {
        this.notifyService.showSuccess('Registered Successfully', "");
        this.router.navigate([`/user`]);
      },
      (err: HttpErrorResponse) => {
        if (err.error.error) {
          this.notifyService.showError(err.error.error, "");
        }
        else if (err.error.msg) {
          this.notifyService.showError(err.error.msg.message, "");
        } else {
          this.notifyService.showError("Something went wrong", "");
        }
      }
    );
  }

  getLocation(){
    navigator.geolocation.watchPosition((pos) => {
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
    }),
    () => {
        console.log('Position is not available');
    },
    {
      enableHighAccuracy: true
    };
  }

  MustMatch(password1: string, password2: string) {
    return (formGroup: FormGroup) => {
      const pass = formGroup.controls[password1];
      const confirmPass = formGroup.controls[password2];
      if (confirmPass.errors && !confirmPass.errors.mustMatch) {
        return;
      }

      // set error on confirmPass if validation fails
      if (pass.value !== confirmPass.value) {
        confirmPass.setErrors({ mustMatch: true });
      } else {
        confirmPass.setErrors(null);
      }
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
