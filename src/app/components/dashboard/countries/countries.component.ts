import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  query;
  countries=[];
  filteredCountries=[];
  constructor(private dashboardService:DashboardService) { 
    setInterval(()=>{
      this.dashboardService.getCountriesData().subscribe(res=>{
        this.addCoutries(res)
      })
    },60*1000)
  }

  ngOnInit(): void {
    this.dashboardService.getCountriesData().subscribe(res=>{
       this.addCoutries(res)
    })
  }

  addCoutries(value){
    for(let item of value){
      this.countries.push(item);
      this.filteredCountries.push(item);
    }
  }
  
  filter(){
    this.countries=this.query?this.filteredCountries.filter(p=>p.country.toLowerCase().includes(this.query.toLowerCase()))
    :this.filteredCountries;
  }
}
