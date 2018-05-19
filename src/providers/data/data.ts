import { Injectable } from "@angular/core";
// firebase authentication
import { AngularFireAuth } from "angularfire2/auth/auth";
//for firebaseDatabase operation
import {
  AngularFireDatabase,
  AngularFireObject,
  AngularFireList
} from "angularfire2/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable()
export class DataProvider {
  data = [];
  examForm: AngularFireObject<any>;
  friendList: AngularFireList<any>;
  listObservable: Observable<any[]>;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireDB: AngularFireDatabase
  ) {
    this.examForm = this.fireDB.object("ExamForm");
    this.friendList = this.fireDB.list("ExamForm/friendList");
    this.listObservable = this.friendList
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  //signUp with firebase

  async fireSignUp(regDetails) {
    try {
      await this.fireAuth.auth
        .createUserWithEmailAndPassword(
          regDetails.username,
          regDetails.password
        )
        .then(details => {
         console.log(JSON.stringify(details.uid));
        });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }

  //signIn firebase funtion

  async signIn(regDetails) {
    // return true;
    try {
      let a = await this.fireAuth.auth
        .signInWithEmailAndPassword(regDetails.username, regDetails.password)
        .then(logDetils => {
          // alert(JSON.stringify(logDetils));
          if (logDetils.uid) {
            return true;
          }
        })
        .catch(e => {
          alert(JSON.stringify(e));
          return false;
        });
      return a;
    } catch (error) {
      alert(JSON.stringify(error));
      return false;
    }
  }

  //firebase CRUD operations with obcject
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
    this.fireDB.object("ExamForm/" + xmDetailDelete).remove();
  }

  fireRead() {
    this.examForm.snapshotChanges().subscribe(readData => {
      alert(JSON.stringify(readData));
    });
  }

  //firebase CRUD operations with list

  friendListCreate(frnd) {
    this.friendList.push(frnd);
  }

  firelistRemove(xmFriendDelete) {
    this.friendList.remove(xmFriendDelete);
  }
}
