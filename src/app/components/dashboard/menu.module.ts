import { Component, NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MemoramaGameComponent } from '../memorama-game/memorama-game.component';
import { SelecGameComponent } from '../selec-game/selec-game.component';
import { WritingGameComponent } from '../writing-game/writing-game.component';
import { IdentifyGameComponent } from '../identify-game/identify-game.component';
import { GraficaComponent } from '../grafica/grafica.component';
import { SumasComponent } from '../sumas/sumas.component';
import { JuegoGatoComponent } from '../juego-gato/juego-gato.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';



const APP_ROUTES: Routes = [

  { path:'login', component: LoginComponent },
  { path:'memorama-game', component: MemoramaGameComponent },
  { path:'selec-game', component: SelecGameComponent },
  { path:'writing-game', component: WritingGameComponent },
  { path:'identify-game', component: IdentifyGameComponent },
  { path:'grafica', component: GraficaComponent },
  { path:'suma', component: SumasComponent },
  { path:'juego-gato', component:JuegoGatoComponent},
  { path:'dash', component: DashboardComponent },
  { path:'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo:'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
