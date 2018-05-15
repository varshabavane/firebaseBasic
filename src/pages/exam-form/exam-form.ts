import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-exam-form",
  templateUrl: "exam-form.html"
})
export class ExamFormPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExamFormPage");
  }
  submit(uname, phone) {
    this.data.fireCreate(uname,phone)
    alert("hello");
  }
}
