import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  tweets=[{username:'World Health Organization',tagName:'@WHO',message:'',profile:'assets/images/Image 23.png',likes:'44.1k',share:'11.3k'},
  {username:'PMO India',tagName:'@PMOIndia',message:'',profile:'assets/images/Image 24.png',likes:'122.3k',share:'23.8k'},
  {username:'Donald J. Trump',tagName:'@realDonaldTrump',message:'',profile:'assets/images/Image 25.png',likes:'101.9k',share:'23.5k'}]

  constructor(private dashboardService:DashboardService) { 
    setInterval(()=>{
    this.dashboardService.getTwitterFeeds().subscribe(res=>console.log(res))
    },60*1000)
  }

  ngOnInit(): void {
    this.dashboardService.getTwitterFeeds().subscribe(res=>console.log(res))
  }

}
