import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  videos
  constructor(private dashboardService:DashboardService,private sanitizer:DomSanitizer) { 
    setInterval(()=>{
      this.dashboardService.getYouTubeUploadKey().switchMap(res=>{
        return  this.dashboardService.getYouTubeVideos(res)
    }).subscribe(res=>{
       this.videos=res
    })
    },60*1000)
  }

  ngOnInit(): void {
    this.dashboardService.getYouTubeUploadKey().switchMap(res=>{
        return  this.dashboardService.getYouTubeVideos(res)
    }).subscribe(res=>{
       this.videos=res
    })
  }

  getEmbededUrl(value){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+value.snippet.resourceId.videoId+'?ecver=2')
  }

}
