import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoramaRoutingModule } from './memorama-routing.module';
import { Level1Component } from './levels/level1/level1.component';
import { Level2Component } from './levels/level2/level2.component';
import { Level3Component } from './levels/level3/level3.component';
import { LevelsComponent } from './levels/levels.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    Level1Component,
    Level2Component,
    Level3Component,
    LevelsComponent,
    MenuComponent,
    
  ],
  imports: [
    CommonModule,
    MemoramaRoutingModule
  ]
})
export class MemoramaModule { }
