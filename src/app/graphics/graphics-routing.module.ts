import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicAf3Component } from './selec-graphic/graphic-af3/graphic-af3.component';
import { GraphicT7Component } from './selec-graphic/graphic-t7/graphic-t7.component';
import { GraphicT8Component } from './selec-graphic/graphic-t8/graphic-t8.component';
import { SelecGraphicComponent } from './selec-graphic/selec-graphic.component';

const routes: Routes = [
  {
  path:'',
  children: [
  {path:'graphic-af3',component:GraphicAf3Component},
  {path:'graphic-t7',component:GraphicT7Component},
  {path:'graphic-t8',component:GraphicT8Component},
  {path:'selec-graphic',component:SelecGraphicComponent},
  { path: '**' , redirectTo:''}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
