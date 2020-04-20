import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidDashboard';
  ngOnInit(){
    setInterval(()=>{
      location.reload()
    },60*1000)
  }
}
