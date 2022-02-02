import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1Component } from './levels/level1/level1.component';
import { Level2Component } from './levels/level2/level2.component';
import { Level3Component } from './levels/level3/level3.component';
import { LevelsComponent } from './levels/levels.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path:'' , 
  children:[
{path:'levels' , component:LevelsComponent},
{path:'level1' , component:Level1Component},
{path:'level2' , component:Level2Component},
{path:'level3' , component:Level3Component},
{path:'menu', component:MenuComponent},
{path:'**' , redirectTo:'consecutivo'}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcecutivoRoutingModule { }
