import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/*
  Declarations of constants
*/
const components = [
];

const pages = [
  MyApp,
  HomePage,
];

const pipes = [
];
/*
  Start of NgModule
*/
@NgModule({
  declarations: [
    components,
    pages,
    pipes,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    components,
    pages,
    pipes,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
