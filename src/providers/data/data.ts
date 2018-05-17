import { Injectable } from "@angular/core";
// firebase authentication
import { AngularFireAuth } from "angularfire2/auth/auth";
//for firebaseDatabase operation
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
@Injectable()
export class DataProvider {
  data = [];
  examForm: AngularFireObject<any>;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireDB: AngularFireDatabase
  ) {
    this.examForm = this.fireDB.object("ExamForm");
  }

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
    return true;
    // try {
    //   let a = await this.fireAuth.auth
    //     .signInWithEmailAndPassword(regDetails.username, regDetails.password)
    //     .then(logDetils => {
    //       alert(JSON.stringify(logDetils));
    //       if (logDetils.uid) {
    //         return true;
    //       }
    //     })
    //     .catch(e => {
    //       alert(JSON.stringify(e));
    //       return false;
    //     });
    //   return a;
    // } catch (error) {
    //   alert(JSON.stringify(error));
    //   return false;
    // }
  }

  //firebase CRUD operatons
  //for creating update and set the info.(destructive Update)
  fireCreate(xmInfo) {
    this.examForm.set(xmInfo);
  }

  //for update exam form info 
  fireUpdate(xmInfoUpdate) {
    this.examForm.update(xmInfoUpdate);
  }
//delete data 
  fireRemove(xmDetailDelete) {
    this.fireDB.object('ExamForm/'+xmDetailDelete).remove()
  }
}
