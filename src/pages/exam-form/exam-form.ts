import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-exam-form",
  templateUrl: "exam-form.html"
})
export class ExamFormPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider
  ) {}

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

  delete(xmFormData){
    this.data.fireRemove(xmFormData)

  }
}
