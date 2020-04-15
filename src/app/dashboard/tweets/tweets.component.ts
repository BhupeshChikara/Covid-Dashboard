import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getTwitterFeeds().subscribe(res=>console.log(res))
  }

}
