import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  countries=[];
  countriesCopy=[];
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getCountriesData().subscribe(res=>{
       this.addCoutries(res)
    })
  }

  addCoutries(value){
    for(let item of value){
      this.countries.push(item);
      this.countriesCopy.push(item);
    }
  }
  
  filter(value){
    let query=value.toLowerCase()
    this.countries=this.countriesCopy
    this.countries=query?this.countries.filter(p=>p.country.toLowerCase().includes(query))
    :this.countriesCopy;
  }

  

}
