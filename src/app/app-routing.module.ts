import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { LinksComponent } from './components/links/links.component';
import { YoutubeComponent } from './components/feeds/youtube/youtube.component';
import { NewsUpdateComponent } from './components/feeds/news-update/news-update.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'faq',component:FaqComponent},
  {path:'importantLinks',component:LinksComponent},
  {path:'feed/youtube',component:YoutubeComponent},
  {path:'feed/news',component:NewsUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
