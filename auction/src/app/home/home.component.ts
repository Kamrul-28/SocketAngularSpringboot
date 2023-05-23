import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedin: any;
  userId: any;
  userRole: any;


  ngOnInit(): void {
    this.isLoggedin = sessionStorage.getItem('isLoggedin');
    this.userId = sessionStorage.getItem('userId');
    this.userRole = sessionStorage.getItem('userRole');
  }
}
