import { Component } from '@angular/core';
import { TenderService } from '../tender.service';
import { Tender } from '../tender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent {
  tender: Tender[] | undefined;
  isLoggedin: any;
  userId: any;
  userRole: any;

  constructor(private tenderService: TenderService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTenders();
    this.isLoggedin = sessionStorage.getItem('isLoggedin');
    this.userId = sessionStorage.getItem('userId');
    this.userRole = sessionStorage.getItem('userRole');
  }

  private getTenders(){
    this.tenderService.getTenderList().subscribe(data => {
      this.tender = data;
    });
  }

  startOction(id: number){
    this.tenderService.startOction(id).subscribe(data => {
      this.goToTenderList();
      location.reload()
    });
  }

  tenderWiseBid(id: number){
    this.router.navigate(['/tender-wise-bid', id]);
  }

  closeOction(id: number){
    this.tenderService.closeOction(id).subscribe(data => {
      this.goToTenderList();
      location.reload()
    });
  }

  bidSubmission(id: number){
    this.router.navigate(['/bid', id]);
  }

  goToTenderList(){
    this.router.navigate(['/tender']);
  }

}
