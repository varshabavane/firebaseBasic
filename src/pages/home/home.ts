import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LoginPage } from "../login/login";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  username;
  constructor(
    public navCtrl: NavController,
    public dataStore: DataProvider,
    public navparams: NavParams
  ) {
    this.username = this.navparams.get("uname");
  }

  register(uname, pass) {
    alert("hello");
    let details = {
      username: uname,
      password: pass
    };

    alert(JSON.stringify(details));
    this.dataStore.saveData(details);
    this.navCtrl.push(LoginPage);
  }
}
