import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { ExamFormPage } from "../exam-form/exam-form";
import { HomePage } from "../home/home";
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataStore: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login(uname, pass) {
    let uDetails = [
      {
        username: uname,
        password: pass
      }
    ];
    alert("logDetils from provider:" + JSON.stringify(uDetails));
    alert(this.dataStore.getData(uDetails));
    if (this.dataStore.getData(uDetails)) {
      this.navCtrl.push(ExamFormPage);
    }
  }

  signUp(uname) {
    this.navCtrl.push(HomePage, {
      uname
    });
  }
}
