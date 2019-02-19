import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['test1', 'test2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created, name is: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
