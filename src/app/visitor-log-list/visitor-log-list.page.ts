import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-visitor-log-list',
  templateUrl: './visitor-log-list.page.html',
  styleUrls: ['./visitor-log-list.page.scss'],
})
export class VisitorLogListPage implements OnInit {

  visitorLogList = [];

  constructor(private nativeStorage: NativeStorage,
    public util: UtilService) { }

  ngOnInit() {

    this.nativeStorage.getItem('visitorLogList').then(res => {
      if (res) {
        this.visitorLogList = res;
        this.util.loadingDismiss();
        console.log(this.visitorLogList)
      } else {
        this.nativeStorage.setItem('visitorLogList', []);
        this.visitorLogList = [];
        this.util.loadingDismiss();
        console.log(this.visitorLogList)
      }
    }).catch(err => {
      console.log(err)
      this.nativeStorage.setItem('visitorLogList', []);
      this.visitorLogList = [];
      this.util.loadingDismiss();
      console.log(this.visitorLogList)
    });
    this.util.loadingPresent("Loading...")

  }

}
