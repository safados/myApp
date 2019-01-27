import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { ButtonPage } from '../pages/button/button';
import { EventsPage } from '../pages/events/events';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ThanksPage } from '../pages/thanks/thanks';
import { HmPage } from '../pages/hm/hm';

import { HttpModule } from '@angular/http';
//import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_INFO } from './firebase.info';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SurveyListService } from '../services/survey-list/survey-list.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    ButtonPage,
    EventsPage,
    LoginPage,
    RegisterPage,
    ThanksPage,
    HmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    //AngularFireDatabase,
    AngularFireDatabaseModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_INFO),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    ButtonPage,
    EventsPage,
    LoginPage,
    RegisterPage,
    ThanksPage,
    HmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SurveyListService,
    YoutubeVideoPlayer,
   
  ]
})
export class AppModule {}