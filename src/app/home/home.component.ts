import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // userData:any = JSON.parse(sessionStorage.users);

   userData: any = JSON.parse(sessionStorage.users)
  constructor( private router:Router) { 
    console.log(this.userData)
  }

  ngOnInit(): void {
  }

  deleteUser(index: any) {
    this.userData.splice(index, 1);
  }
  goBack () {
    this.router.navigateByUrl('')
  }
}
