import { Component } from '@angular/core';
import { Bid } from '../bid';
import { BidService } from '../bid.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent {
  id: any;
  isLoggedin: any;
  userId: any;
  userRole: any;
  bid: Bid = new Bid();


  constructor(private bidService: BidService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.isLoggedin = sessionStorage.getItem('isLoggedin');
      this.userId = sessionStorage.getItem('userId');
      this.userRole = sessionStorage.getItem('userRole');

      this.bid.tenderId = this.id;
      this.bid.userId = this.userId;
    }

    onSubmit(){
      this.bidService.createBid(this.bid).subscribe( data =>{
        this.goToTenderList();
      }
      , error => console.log(error));
      console.log(this.bid);
    }

    goToTenderList(){
      this.router.navigate(['/tender']);
    }
}
