import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  navigate: any;

  constructor(public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    private _location: Location) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/home')) {

        // show exit alert
        console.log('show exit alert');
        navigator['app'].exitApp();
        processNextHandler();
      } else {

        // navigate to back page
        console.log('navigate to back page');
        this._location.back();
      }
    });
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/home",
          icon: "home"
        },
        {
          title: "Visitor Logs",
          url: "/visitor-log-list",
          icon: "list"
        },
        {
          title: "Latest News",
          url: "/latest-news",
          icon: "mail"
        },
      ]
  }

}