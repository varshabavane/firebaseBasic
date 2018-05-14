import { Injectable } from "@angular/core";

@Injectable()
export class DataProvider {
  data = [];

  constructor() {}

  saveData(regDetails) {
    this.data.push(regDetails);
    alert("service: " + JSON.stringify(this.data));
  }

  getData(uDetails) {
    for (let i = 0; i <= this.data.length; i++) {
      if (uDetails.username === this.data[i].username) {
        if (uDetails.password === this.data[i].password) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
