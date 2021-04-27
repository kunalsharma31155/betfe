import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

import { NotificationService } from '../../services/notification.service';
import { UserService } from '../../services/user.service';
// import { DataTransferService } from '../../services/data-transfer.service';
// import { UserAccessService } from '../../services/user-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted = false;
  helper = new JwtHelperService();
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private notifyService: NotificationService,
    private userService: UserService,
    // private datatransferService: DataTransferService,
    // private userAccess: UserAccessService
    ) { }

  ngOnInit() {
    this.createForm();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginUser() {
    this.formSubmitted = true;

    if (this.loginForm.invalid) { return; }
    this.userService.userLogin(this.loginForm.value).subscribe(
      (data: any) => {
        this.notifyService.showSuccess("Login Successfully", "");
        localStorage.setItem('Token', data.token);
        const decodedToken = this.helper.decodeToken(data.token);
        const role = decodedToken.userRole;
        this.router.navigate([`/`]);
      },
      (err: HttpErrorResponse) => {
        if (err.error.error) {
          this.notifyService.showError(err.error.error, "");
        }
        else if (err.error.msg) {
          this.notifyService.showError(err.error.msg, "");
        } else {
          this.notifyService.showError("Something went wrong", "");
        }
      }
    );
  }



  // {
  //   "phoneNo": "7206725926",
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
  //   }
    
  //   ssd
  //   const deviceTypes = {
  //   IOS: "IOS",
  //   ANDROID: "ANDROID",
  //   WEB: "WEB"
  //   }
  //   {
  //     "statusCode": 200,
  //     "message": "Execution successful",
  //     "data": {
  //     "customerId": 4,
  //     "firstName": "Kunal",
  //     "phoneNo": "7206725926",
  //     "lastName": "Mishra",
  //     "countryCode": "+91",
  //     "email": "kunal@bidme.com",
  //     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJrdW5hbEBiaWRtZS5jb20iLCJpYXQiOjE2MTkyNjY3MjksImV4cCI6MTYxOTg3MTUyOX0.tL7VG4yGzNkib1c4j8vmF9k0Pr4ewC4t-fOjEkL1s_s",
  //     "socialId": null,
  //     "appVersion": 4,
  //     "deviceToken": "thisisdevicetoken",
  //     "deviceType": "ANDROID",
  //     "socialMode": null,
  //     "lastOnlineDate": "2021-04-24T12:18:49.000Z",
  //     "profilePicURL": "https://graph.facebook.com/1677939195696596/picture?type=large",
  //     "isNotificationOn": 1,
  //     "passwordResetToken": null,
  //     "invitationCode": null,
  //     "otpCode": null,
  //     "phoneVerified": 0,
  //     "totalBids": null,
  //     "totalCompleteBids": null,
  //     "walletAmount": 0,
  //     "loyalityPoint": null,
  //     "availableCredits": null,
  //     "online": null,
  //     "referralCode": null,
  //     "completePhoneNo": null,
  //     "currentLocation": null,
  //     "customerAddresses": null,
  //     "IsBlocked": 0,
  //     "IsVerified": 0,
  //     "IsDeleted": 0,
  //     "promoCodes": null,
  //     "language": null,
  //     "latitude": "30.37926",
  //     "longitude": "76.7713428",
  //     "isLoggedIn": 0,
  //     "timezone": null,
  //     "coords": {
  //     "x": 76.7713428,
  //     "y": 30.37926
  //     },
  //     "age": null,
  //     "gender": null,
  //     "dateOfBirth": null,
  //     "referredBy": null,
  //     "referAmount": null
  //     }
  //     }

}
