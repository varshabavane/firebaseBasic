import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth/auth";

@Injectable()
export class DataProvider {
  data = [];

  constructor(public fireAuth: AngularFireAuth) {}

  //signUp with firebase

  async fireSignUp(regDetails) {
    alert(regDetails.username);
    try {
      await this.fireAuth.auth
        .createUserWithEmailAndPassword(
          regDetails.username,
          regDetails.password
        )
        .then(details => {
          alert(JSON.stringify(details.uid));
        });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  //signIn firebase funtion

  async signIn(regDetails) {
    try {
      await this.fireAuth.auth
        .signInWithEmailAndPassword(regDetails.username, regDetails.password)
        .then(logDetils => {
          alert(JSON.stringify(logDetils));
          if (logDetils.uid) {
            return true;
          }
        })
        .catch(e => alert(JSON.stringify(e)));
      return true;
    } catch (error) {
      alert(JSON.stringify(error));
      return false;
    }
  }

  //firebase CRUD operatons

  fireCreate(u,p){

  }
}
