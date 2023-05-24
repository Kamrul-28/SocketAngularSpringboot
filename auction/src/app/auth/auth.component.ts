import { Component } from '@angular/core';
import { User } from '../services/user/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  user: User = new User;

  constructor(private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(){
      this.userService.login(this.user).subscribe( (response: any) =>{
        if(response.token == "loggedIn"){
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('isLoggedin', "1");
          sessionStorage.setItem('userId', response.id);
          sessionStorage.setItem('userEmail', response.userEmail);
          sessionStorage.setItem('userRole', response.userRole);
        }
        this.goToTenderHome();
      }
      , error => console.log(error));
    }

    goToTenderHome(){
      this.router.navigate(['/home']);
    }
}
