import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { DataProvider } from "../providers/data/data";
import { ExamFormPage } from "../pages/exam-form/exam-form";

/* firebase config import */
import { FirebaseConfig } from "../app/firebase.config";
/* angular fire module import */
import { AngularFireModule } from "angularfire2";
/* angular firebase authentication module import*/
import { AngularFireAuthModule } from "angularfire2/auth";
//  angular firebase databse module
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  declarations: [MyApp, HomePage, LoginPage, ExamFormPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginPage, ExamFormPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule {}
