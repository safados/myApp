import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ButtonPage } from '../button/button';


@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController) {
  }

  goToSecondPage(){
    console.log("second page")
    this.navCtrl.push(ButtonPage)
  }

}
