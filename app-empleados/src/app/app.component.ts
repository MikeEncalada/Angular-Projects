import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  

  constructor(private loginService:LoginService) { 
    
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB0LxG-eW5HPhQONdzPspp64D7aPT8gqOw",
      authDomain: "mis-clientes-27d13.firebaseapp.com",
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
