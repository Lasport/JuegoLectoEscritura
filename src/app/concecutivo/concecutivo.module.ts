import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcecutivoRoutingModule } from './concecutivo-routing.module';
import { LevelsComponent } from './levels/levels.component';
import { MenuComponent } from './menu/menu.component';
import { Level1Component } from './levels/level1/level1.component';
import { Level2Component } from './levels/level2/level2.component';
import { Level3Component } from './levels/level3/level3.component';


@NgModule({
  declarations: [
    LevelsComponent,
    MenuComponent,
    Level1Component,
    Level2Component,
    Level3Component
  ],
  imports: [
    CommonModule,
    ConcecutivoRoutingModule
  ]
})
export class ConcecutivoModule { }
