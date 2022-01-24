import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Servicio

 import { LoadGraphService } from './load-graph.service'

//

//import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SelecGameComponent } from './components/selec-game/selec-game.component';
import { WritingGameComponent } from './components/writing-game/writing-game.component';
import { IdentifyGameComponent } from './components/identify-game/identify-game.component';
import { MemoramaGameComponent } from './components/memorama-game/memorama-game.component';
import { LoginComponent } from './components/login/login.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { APP_ROUTING } from './app-routing.module';
import { SumasComponent } from './components/sumas/sumas.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JuegoGatoComponent } from './components/juego-gato/juego-gato.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SelecGameComponent,
    WritingGameComponent,
    IdentifyGameComponent,
    MemoramaGameComponent,
    LoginComponent,
    GraficaComponent,
    SumasComponent,
    HomeComponent,
    DashboardComponent,
    JuegoGatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    //NgxChartsModule
  ],
  providers: [
    LoadGraphService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
