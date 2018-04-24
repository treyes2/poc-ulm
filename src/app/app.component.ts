import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Deeplinks } from '@ionic-native/deeplinks';
import { MymovistarPage } from '../pages/mymovistar/mymovistar';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  
  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, deeplink: Deeplinks) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      deeplink.routeWithNavController(this.nav, {
        '/page-mymovistar': MymovistarPage
      }).subscribe((match) => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('deeplink Successfully matched route', match);
        this.nav.push(MymovistarPage, match.$link);
      }, (nomatch) => {
        // nomatch.$link - the full link data
        console.error('deeplink que no concuerda', nomatch);
      });

    });
  }
}

