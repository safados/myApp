import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HmPage } from '../hm/hm';


@IonicPage()
@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class ThanksPage {
  
  name: any;

  constructor(
    public navCtrl: NavController){
      this.name =JSON.parse(localStorage.getItem('usernme'));}




  goToSecondPage(){
    this.navCtrl.push(HmPage)
  }
  
}