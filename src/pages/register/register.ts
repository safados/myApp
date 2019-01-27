import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {ThanksPage} from '../thanks/thanks';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: User = {
    Name: '',
    Phone: 0,
    Gender:false
  };
  //key: string = 'username';
  //name: any;

  constructor(private afAuth: AngularFireAuth,private afDatabase: AngularFireDatabase,
     public navCtrl: NavController,
     public navParams: NavParams) {}


  saveUser() {
    window.localStorage.setItem('usernme',JSON.stringify(this.user.Name));
  }

  register(){
    const user = this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`Users/${auth.uid}`).push(this.user)
      .then(() => {
        this.navCtrl.setRoot(ThanksPage)

      });
      console.log(user);
      localStorage.setItem('usernme',JSON.stringify(this.user.Name));
    })
  }


  }

