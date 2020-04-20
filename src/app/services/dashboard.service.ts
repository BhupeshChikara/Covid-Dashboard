import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getCases(){
    return this.http.get('https://corona.lmao.ninja/v2/all')
  }

  getCountriesData(){
    return this.http.get('https://corona.lmao.ninja/v2/countries')
  }

  getTwitterFeeds(){
    return this.http.get('http://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=WHO',{headers:new HttpHeaders({}).set('Authorization','Bearer 5954192-Lr0ma2vvgF34aPWMmAibWlam2YxVTuWb2CPqY7MVTr')})
  }

  getYouTubeUploadKey(){
    return this.http.get('https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=who&key=').map(res=>res['items'][0].contentDetails.relatedPlaylists.uploads)
  }

  getYouTubeVideos(value){
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${value}&key=AIzaSyC2HU1Qbfos9C4rYcnTtsKfRLCB2l9AVWk&part=snippet&maxResults=12`).map(res=>res['items'])
  }

  getNewsFeeds(){
    return this.http.get('https://www.who.int/rss-feeds/news-english.xml', {responseType: 'text'})
  } 
  
  getTimeSeries(){
    return this.http.get('https://pomber.github.io/covid19/timeseries.json')
  }

}
