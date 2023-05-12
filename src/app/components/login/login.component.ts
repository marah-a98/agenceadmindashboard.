import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUser: FormGroup


  constructor(private formBuilder: FormBuilder, private userService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      email: '',
      password: '',

    })
  }

  findUser() {


    this.userService.findUser(this.formUser.value).subscribe(
      (res: any) => {
        console.log("result :", res)
        if (res != null) {
          localStorage.setItem("role",res.role)
          localStorage.setItem("state", "1");
          this.router.navigateByUrl("home");
        }
      }
    )

    
    

  }

}
