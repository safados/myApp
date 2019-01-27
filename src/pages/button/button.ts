import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HmPage } from '../hm/hm';
import {RegisterPage} from '../register/register';
/**
 * Generated class for the ButtonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-button',
  templateUrl: 'button.html',
})
export class ButtonPage {

  constructor(public navCtrl: NavController){
  }

  goToSecondPage(){
    console.log("second page")
    this.navCtrl.push(HmPage)
  }
  
  goToSecondP(){
      console.log("second page")
    this.navCtrl.push(RegisterPage)
    }
}


