import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUrl;
  constructor() { }

  ngOnInit() {
    this.generateLoginUrl();
  }

  generateLoginUrl() {
    this.loginUrl = `${environment.authUrl}?client_id=${environment.clientId}&redirect_uri=${
      environment.redirectUrl}&scople=${environment.scopes.join("%20")}&response_type=token&show_dialog=true`;
  }

}
