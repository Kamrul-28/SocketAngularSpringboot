import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedin: any;
  userId: any;
  userRole: any;

  constructor(private router: Router){}
  ngOnInit(): void {
    this.isLoggedin = sessionStorage.getItem('isLoggedin');
    this.userId = sessionStorage.getItem('userId');
    this.userRole = sessionStorage.getItem('userRole');
  }

  public logout() {
    sessionStorage.clear();
    location.reload();
    this.router.navigate(['']);
  }
}
