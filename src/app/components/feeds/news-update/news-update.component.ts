import { Component, OnInit } from '@angular/core';
import xml2js from 'xml2js';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit {
  news
  constructor(private dashboardService:DashboardService) { 
    setInterval(()=>{
      this.dashboardService.getNewsFeeds().subscribe(res=>{
        this.parseXML(res)
            .then((data) => {
              this.news=data
            });
      })
    },60*1000)
  }

  ngOnInit(): void {
    this.dashboardService.getNewsFeeds().subscribe(res=>{
      this.parseXML(res)
          .then((data) => {
            this.news=data
          });
    })
  }

  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.rss.channel[0].item;
        for (k in obj) {
          var item = obj[k];
          arr.push({
            title: item.title[0],
            description: item.description[0],
            date: item.pubDate[0],
            link: item.link[0]
          });
        }
        resolve(arr);
      });
    });
  }


}
