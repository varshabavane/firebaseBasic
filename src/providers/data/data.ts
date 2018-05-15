import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth/auth";

@Injectable()
export class DataProvider {
  data = [];

  constructor(private fireAuth: AngularFireAuth) {}

  saveData(regDetails) {
    this.data.push(regDetails);
    alert("service: " + JSON.stringify(regDetails));
    this.fireSignUp(regDetails);
  }

  getData(uDetails) {
    this.signIn(uDetails);
    // for (let i = 0; i <= this.data.length; i++) {
    //   if (uDetails.username === this.data[i].username) {
    //     if (uDetails.password === this.data[i].password) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // }
  }

  async fireSignUp(regDetails) {
    alert(regDetails.username);
    try {
      await this.fireAuth.auth
        .createUserWithEmailAndPassword(
          regDetails.username,
          regDetails.password
        )
        .then(details => {
          alert(JSON.stringify(details));
        });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  signIn(regDetails) {
    try {
      this.fireAuth.auth
        .signInWithEmailAndPassword(regDetails.username, regDetails.password)
        .then(logDetils => {
          alert(JSON.stringify(logDetils));
        }).catch(e=>alert(JSON.stringify(e)));
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }
}
