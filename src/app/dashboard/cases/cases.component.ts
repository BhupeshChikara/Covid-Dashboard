import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
   cases=[{name:'Total Cases',pointer:'assets/images/Up.svg',graph:'assets/images/Graph.svg',count:0,todayCount:0},
    {name:'Recovered',pointer:'assets/images/Down.svg',graph:'assets/images/Graph-4.svg',count:0,todayCount:0},
    {name:'Active Cases',pointer:'assets/images/Up.svg',graph:'assets/images/Graph-2.svg',count:0,todayCount:0},
    {name:'Total Deaths',pointer:'assets/images/Up.svg',graph:'assets/images/Graph-1.svg',count:0,todayCount:0}]

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getCases().subscribe(res=>{
      console.log(res)
      this.cases[0].count=res['cases']
      this.cases[0].todayCount=res['todayCases']/1000
      this.cases[1].count=res['recovered']
      this.cases[2].count=res['active']
      this.cases[3].count=res['deaths']
    })
  }

}
