import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { UtilService } from '../services/util.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  visitorObj = {
    "name": "",
    "email": "",
    "typeOfVisit": "",
    "personToVisit": "",
    "dateOfEntry": this.util.getCurrentDate(),
    "timeOfEntry": this.util.getCurrentTime(),
    "timeOfExit": this.util.getCurrentTime(),
    "rowId": "",
  };
  valid = true;
  data = [];

  constructor(private datePicker: DatePicker,
    public util: UtilService,
    private nativeStorage: NativeStorage) {

  }

  ngOnInit() {
    this.visitorObj = {
      "name": "",
      "email": "",
      "typeOfVisit": "",
      "personToVisit": "",
      "dateOfEntry": this.util.getCurrentDate(),
      "timeOfEntry": this.util.getCurrentTime(),
      "timeOfExit": this.util.getCurrentTime(),
      "rowId": "",
    };

    this.nativeStorage.getItem('visitorLogList').then(res => {
      if (res) {
        this.data = res;
        console.log(this.data)
      } else {
        this.nativeStorage.setItem('visitorLogList', []);
        this.data = [];
        console.log(this.data)
      }
    }).catch(err => {
      console.log(err)
      this.nativeStorage.setItem('visitorLogList', []);
      this.data = [];
      console.log(this.data)
    });

  }

  visitorEntry(visiorData: any) {
    this.valid = visiorData.valid;
    var ref = this;
    if (this.valid) {
      var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (EMAIL_REGEX.test((ref.visitorObj.email).toLowerCase()) == false) {
        ref.util.presentToast("Please Enter Valid Email!")
        return false;
      }
      console.log(ref.visitorObj)

      if (ref.data.length !== 0) {
        ref.data.push(ref.visitorObj);
        ref.nativeStorage.setItem("visitorLogList", ref.data);
        visiorData.reset();
        ref.nativeStorage.getItem('visitorLogList').then(res => {
          if (res) {
            ref.data = res;
            ref.util.presentToast("Data saved successfully!")
            console.log(ref.data)
            ref.ngOnInit();
          } else {
            ref.nativeStorage.setItem('visitorLogList', []);
            ref.util.presentToast("Data saved successfully!")
            ref.ngOnInit();
          }
        }).catch(err => {
          console.log(err)
        });
      } else {
        var temp = [];
        temp.push(ref.visitorObj)
        ref.nativeStorage.setItem("visitorLogList", temp);
        visiorData.reset();
        ref.nativeStorage.getItem('visitorLogList').then(res => {
          if (res) {
            ref.data = res;
            ref.util.presentToast("Data saved successfully!")
            console.log(ref.data)
            ref.ngOnInit();
          } else {
            ref.nativeStorage.setItem('visitorLogList', []);
            ref.util.presentToast("Data saved successfully!")
            ref.ngOnInit();
          }
        }).catch(err => {
          console.log(err)
        });
      }
    }
  }

  showDatepicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText: "Save Date",
      todayText: "Set Today"
    }).then(
      date => {
        this.visitorObj.dateOfEntry = date.getDate() + "-" + date.toLocaleString('default', { month: 'long' }) + "-" + date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  showEntryTimepicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      okText: "Save Time",
      nowText: "Set Now"
    }).then(
      time => {
        this.visitorObj.timeOfEntry = time.getHours() + ":" + time.getMinutes();
      },
      err => console.log('Error occurred while getting time: ', err)
    );
  }

  showExitTimepicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      okText: "Save Time",
      nowText: "Set Now"
    }).then(
      time => {
        this.visitorObj.timeOfExit = time.getHours() + ":" + time.getMinutes();
      },
      err => console.log('Error occurred while getting time: ', err)
    );
  }
}
