import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { Item2 } from './../../models/item/item.model';
import { Item3 } from './../../models/item/item.model';
import { Item4 } from './../../models/item/item.model';
import { Item5 } from './../../models/item/item.model';
import { Item6 } from './../../models/item/item.model';
import { Item7 } from './../../models/item/item.model';
import { SurveyListService } from '../../services/survey-list/survey-list.service';
import { ThanksPage } from '../thanks/thanks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  item: Item = {
    Question1: "Help Finding Information Online ?",
    Roy: false,
    ola:false,
    jack:false,
    wal:false,
  };
    item2: Item2 = {
    Question2:"Help Finding Information ?",
    kmn:false,
    Ralf:false,
    kate:false,
    sny:false,
  };
  item3: Item3 = {
    Question3:"Help Finding Information Onl ?",
    koy:false,
    lalf:false,
    mate:false,
    snny:false,
  };
  item4: Item4 = {
    Question4:"Help Finding Information ?",
    kny:false,
    lblf:false,
    mtte:false,
    snfy:false,
  };
  item5: Item5 = {
    Question5:"Help Finding Information online ?",
    knl:false,
    lbld:false,
    mttp:false,
    snfq:false,
  };
  item6: Item6 = {
    Question6:"Help Finding Information ?",
    knlh:false,
    ltg:false,
    mtbr:false,
    snek:false,
  };
  item7: Item7 = {
    comment:"",
  
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private survey:SurveyListService,

    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  //this makes me go to another page and display data there
  
  addItem(item: Item){
    this.survey.addItem(item).then(ref => {
      this.navCtrl.setRoot(ThanksPage)

    });
  }
  addItem2(item2: Item2){
    this.survey.addItem2(item2).then(ref => {
      this.navCtrl.setRoot(ThanksPage)

    });
  }
  addItem3(item3: Item3){
    this.survey.addItem3(item3).then(ref => {
      this.navCtrl.setRoot(ThanksPage)

    });
  }
  addItem4(item4: Item4){
    this.survey.addItem4(item4).then(ref => {
      this.navCtrl.setRoot(ThanksPage)

    });
  }
  addItem5(item5: Item5){
    this.survey.addItem5(item5).then(ref => {
      this.navCtrl.setRoot(ThanksPage)

    });
  }
  addItem6(item6: Item6){
    this.survey.addItem6(item6).then(ref => {
      this.navCtrl.setRoot(ThanksPage)

    });
  }
  addItem7(item7: Item7){
    this.survey.addItem7(item7).then(ref => {
      this.navCtrl.setRoot(ThanksPage)

    });
  }


}
