import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-exam-form",
  templateUrl: "exam-form.html"
})
export class ExamFormPage {
  friends = "";
  friendList;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider
  ) {
    this.friendList=this.data.listObservable;
    // this.friendList = this.data.firebaseListRead();
    // console.log(JSON.stringify(this.friendList))
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExamFormPage");
  }
  create(uname, phone) {
    let studDetails = {
      studname: uname ? uname : "fyt",
      phoneNo: phone
    };

    this.data.fireCreate(studDetails);
  }

  update(u, p) {
    let studDetailUpdate = {
      studname: u,
      phoneNo: p,
      email: "mail"
    };
    this.data.fireUpdate(studDetailUpdate);
  }

  delete(xmFormData) {
    alert(JSON.stringify(xmFormData))
    this.data.firelistRemove(xmFormData);
  }

  read() {
    this.data.fireRead();
  }

  createFrndList(f) {
    if (f.length > 1) {
      this.data.friendListCreate({friend: this.friends});
      this.friends='';
    }
  }


  // dataRead(){
  //   this.data.firebaseListRead()

  // }
}
