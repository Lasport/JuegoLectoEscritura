import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//Service

import { LoadGraphService } from './load-graph.service';

//import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WritingGameComponent } from './components/writing-game/writing-game.component';
import { IdentifyGameComponent } from './components/identify-game/identify-game.component';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WritingGameComponent,
    IdentifyGameComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    NgChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    //NgxChartsModule
  ],
  providers: [
    LoadGraphService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
