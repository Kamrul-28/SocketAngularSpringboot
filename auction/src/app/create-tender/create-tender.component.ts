import { Component } from '@angular/core';
import { Tender } from '../tender';
import { Router } from '@angular/router';
import { CreateTenderService } from '../create-tender.service';

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.css']
})
export class CreateTenderComponent {

  tender: Tender = new Tender();

  constructor(private createTenderService: CreateTenderService ,private router: Router) { }

  onSubmit(){
    this.createTenderService.createTender(this.tender).subscribe( response =>{
      this.goToTenderList();
    }
    , error => console.log(error));
  }

  goToTenderList(){
    this.router.navigate(['/tender']);
  }
}
