import { Component } from '@angular/core';
import { User } from '../services/user/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: User = new User;

  constructor(private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit(){
      this.userService.login(this.user).subscribe( data =>{
        this.goToTenderList();
      }
      , error => console.log(error));
      console.log(this.user);
    }

    goToTenderList(){
      this.router.navigate(['/tender']);
    }
}
