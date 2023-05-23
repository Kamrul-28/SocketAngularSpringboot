import { Component } from '@angular/core';
import { BidService } from '../bid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSocketService } from '../web-socket.service';
import { StompService } from '../services/stomp.service';


@Component({
  selector: 'app-tender-wise-bid',
  templateUrl: './tender-wise-bid.component.html',
  styleUrls: ['./tender-wise-bid.component.css']
})
export class TenderWiseBidComponent {
  bid$: any;
  id: any;

  constructor(private bidService: BidService,
    private route: ActivatedRoute,
    private webSocketService: WebSocketService,
    private stompService:StompService,
    private router: Router) {
    }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.bidService.Refreshrequired.subscribe(response => {
        this.getTenderWiseBid(this.id);
      });

      this.stompService.subscribe('/topic/bid',():void =>{
        this.getTenderWiseBid(this.id);
      })

      this.getTenderWiseBid(this.id);

    }

    private getTenderWiseBid(id:any):void{
      this.bidService.tenderWiseBid(id).subscribe(response => {
        this.bid$ = response;
      });
    }
}
