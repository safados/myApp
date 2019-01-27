import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-hm',
  templateUrl: 'hm.html',
})
export class HmPage {

  constructor(public navCtrl: NavController,private youtube: YoutubeVideoPlayer){
  }
  

  goToSecondPage(){
  
    this.navCtrl.push(HomePage)
  }
  goToYoutube(){
    return this.youtube.openVideo('https://www.youtube.com/watch?v=PNzE1MX5iRU');
  }
}
