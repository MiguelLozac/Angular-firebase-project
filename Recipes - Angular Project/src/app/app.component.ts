import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { Store } from '@ngrx/store';
import { LoggingService } from './logging.service';
import { isPlatformBrowser } from '@angular/common'

import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>, 
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platformId
     ) {}
  title = 'Recipes';
 
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      this.store.dispatch(new AuthActions.AutoLogin());
    }
    this.loggingService.printLog('Hello from Appcomponent nnOnInit')
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
