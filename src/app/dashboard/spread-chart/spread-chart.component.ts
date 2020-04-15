import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-spread-chart',
  templateUrl: './spread-chart.component.html',
  styleUrls: ['./spread-chart.component.css']
})
export class SpreadChartComponent implements OnInit {

  activeButton='confirmed';

  chartOptions = {
    responsive: true,
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
  }
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Confirmed',
    borderDash: [2,1] }
  ];

  chartLabels = ['January', 'February', 'March', 'April'];

  lineChartColors: Color[] = [
    {
      borderColor: '#ff0019',
      backgroundColor: 'rgb(255,255, 255)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }
  
  ngOnInit(): void {
  }
  
  changeClass(value){
    this.activeButton=value;
    if(value==='confirmed'){
      this.chartData=[
        { data: [120, 455, 100, 340], label: 'Confirmed',
        borderDash: [2,1] }
      ]
      this.lineChartColors=[
        {
          borderColor: '#ff0019',
          backgroundColor: 'rgb(255,255, 255)',
        },
      ];
    }
    else if(value==='deaths'){
      this.chartData=[
        { data: [120, 455, 100, 340], label: 'Deaths',
        borderDash: [2,1] }
      ]
      this.lineChartColors=[
        {
          borderColor: '#ff0019',
          backgroundColor: 'rgb(255,255, 255)'
        }
      ];
    }
    else{
      this.chartData=[
        { data: [120, 455, 100, 340], label: 'Recovered',
        borderDash: [2,1] }
      ]
      this.lineChartColors=[
        {
          borderColor: '#06BA90',
          backgroundColor: 'rgb(255,255, 255)',
        },
      ];  
    } 
  }
  
  onChartClick(event) {
    console.log(event);
  }

  getClass(value){
    if (this.activeButton===value)
      return 'active';
  }

}
