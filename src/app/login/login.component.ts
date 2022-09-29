import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string | undefined;
    userData : any = [
      {
        id:1,
        name: 'Ankur',
        age: '55',
        email : 'ankur@gmail.com'
      },
      {
        id:2,
        name: 'Kashif',
        age: '26',
        email : 'kashif@gmail.com'
      },
      {
        id:3,
        name: 'Rahul',
        age: '98',
        email : 'rahul@gmail.com'
      },
      {
        id:4,
        name: 'bhabhi',
        age: '74',
        email : 'bhabhi@gmail.com'
      }
    ]

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) {
      sessionStorage.setItem('users', this.userData)
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            age: ['']

        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        let user = {
        'id': this.userData.length+1,
        'name':this.loginForm.value.username, 
        'email': this.loginForm.value.email,
        'age': this.loginForm.value.age}
        this.userData.push(user);
        sessionStorage.setItem('users', JSON.stringify(this.userData));    

        this.router.navigateByUrl('home');

    }
}
