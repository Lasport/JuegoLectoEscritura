import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SelecGameComponent } from './selec-game/selec-game.component';
import { WritingGameComponent } from './writing-game/writing-game.component';
import { IdentifyGameComponent } from './identify-game/identify-game.component';
import { MemoramaGameComponent } from './memorama-game/memorama-game.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SelecGameComponent,
    WritingGameComponent,
    IdentifyGameComponent,
    MemoramaGameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
