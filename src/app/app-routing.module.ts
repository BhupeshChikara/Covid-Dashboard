import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { LinksComponent } from './links/links.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'faq',component:FaqComponent},
  {path:'importantLinks',component:LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
