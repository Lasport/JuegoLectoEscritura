import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { IdentifyGameComponent } from './components/identify-game/identify-game.component';
import { LoginComponent } from './components/login/login.component';
import { SelecGameComponent } from './components/selec-game/selec-game.component';
import { WritingGameComponent } from './components/writing-game/writing-game.component';
import { GraphicsModule } from './graphics/graphics.module';
import { SelecGraphicComponent } from './graphics/selec-graphic/selec-graphic.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SumasComponent } from './components/sumas/sumas.component';

const APP_ROUTES: Routes = [
  { path:'login', component: LoginComponent },
  { path:'selec-game', component: SelecGameComponent },
  { path:'writing-game', component: WritingGameComponent },
  { path:'identify-game', component: IdentifyGameComponent },
  {  path:'selec-graphi',component: SelecGraphicComponent},
  { path:'suma', component: SumasComponent },
  { path:'dash', component: DashboardComponent },
  { path:'home', component: HomeComponent},
  {  path:'graphics',loadChildren:()=>import('./graphics/graphics.module').then(m => m.GraphicsModule)},
  {  path:'consecutivo', loadChildren:()=>import('./concecutivo/concecutivo.module').then(m=>m.ConcecutivoModule)},
  {  path:'memorama' , loadChildren:()=>import('./memorama/memorama.module').then(m=>m.MemoramaModule)},
  { path: '**', pathMatch: 'full', redirectTo:'home'},

];
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
