import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';
import { GraphicsRoutingModule } from './graphics-routing.module';
import { GraphicAf3Component } from './selec-graphic/graphic-af3/graphic-af3.component';
import { GraphicT7Component } from './selec-graphic/graphic-t7/graphic-t7.component';
import { GraphicT8Component } from './selec-graphic/graphic-t8/graphic-t8.component';
import { SelecGraphicComponent } from './selec-graphic/selec-graphic.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    GraphicAf3Component,
    GraphicT7Component,
    GraphicT8Component,
    SelecGraphicComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})

export class GraphicsModule { }

