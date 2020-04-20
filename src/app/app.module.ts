import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { LinksComponent } from './components/links/links.component';
import { CasesComponent } from './components/dashboard/cases/cases.component';
import { TweetsComponent } from './components/dashboard/tweets/tweets.component';
import { CountriesComponent } from './components/dashboard/countries/countries.component';
import { WorldMapComponent } from './components/dashboard/world-map/world-map.component';
import { SpreadChartComponent } from './components/dashboard/spread-chart/spread-chart.component';
import { NewsComponent } from './components/dashboard/news/news.component';
import { RecoveryComponent } from './components/dashboard/recovery/recovery.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsModule } from 'ng2-charts';
import { DecimalPipe } from './pipes/decimal.pipe';
import { YoutubeComponent } from './components/feeds/youtube/youtube.component';
import { NewsUpdateComponent } from './components/feeds/news-update/news-update.component'
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    HttpClientModule,
    ChartsModule,
    NgCircleProgressModule.forRoot({
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
