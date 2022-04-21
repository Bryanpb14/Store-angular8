import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth
  ) { }
  
  createUser(email: string, password: string){
  return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    logout(){
      return this.af.auth.signOut();
    }

    hasUser(){
      this.af.authState
     
    }
}
