import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-spread-chart',
  templateUrl: './spread-chart.component.html',
  styleUrls: ['./spread-chart.component.css']
})
export class SpreadChartComponent implements OnInit {

  activeButton='confirmed';
  confirmedTimeSeries=[];
  recoveredTimeSeries=[];
  deathsTimeSeries=[];
  

  constructor(private dashboardService:DashboardService) { }
  
  ngOnInit(): void {
       this.dashboardService.getTimeSeries().subscribe(res=>{
         this.convertToWorld(res)
       })
  }

  convertToWorld(value){
     Object.keys(value).forEach(element=>{
       for(let index in value[element]){
         if(this.confirmedTimeSeries[index]){
         this.confirmedTimeSeries[index]+=value[element][index].confirmed
         this.deathsTimeSeries[index]+=value[element][index].deaths
         this.recoveredTimeSeries[index]+=value[element][index].recovered
        }
         else{
         this.confirmedTimeSeries[index]=value[element][index].confirmed         
         this.deathsTimeSeries[index]=value[element][index].deaths
         this.recoveredTimeSeries[index]=value[element][index].recovered
        }
       }  
     })
  }
  
  changeClass(value){
    this.activeButton=value;
    if(value==='confirmed'){
     
    }
    else if(value==='deaths'){

    }
    else{
     
    } 
  }
  

  getClass(value){
    if (this.activeButton===value)
      return 'active';
  }

}
