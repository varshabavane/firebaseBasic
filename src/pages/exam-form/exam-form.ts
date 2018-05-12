import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-exam-form',
  templateUrl: 'exam-form.html',
})
export class ExamFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamFormPage');
  }
  submit(){
    alert("hello")

  }

}
