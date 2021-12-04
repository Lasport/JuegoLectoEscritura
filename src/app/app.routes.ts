import { RouterModule,Routes } from "@angular/router";



const APP_ROUTES: Routes = [

/*    {path: 'selectgame',component: SelecGameComponent},
    {path: 'writingame',component: WritingGameModule},
    {path: 'identifygame',component: IdentifyWordsGameModule},
    {path: 'memorama',component: MemoramaModule},
    {path: 'operation',component: OperationsGameModule },
    {path: 'orderin',component: OrderingModule},
    {path:'**',pathMatch:'full', redirectTo:'selectgame'}*/
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
