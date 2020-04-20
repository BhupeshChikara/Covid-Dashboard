import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
 
  cases
  constructor(private dashboardService:DashboardService) {
    setInterval(()=>{
    this.dashboardService.getCases().subscribe(res=>this.cases=res)
    },60*1000)
   }

  ngOnInit(): void {
    this.dashboardService.getCases().subscribe(res=>this.cases=res)
  }

  getPercentage(){
    if(this.cases)
    return ((this.cases.recovered*100)/this.cases.cases).toFixed(1)
  }

}
