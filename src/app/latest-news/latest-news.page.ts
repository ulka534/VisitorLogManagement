import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UtilService } from '../services/util.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.page.html',
  styleUrls: ['./latest-news.page.scss'],
})
export class LatestNewsPage implements OnInit {

  newsList = [];

  constructor(private http: HttpClient,
    public util: UtilService,
    public loadingController: LoadingController) { }

  async ngOnInit() {
    var ref = this;
    var url = "https://newsapi.org/v2/everything?q=bitcoin&from=" + this.util.getCurrentDate() + "&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98";

    this.http.get(url).subscribe(response => {
      console.log("Response: " + JSON.stringify(response));
      if (response["status"] == "ok")
        ref.newsList = response["articles"];
        ref.util.loadingDismiss();
    }, error => {
      console.log(error);
    });
    ref.util.loadingPresent("Loading...")
  }

}
