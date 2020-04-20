import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

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
  class='red'

  lineChartData: ChartDataSets[] = [
    { data: this.confirmedTimeSeries, label: 'Confirmed',borderDash:[2,1] },
  ];

  months=['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December']
  date=new Date().getDate()
  month=new Date().getMonth()

  lineChartLabels: Label[] = [this.date-7+ ' ' +this.months[this.month], this.date-6+ ' ' +this.months[this.month],this.date-5+ ' ' +this.months[this.month],this.date-4+ ' ' +this.months[this.month],this.date-3+ ' ' +this.months[this.month],this.date-2+ ' ' +this.months[this.month],this.date-1+ ' ' +this.months[this.month]];

  lineChartOptions = { 
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        color:'black',
          gridLines: {
              drawOnChartArea: false
          }
      }],
      yAxes: [{
        position: 'right',
          gridLines: {
              drawOnChartArea: false
          },
          ticks: {maxTicksLimit:5
          }
      }]
  },
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#ff0019',
      backgroundColor: 'rgb(255,255, 255)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  confirmedCases;
  recoveredCases;
  deathCases;

  constructor(private dashboardService:DashboardService) { }
  
  ngOnInit(): void {
       this.dashboardService.getTimeSeries().switchMap(res=>{
         this.convertToWorld(res)
        return this.dashboardService.getCases()
       }).subscribe(res=>{
         this.updateCases(res)
       })
  }

  updateCases(value){
    this.confirmedCases=value['cases']
    this.recoveredCases=value['recovered']
    this.deathCases=value['deaths']
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
     this.lineChartData=[
      { data: this.confirmedTimeSeries.slice(this.confirmedTimeSeries.length-7,this.confirmedTimeSeries.length), label: 'Confirmed',borderDash:[2,1] },
    ];
  }
  
  changeClass(value){
    this.activeButton=value;
    switch(value){
      case 'confirmed':{
        this.class='red'
        this.lineChartData=[
          { data: this.confirmedTimeSeries.slice(this.confirmedTimeSeries.length-7,this.confirmedTimeSeries.length), label: 'Confirmed',
          borderDash: [2,1] }
        ]
        this.lineChartColors=[
          {
            borderColor: '#ff0019',
            backgroundColor: 'rgb(255,255, 255)',
          },
        ];
        break;
      }
      case 'deaths':{
        this.class='red'
        this.lineChartData=[
          { data: this.deathsTimeSeries.slice(this.deathsTimeSeries.length-7,this.deathsTimeSeries.length), label: 'Deaths',
          borderDash: [2,1] }
        ]
        this.lineChartColors=[
          {
            borderColor: '#ff0019',
            backgroundColor: 'rgb(255,255, 255)'
          }
        ];
        break;
      }
      case 'recovered':{ 
      this.class='green'
      this.lineChartData=[
        { data: this.recoveredTimeSeries.slice(this.recoveredTimeSeries.length-7,this.recoveredTimeSeries.length), label: 'Recovered',
        borderDash: [2,1] }
      ]
      this.lineChartColors=[
        {
          borderColor: '#06BA90',
          backgroundColor: 'rgb(255,255, 255)',
        },
      ];  
        break;
      }
    }
  }
  

  getClass(value){
    if (this.activeButton===value)
      return 'active';
  }

}
