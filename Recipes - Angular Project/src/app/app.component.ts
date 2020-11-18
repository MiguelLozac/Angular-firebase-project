import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private loggingService: LoggingService) {}
  title = 'ng-uikit-pro-standard';
 
  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from apcomponent nonginit')
  }


  // allowNewServer = false; 
  // serverCreationStatus ='No server created'
  // serverName = 'TestServer';
  // serverCreated = false;
  // servers = ['Testserver', 'Testserver 2',];

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000)
  // }

  // onCreateServer() {
  //   this.serverCreationStatus = 'server was created!' + this.serverName;
  //   this.serverCreated = true;
  //   this.servers.push(this.serverName);  
  // }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

  
}
