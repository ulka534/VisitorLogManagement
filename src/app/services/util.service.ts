import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private loadingController: LoadingController,
    private toastController: ToastController) { }

  // date format: dd-mm-yyyy
  getCurrentDate() {
    var dateObj = new Date();
    var day = dateObj.getDate();
    var month = dateObj.getMonth() + 1;
    var year = dateObj.getFullYear();
    var fullDate = ((day < 10) ? "0" + day : day) + "-" + ((month < 10) ? "0" + month : month) + "-" + year;
    return fullDate;
  }

  getCurrentTime() {
    var dateObj = new Date();
    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();
    var second = dateObj.getSeconds();
    var fullTime = hour + ":" + minute
    return fullTime;
  }

  async loadingPresent(message: string = null, duration: number = null) {
    const loading = await this.loadingController.create({ message, duration });
    return await loading.present();
  }

  async loadingDismiss() {
    setTimeout(() => {
      return this.loadingController.dismiss();
    }, 1000);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
