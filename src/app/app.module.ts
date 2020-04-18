import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { LinksComponent } from './links/links.component';
import { CasesComponent } from './dashboard/cases/cases.component';
import { TweetsComponent } from './dashboard/tweets/tweets.component';
import { CountriesComponent } from './dashboard/countries/countries.component';
import { WorldMapComponent } from './dashboard/world-map/world-map.component';
import { SpreadChartComponent } from './dashboard/spread-chart/spread-chart.component';
import { NewsComponent } from './dashboard/news/news.component';
import { RecoveryComponent } from './dashboard/recovery/recovery.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { DecimalPipe } from './pipes/decimal.pipe';
import { YoutubeComponent } from './feeds/youtube/youtube.component';
import { NewsUpdateComponent } from './feeds/news-update/news-update.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FaqComponent,
    LinksComponent,
    CasesComponent,
    TweetsComponent,
    CountriesComponent,
    WorldMapComponent,
    SpreadChartComponent,
    NewsComponent,
    RecoveryComponent,
    DecimalPipe,
    YoutubeComponent,
    NewsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
