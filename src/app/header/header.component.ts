import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './socket,service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public messageCount: number = 0;
  constructor(public ws: WebSocketService) { }

  ngOnInit() {
    this.ws.createObservableSocket("ws://localhost:8082")
    .map(event => JSON.parse(event))
    .subscribe(
      data => this.messageCount = data.messageCount
    )
  }

}
