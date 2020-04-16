import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getCases(){
    return this.http.get('https://corona.lmao.ninja/all')
  }

  getCountriesData(){
    return this.http.get('https://corona.lmao.ninja/countries')
  }

  getTwitterFeeds(){
    return this.http.get('http://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=WHO',{headers:new HttpHeaders().set('Authorization','Bearer 5954192-Lr0ma2vvgF34aPWMmAibWlam2YxVTuWb2CPqY7MVTr')})
  }

  getYouTubeFeeds(){

  }

  getNewsFeeds(){

  } 
  
  getTimeSeries(){
    return this.http.get('https://pomber.github.io/covid19/timeseries.json')
  }

}
