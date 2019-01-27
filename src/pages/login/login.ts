import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Userlog } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventsPage } from '../events/events';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userlog = {} as Userlog;

  constructor(private fireAuth: AngularFireAuth, private toast: ToastController,public navCtrl: NavController, public navParams: NavParams){
  }

  async login(userlog: Userlog){
    try{
      const info = await this.fireAuth.auth.signInWithEmailAndPassword(userlog.email, userlog.password);

      if(info){
        await this.navCtrl.setRoot(EventsPage);
      }
    }
  
    catch(e){
      this.toast.create({
        message: "Invalid Email or Password",
        duration: 3000,
        cssClass:"error"
      }).present();
    }

  }

}


