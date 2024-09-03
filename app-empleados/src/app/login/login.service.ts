import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { response } from "express";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class LoginService{
    constructor(private router:Router, private cookies:CookieService){
        
    }

    //JWT
    token:string;
    login(email:string, password:string){
        //La respuesta que nos da es una promesa
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => {
                        this.token = token;
                        this.cookies.set("token", this.token)
                        this.router.navigate(['/']);
                    }
                )
            }
        )
    }


    getIdToken(){
        //return this.token;
        //En lugar del token devolvemos la cookie
        return this.cookies.get("token");

    }

    estaLogueado(){
        //return this.token;
        return this.cookies.get("token");
    }

    logout(){
        firebase.auth().signOut().then(() => {
            this.token = "";
            this.cookies.set("token", this.token)
            this.router.navigate(['/']);
            window.location.reload();
        });
    }
}