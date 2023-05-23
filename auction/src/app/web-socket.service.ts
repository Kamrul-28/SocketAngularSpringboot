import { Injectable } from '@angular/core';
import { Client, Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: Client;

  constructor() {
    this.stompClient = Stomp.over(new SockJS('http://localhost:8080/our-websocket'));
  }

  public connect(): void {
    this.stompClient.activate();
    this.stompClient.onConnect = (frame) => {
      console.log('WebSocket connection established');
      // Perform actions after connection is established
    };
  }

  public disconnect(): void {
    this.stompClient.deactivate();
    console.log('WebSocket connection closed');
    // Perform actions after connection is closed
  }
}
