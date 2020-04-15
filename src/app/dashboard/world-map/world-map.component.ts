import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
declare var $:any
declare var sample_data:any;
@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  countries={};
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getCountriesData().subscribe(res=>{
       for(let item in res){
         if(res[item].countryInfo.iso2){
           let country=res[item].countryInfo.iso2.toLowerCase()
        console.log()
        this.countries[country]=res[item].cases}
      }
      console.log(this.countries)
      $('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#FBF6F6',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        onLabelShow: (event,label, code)=>
        { 
          label.append(': '+this.countries[code]+' Cases'); 
        },
        values: this.countries,
        scaleColors: ['#FFC4C6', '#FF0019'],
        normalizeFunction: 'polynomial'
    });

    })

    
  }

}
