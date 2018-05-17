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

  async login(uname, pass) {
    let emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(uname)!==true){
      alert("email isn't valid")
      return false;

    }
    let uDetails = {
      username: uname,
      password: pass
    };

    alert("logDetils from provider:" + JSON.stringify(uDetails));

    let a = await this.dataStore.signIn(uDetails);
    alert(a);
    if (a) {
      this.navCtrl.push(ExamFormPage);
    }
  }

  signUp(uname) {
    this.navCtrl.push(HomePage, {
      uname
    });
  }
}
